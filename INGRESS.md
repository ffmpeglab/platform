# The Egress Controller — Concrete Implementation

In this architecture "the egress controller" is the **single entry point** that fronts everything: webapp, API, platform, and Supabase. It's the only thing exposed; everything else is cluster-internal. Here's what it looks like at each tier.

---

## Tier 1: Docker Compose (single instance)

The `nginx` service from the earlier README, made real:

```yaml
# docker-compose.override.yml
services:
  nginx:
    image: nginx:1.27-alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./deploy/nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./deploy/nginx/templates:/etc/nginx/templates:ro   # envsubst
      - certs:/etc/nginx/certs
    depends_on:
      - api
      - ffmpeglab
      - supabase-kong          # self-hosted supabase gateway

volumes:
  certs:
```

`deploy/nginx/templates/default.conf.template` (envsubst-rendered):

```nginx
upstream api       { server api:3000; }
upstream webapp    { server ffmpeglab:8080; }
upstream supabase  { server supabase-kong:8000; }
upstream evolu     { server evolu:4000; }

server {
    listen 443 ssl http2;
    server_name ${PUBLIC_HOST};

    ssl_certificate     /etc/nginx/certs/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/privkey.pem;

    # Cross-origin isolation — required for SharedArrayBuffer / WASM threads
    add_header cross-origin-embedder-policy  "require-corp" always;
    add_header cross-origin-opener-policy    "cross-origin" always;
    add_header cross-origin-resource-policy  "same-site"    always;
    add_header strict-transport-security     "max-age=31536000; includeSubDomains" always;
    add_header x-content-type-options        "nosniff" always;
    add_header referrer-policy               "strict-origin-when-cross-origin" always;

    client_max_body_size 2g;                 # video uploads through file runner paths

    # ── Static webapp ──────────────────────────────────────────────
    location /webapp/ {
        proxy_pass http://webapp;
        proxy_set_header Host $host;
    }

    # ── Supabase (auth, rest, storage) ─────────────────────────────
    location /auth/    { proxy_pass http://supabase; proxy_set_header Host $host; }
    location /rest/    { proxy_pass http://supabase; proxy_set_header Host $host; }
    location /storage/ {
        proxy_pass http://supabase;
        proxy_set_header Host $host;
        proxy_request_buffering off;         # stream large uploads straight to S3-backed storage
    }

    # ── FFmpegLab API ──────────────────────────────────────────────
    location /api/       { proxy_pass http://api; proxy_set_header Host $host; }
    location /renders/   { proxy_pass http://api; proxy_set_header Host $host; }
    location /files/     { proxy_pass http://api; proxy_set_header Host $host; }
    location /pipelines/ { proxy_pass http://api; proxy_set_header Host $host; }

    # ── WebSocket endpoints (live preview, cursors, logs tailing) ──
    location ~ ^/(api|renders)/.*ws$ {
        proxy_pass http://api;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_read_timeout 3600s;            # long-lived render log streams
        proxy_send_timeout 3600s;
    }

    # ── Evolu (local-first sync) ───────────────────────────────────
    location /evolu/ {
        proxy_pass http://evolu/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

server {
    listen 80;
    server_name ${PUBLIC_HOST};
    return 301 https://$host$request_uri;
}
```

Key details that matter here:

| Detail | Why |
|---|---|
| `client_max_body_size 2g` | Video files; default 1m would break every upload |
| `proxy_request_buffering off` on `/storage/` | Don't buffer multi-GB uploads on disk |
| Explicit WS locations | Live preview/cursors/log-tailing die without `Upgrade` headers |
| COOP/COEP headers | Without them the WASM FFmpeg can't use threads (`SharedArrayBuffer`) |
| Single domain, path-routed | No CORS preflights anywhere in the app |

---

## Tier 2: Kubernetes (multi-tenant SaaS)

Here it becomes a real **Ingress/Gateway controller**.

### Model: Host-per-tenant (tenants get their own subdomain)

Then tenant releases need dynamic routing. Two options:

**Option 1 — chart creates its own Ingress per release** (simplest):

```yaml
# in the tenant Helm chart: templates/ingress.yaml
{{- if .Values.ingress.enabled }}
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: {{ include "ffmpeglab.fullname" . }}
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "2g"
spec:
  ingressClassName: nginx
  tls:
    - hosts: ["{{ .Values.tenant.subdomain }}.ffmpeglab.com"]
      secretName: {{ include "ffmpeglab.fullname" . }}-tls   # cert-manager picks this up
  rules:
    - host: "{{ .Values.tenant.subdomain }}.ffmpeglab.com"
      http:
        paths:
          - path: /
            pathType: Prefix
            backend: { service: { name: ffmpeglab-api, port: { number: 3000 } } }
{{- end }}
```

With wildcard DNS `*.ffmpeglab.com → LB` and a wildcard cert (or cert-manager HTTP-01 per host), each `helm install` self-registers its route. No central config to update.

**Option 2 — Gateway API with per-tenant HTTPRoutes**, if you're on Gateway API rather than classic Ingress:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: tenant-acme
  namespace: tenant-acme
spec:
  parentRefs:
    - name: ffmpeglab-gateway
      namespace: ffmpeglab-system
      sectionName: https
  hostnames: ["acme.ffmpeglab.com"]
  rules:
    - matches:
        - path: { type: PathPrefix, value: "/" }
      backendRefs:
        - name: ffmpeglab-api
          port: 3000
```

Gateway API's cross-namespace `parentRef` is cleaner than Ingress for many-tenant setups because the Gateway (and its cert/LB) lives once in a system namespace while routes live in tenant namespaces.

---

## What the controller itself needs configured

Regardless of model, these are the non-negotiables for this workload:

```yaml
# nginx-ingress ConfigMap additions
controller:
  config:
    # Large media bodies
    proxy-body-size: "2g"
    client-max-body-size: "2g"
    # Long-lived streams (render progress, log tailing)
    proxy-read-timeout: "3600"
    proxy-send-timeout: "3600"
    # WebSockets work out of the box on nginx-ingress ≥0.22,
    # but keep timeouts generous
    # Rate-limit the auth/platform surface specifically:
    limit-rps: "50"
```

Plus a NetworkPolicy so tenant pods are only reachable from the edge and from each other within their own namespace:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: tenant-isolation
  namespace: tenant-acme
spec:
  podSelector: {}
  policyTypes: [Ingress]
  ingress:
    - from:
        - namespaceSelector:
            matchLabels: { kubernetes.io/metadata.name: ffmpeglab-system }  # edge
        - podSelector: {}                                                    # same tenant ns
```

That last piece is the multi-tenant payoff: even though all tenants share one cluster and one edge, tenant A's pods cannot reach tenant B's pods — enforced below the application layer.

---

## Summary

| Tier | Egress controller | Routing |
|---|---|---|
| Compose | nginx container + envsubst templates | Path-based, single domain |
| K8s, shared host | nginx-ingress + one Ingress | Path-based; tenants not externally addressable |
| K8s, host-per-tenant | nginx-ingress or Gateway API | Per-release Ingress/HTTPRoute, wildcard DNS + cert-manager |

The constant across all three: **one domain, path-routed, big body limits, streaming uploads, WebSocket-friendly timeouts, and COOP/COEP headers** — those five things are what make the browser IDE actually function behind a proxy.


# Connecting the Ingress Controller to Cloudflare for SSL

The cleanest pattern for `{projectId}.ffmpeglab.com` is:

```
Browser ──HTTPS──▶ Cloudflare Edge (SSL terminates here)
                        │  Full (Strict) — re-encrypts to your origin
                        ▼
              Cloudflare DNS *.ffmpeglab.com
                        │
                        ▼
        nginx-ingress (Cloudflare Origin CA cert) ──▶ tenant Services
```

Two SSL certificates are involved — one at each hop:

| Hop | Certificate | Who issues it |
|---|---|---|
| Browser → Cloudflare | Universal/Advanced Edge Cert | Cloudflare automatically |
| Cloudflare → your cluster | **Origin CA Cert** (or Let's Encrypt via DNS-01) | You install on nginx-ingress |

---

## Step 1 — DNS: wildcard record pointing at your cluster

In Cloudflare DNS, create a single wildcard record so every tenant subdomain works without touching DNS again:

```
Type    Name    Content                 Proxy status
A       *       <load-balancer-IP>      Proxied (orange cloud)
A       @       <load-balancer-IP>      Proxied
```

With `*` proxied, `{projectId}.ffmpeglab.com` resolves instantly for any new tenant — no DNS automation needed. (If your LB gives you a hostname instead of an IP, use a CNAME.)

> ⚠️ The record **must be Proxied** for Cloudflare's edge cert to cover subdomains. Universal SSL covers `*.ffmpeglab.com` (one level deep), which matches `{projectId}.ffmpeglab.com` exactly.

---

## Step 2 — Cloudflare SSL mode

Dashboard → SSL/TLS → Overview:

**Set encryption mode to "Full (Strict)".**

This means Cloudflare validates a real certificate on your origin and always re-encrypts — traffic is never plaintext between CF and your cluster.

---

## Step 3 — Origin certificate for nginx-ingress

### Option A: Cloudflare Origin CA cert (simplest)

1. Cloudflare Dashboard → SSL/TLS → Origin Server → **Create Certificate**
   - Hostnames: `*.ffmpeglab.com`, `ffmpeglab.com`
   - Validity: up to 15 years
2. Save the cert + key as a Kubernetes Secret in the ingress namespace:

```bash
kubectl create secret tls ffmpeglab-origin-tls \
  --cert origin-cert.pem \
  --key origin-key.pem \
  -n ingress-nginx
```

3. Point nginx-ingress at it as the **default certificate** (Helm values):

```yaml
controller:
  extraArgs:
    default-ssl-certificate: "ingress-nginx/ffmpeglab-origin-tls"
  config:
    use-forwarded-headers: "true"
    compute-full-forwarded-for: "true"
```

Because it's the *default* certificate, **every tenant Ingress gets valid TLS without per-tenant cert management** — no cert-manager, no ACME challenges, nothing to renew for 15 years.

Caveat: the Origin CA cert is only trusted by Cloudflare, not by browsers. That's fine here because all traffic arrives via Cloudflare. If someone bypasses Cloudflare (direct-to-LB), they get a cert error — which is actually a feature (origin lock-down).

### Option B: Let's Encrypt wildcard via cert-manager DNS-01

If you want a publicly-trusted cert on the origin (e.g., you might expose non-CF paths later):

```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-cloudflare
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: ops@ffmpeglab.com
    privateKeySecretRef:
      name: letsencrypt-cloudflare
    solvers:
      - dns01:
          cloudflare:
            apiTokenSecretRef:
              name: cloudflare-api-token
              key: api-token
---
apiVersion: v1
kind: Secret
metadata:
  name: cloudflare-api-token
  namespace: cert-manager
stringData:
  api-token: "<token with Zone.DNS Edit on ffmpeglab.com>"
```

Then request one wildcard cert and reference it from all tenant ingresses:

```yaml
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: ffmpeglab-wildcard
  namespace: ingress-nginx
spec:
  secretName: ffmpeglab-wildcard-tls
  issuerRef:
    name: letsencrypt-cloudflare
    kind: ClusterIssuer
  dnsNames:
    - "*.ffmpeglab.com"
    - "ffmpeglab.com"
```

DNS-01 is required because HTTP-01 can't validate wildcards. Renewal is automatic (90-day cycle).

**Recommendation:** Option A unless you have a specific reason — fewer moving parts, no renewal, no API token stored in-cluster.

---

## Step 4 — Tenant Ingresses just work

With `default-ssl-certificate` set, the per-release Ingress needs no TLS section of its own:

```yaml
# tenant chart: templates/ingress.yaml
{{- if .Values.ingress.enabled }}
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: {{ include "ffmpeglab.fullname" . }}
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: "2g"
    nginx.ingress.kubernetes.io/proxy-request-buffering: "off"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "3600"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "3600"
spec:
  ingressClassName: nginx
  rules:
    - host: "{{ .Values.tenant.projectId }}.ffmpeglab.com"
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: ffmpeglab-api
                port: { number: 3000 }
{{- end }}
```

No `tls:` block needed — nginx falls back to the default wildcard cert for any host. Each `helm install` self-registers its hostname; Cloudflare's wildcard DNS already routes it.

---

## Step 5 — Cloudflare-side settings that matter for this workload

```text
SSL/TLS → Edge Certificates:
  ✅ Always Use HTTPS
  ✅ Minimum TLS Version: 1.2

Network:
  ✅ WebSockets: ON            ← live preview, cursors, log tailing

Speed → Optimization:
  ⚠️ Rocket Loader: OFF        ← breaks WASM module loading order
  ⚠️ Auto-minify JS: OFF       ← can corrupt WASM glue code

Cache Rules:
  Bypass cache on /api/*, /renders/*, /files/*, /auth/*
```

The two big gotchas for FFmpegLab specifically:

1. **Upload size**: Free/Pro plans cap request body at **100MB**, Business at 200MB, Enterprise higher. If tenants upload raw video through `/files/` or `/storage/`, either those paths need to be **grey-clouded** (DNS-only, direct to origin) or you need Enterprise.
   - Workaround: grey-cloud a dedicated upload hostname (`upload.ffmpeglab.com`, DNS-only) hitting the same ingress, and route uploads there.
2. **WASM**: disable Rocket Loader; ensure render progress streams aren't buffered (they won't be — CF passes chunked responses through).

---

## Step 6 — Real client IPs behind Cloudflare

Since everything arrives from Cloudflare IPs, restore the visitor IP for rate-limiting and logs:

```yaml
controller:
  config:
    use-forwarded-headers: "true"
    forwarded-for-header: "CF-Connecting-IP"   # Cloudflare sets this reliably
    proxy-real-ip-cidr: "173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22"
```

(That CIDR list is Cloudflare's published IPv4 ranges — keep it updated or fetch via their API.)

---

## Optional hardening: lock the origin to Cloudflare only

So nobody can bypass Cloudflare and hit your LB directly:

**Option 1 — Authenticated Origin Pulls** (mTLS from CF to origin):

```yaml
metadata:
  annotations:
    nginx.ingress.kubernetes.io/auth-tls-verify-client: "on"
    nginx.ingress.kubernetes.io/auth-tls-secret: "ingress-nginx/cloudflare-origin-pull-ca"
    nginx.ingress.kubernetes.io/auth-tls-verify-depth: "1"
```

Download Cloudflare's origin-pull CA into that secret, and toggle "Authenticated Origin Pulls" on in the dashboard.

**Option 2 — firewall the LB** to Cloudflare IP ranges only (cloud security group). Simpler, equally effective.

---

## Final picture

```
{projectId}.ffmpeglab.com
        │
        ▼ (wildcard Proxied A record)
┌─────────────────────────────┐
│  Cloudflare Edge            │  Universal SSL (*.ffmpeglab.com)
│  WAF · CDN · WebSockets ON  │  Full (Strict)
└──────────────┬──────────────┘
               │ HTTPS + Origin CA cert (mTLS optional)
               ▼
┌─────────────────────────────┐
│  nginx-ingress (LB)         │  default-ssl-certificate = origin cert
│  forwarded headers restored │  CF-Connecting-IP
└──────┬──────────────────────┘
       │ host: {projectId}.ffmpeglab.com
       ▼
  tenant Helm release Service (one per projectId)
```

New tenant onboarding is fully automatic end-to-end: platform writes Vault record → VSO makes the Secret → Reloader-ready chart installs with its own Ingress → wildcard DNS + default cert mean zero DNS/cert steps per tenant.
