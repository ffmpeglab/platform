# Supabase Extension Template

[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Vault](https://img.shields.io/badge/Vault-FFD700?style=for-the-badge&logo=vault&logoColor=black)](https://www.vaultproject.io/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

**A secure, idempotent foundation for building Supabase extensions that require Vault‑managed secrets, fine‑grained database permissions, and full organization/project management.**

This template handles **platform user authentication via Supabase Auth**, **OAuth2 Connect** to let users bring their own Supabase projects, provisions dedicated database users per tenant, stores all secrets in HashiCorp Vault, provides an omnidempotent API layer, and exposes **REST endpoints** for organizations, projects, tenant status, and OAuth2 flow – ready to use out of the box.

---

## Why This Template?

When building a Supabase extension (e.g., a file processing service, a data sync tool, or an analytics add‑on), you need to solve multiple challenges:

1. **Who is using your platform?** – Users sign up/log in via Supabase Auth. The `userId` from the JWT scopes all operations.
2. **Which organizations and projects do they have?** – The template integrates with Supabase's Management API to list organizations and their projects.
3. **Which Supabase project do they want to connect?** – Users authorise your extension to access their own Supabase project via **Supabase Connect (OAuth2)** .
4. **How to provision secure, isolated tenants?** – Creates dedicated database users per (user, project) pair, idempotently.
5. **How to manage tenant lifecycle?** – Exposes endpoints to enable/disable tenants.

This template solves all of these, with:

- **Full REST API** for organizations, projects, tenants, and OAuth2 flow.
- **Automatic OAuth2 token refresh**.
- **Secure credential storage in Vault**.
- **Idempotent provisioning** – safe to retry.

---

## What It Provides

| Feature | Description |
|---------|-------------|
| **Platform User Authentication** | Uses Supabase Auth to authenticate users of your extension. All endpoints are protected by `withSupabase` guard. |
| **Organization & Project Listing** | Calls Supabase Management API to list the user's organizations and their projects. |
| **OAuth2 Connect (Bring Your Own Supabase)** | Users authorise your extension to access their Supabase project via Supabase Connect. |
| **Idempotent Tenant Provisioning** | Each platform user + external project pair gets a dedicated database user. Creation is idempotent. |
| **Tenant Lifecycle Management** | Enable/disable tenants via a toggle endpoint. |
| **Secure Credential Storage** | All secrets (OAuth2 tokens, database credentials) are stored in Vault. |
| **Automated Token Refresh** | OAuth2 access tokens are refreshed automatically when expired. |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    Your Extension (NestJS)                              │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  @UseGuards(withSupabase) – validates JWT, injects userClaims   │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  AppController (REST endpoints)                                  │ │
│  │  - GET /platform/me                                              │ │
│  │  - GET /platform/organizations                                   │ │
│  │  - GET /platform/projects/:orgId                                 │ │
│  │  - GET /platform/tenant/:projectId                               │ │
│  │  - PUT /platform/tenant/:projectId/:status                       │ │
│  │  - GET /platform/login (initiate OAuth2)                         │ │
│  │  - GET /platform/connect/project/:projectId (provision tenant)   │ │
│  │  - GET /platform/oauth2/callback (OAuth2 callback)               │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  AppService (core logic)                                         │ │
│  │  - getTenant(), createTenant(), updateTenant()                   │ │
│  │  - createSupaClient() – uses Vault-stored tokens                │ │
│  └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                   HashiCorp Vault                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  secret/users/{userId}          → OAuth2 session tokens            │ │
│  │  secret/tenants/{userId}/{projectId} → Tenant records & DB creds   │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          Supabase (x2)                                  │
│  ┌─────────────────────────────┐  ┌──────────────────────────────────┐ │
│  │  Your Platform's Supabase   │  │  User's External Supabase        │ │
│  │  - Auth (users table)       │  │  - PostgreSQL (per‑tenant user)  │ │
│  │  - Management API           │  │  - Storage                       │ │
│  └─────────────────────────────┘  └──────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## API Endpoints (Fully Implemented)

The template exposes a comprehensive REST API. All endpoints are protected by the `withSupabase` guard, which validates the Supabase JWT from the `Authorization` header and injects the user's claims.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/platform/me` | Returns the authenticated platform user's info (from Supabase Auth). Also checks if the user has an OAuth2 session (i.e., has connected Supabase Connect). |
| `GET` | `/platform/organizations` | Lists all Supabase organizations the authenticated user belongs to. |
| `GET` | `/platform/projects/:orgId` | Lists all Supabase projects within the given organization. |
| `GET` | `/platform/tenant/:projectId` | Retrieves the tenant record for the given project (if provisioned). Returns `id`, `name`, `status`, `ffmpeglabStatus`, `ref`, `region`, `created`. |
| `PUT` | `/platform/tenant/:projectId/:status` | Toggles the tenant's `ffmpeglabStatus` (e.g., `"on"`/`"off"`). Updates the tenant record in Vault. |
| `GET` | `/platform/login` | Initiates the OAuth2 flow with Supabase Connect. Returns the redirect URI to send the user to. |
| `GET` | `/platform/connect/project/:projectId` | Provisions a tenant for the given project. If already provisioned and enabled, returns `{ status: 'on' }`; otherwise creates the tenant (idempotent) and returns `{ status: 'on' }`. |
| `GET` | `/platform/oauth2/callback` | OAuth2 callback endpoint (handled separately; exchanges code, stores session, redirects to frontend). |

> **Note**: The `tenant` endpoints use the platform user's `userId` (from the JWT) to scope the operation – so users can only access their own tenants.

---

## Environment Variables (All Required)

Create a `.env` file in the root:

```env
# ============================================
# 1. PLATFORM SUPABASE (Auth & Management API)
# ============================================
SUPABASE_URL=https://your-platform-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=your_publishable_key   # used by withSupabase guard
SUPABASE_SECRET_KEY=your_service_role_key       # used to validate JWTs
SUPABASE_JWKS_URL=https://your-platform-project.supabase.co/auth/v1/.well-known/jwks.json

# ============================================
# 2. EXTERNAL PROJECT CONNECT (OAuth2)
# ============================================
SUPA_CONNECT_CLIENT_ID=your_client_id
SUPA_CONNECT_CLIENT_SECRET=your_client_secret

# ============================================
# 3. HASHICORP VAULT
# ============================================
VAULT_URL=https://vault.your-domain.com
VAULT_TOKEN=your_vault_token

# ============================================
# 4. SERVICE URLs & PORTS
# ============================================
PLATFORM_HOST=http://localhost:7001          # Your API server URL
WEBAPP_HOST=http://localhost:8080            # Your frontend URL (OAuth redirect)
FFMPEGLAB_PLATFORM_PORT=7001                 # Port for this service

# ============================================
# 5. SECURITY & SESSIONS
# ============================================
TOKEN_EXPIRE_TIME=3600                       # optional, default 3600s
COOKIE_SECRET=your-strong-secret-here        # sign session cookies (min 32 chars)

# ============================================
# 6. DATABASE POOLER (for provisioning users)
# ============================================
SUPABASE_CLOUD_POSTGRES_POOLER_URL=.pooler.supabase.com
SUPABASE_CLOUD_POSTGRES_POOLER_PORT=6543
```

### Environment Variables Reference

| Variable | Purpose | Required |
|----------|---------|----------|
| `SUPABASE_URL` | Your platform's Supabase project URL. | ✅ Yes |
| `SUPABASE_PUBLISHABLE_KEY` | Publishable (anon) key for the platform Supabase (used by `withSupabase` guard). | ✅ Yes |
| `SUPABASE_SECRET_KEY` | Service role key for the platform Supabase (used to validate JWTs). | ✅ Yes |
| `SUPABASE_JWKS_URL` | JWKS URL for the platform Supabase (for JWT verification). | ✅ Yes |
| `SUPA_CONNECT_CLIENT_ID` | OAuth2 client ID from Supabase Connect. | ✅ Yes |
| `SUPA_CONNECT_CLIENT_SECRET` | OAuth2 client secret. | ✅ Yes |
| `VAULT_URL` | HashiCorp Vault server address. | ✅ Yes |
| `VAULT_TOKEN` | Authentication token for Vault. | ✅ Yes |
| `PLATFORM_HOST` | Public URL of this API service (for OAuth2 redirects). | ✅ Yes |
| `WEBAPP_HOST` | Your frontend URL (where users are sent after OAuth). | ✅ Yes |
| `FFMPEGLAB_PLATFORM_PORT` | Port the server listens on. | ✅ Yes |
| `TOKEN_EXPIRE_TIME` | Session expiry in seconds (default: 3600). | ❌ Optional |
| `COOKIE_SECRET` | Secret used to sign session cookies. **Use a long, random string** (min 32 chars). | ✅ Yes |
| `SUPABASE_CLOUD_POSTGRES_POOLER_URL` | Pooler hostname suffix (e.g., `.pooler.supabase.com`). | ✅ Yes |
| `SUPABASE_CLOUD_POSTGRES_POOLER_PORT` | Pooler port (usually `6543`). | ✅ Yes |

---

## How It Works (Step‑by‑Step)

### 1. Platform User Logs In
- User signs up / logs in via Supabase Auth on your frontend.
- Frontend obtains a JWT and sends it in `Authorization: Bearer <jwt>` to your API.
- The `withSupabase` guard validates the JWT and attaches `userClaims` to the request context.

### 2. User Lists Organizations & Projects
- The frontend calls `GET /platform/organizations` → returns the user's Supabase orgs.
- Then calls `GET /platform/projects/:orgId` → lists all projects in that org.

### 3. User Connects a Project (OAuth2)
- The frontend calls `GET /platform/login` to get the OAuth2 redirect URI.
- The user is redirected to Supabase Connect to authorise your extension.
- After authorisation, Supabase redirects to `/platform/oauth2/callback` with a code.
- The callback exchanges the code, stores the session in Vault under `secret/users/{userId}`, and redirects back to your frontend with status.

### 4. Tenant Provisioning (Idempotent)
- When the user selects a project, the frontend calls `GET /platform/connect/project/:projectId`.
- The service checks Vault for an existing tenant at `secret/tenants/{userId}/{projectId}`.
- If found and enabled, it returns quickly.
- If not found, it generates deterministic database credentials, creates the database user in the external Supabase project, and stores the tenant record in Vault.

### 5. Tenant Management
- `GET /platform/tenant/:projectId` retrieves the tenant record.
- `PUT /platform/tenant/:projectId/:status` toggles the tenant's `ffmpeglabStatus` (e.g., enable/disable).

### 6. Ongoing Operations
- All endpoints automatically refresh the OAuth2 access token if expired (using the stored refresh token), ensuring seamless operation.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22 or newer)
- [HashiCorp Vault](https://www.vaultproject.io/) (self‑hosted or cloud)
- **Two Supabase projects** (or one, but conceptually):
  1. **Platform Supabase** – handles authentication for your extension's users.
  2. **External Supabase** – the user's own project (they connect via OAuth2).
- [Supabase Connect](https://supabase.com/docs/guides/integrations/build-a-supabase-oauth-integration) configured for OAuth2.

### Installation

```bash
# Clone the template
git clone https://github.com/ffmpeglab/platform.git my-extension
cd my-extension

# Install dependencies
npm install

# Build
npm run build

# Start the server
npm start
```

### Docker

```bash
docker build -t my-extension .
docker run -p 7001:7001 --env-file .env my-extension
```

---

## Vault Secrets Structure

The template stores secrets at these Vault paths, scoped to the platform `userId`:

| Path | Content |
|------|---------|
| `secret/users/{userId}` | Platform user's OAuth2 session: `{ access_token, refresh_token, expires_at }` |
| `secret/tenants/{userId}/{projectId}` | Tenant record: `{ id, name, status, ffmpeglabStatus, ref, region, created, databaseUser, databasePassword }` |

---

## Development

```bash
# Watch mode
npm run start:dev

# Lint
npm run lint

# Format
npm run format

# Test
npm test
```

---

## Customising for Your Extension

- **Add business logic** – extend or replace `AppService`.
- **Add new endpoints** – create additional controllers.
- **Adjust OAuth2 scopes** – modify the Supabase Connect request if you need more permissions.
- **Extend tenant provisioning** – e.g., create custom schemas, set up RLS policies, or initialise tables when a tenant is created.

---

## 🧭 Deployment & Infrastructure

The FFmpegLab Platform is designed to be deployed behind a reverse proxy, typically **nginx**, which handles routing, CORS headers, and domain restrictions. This setup ensures that all services (API, Platform, Supabase) are served from a **single domain**, preventing cross-origin issues and centralising access control.

A production‑grade nginx configuration (similar to the one used in the [FFmpegLab WebApp](https://github.com/ffmpeglab/webapp/blob/main/nginx.conf)) looks like this:

```nginx
upstream api {
    server ${FFMPEGLAB_API_FQDN};
}

upstream platform {
    server ${FFMPEGLAB_PLATFORM_FQDN};
}

upstream supabase {
    server ${SUPABASE_FQDN};
}

server {
    listen ${FFMPEGLAB_UI_PORT};
    server_name frontend;
    root /usr/share/nginx/html;

    # Security headers – enforce cross-origin isolation
    add_header cross-origin-embedder-policy "require-corp";
    add_header cross-origin-opener-policy "cross-origin";
    add_header cross-origin-resource-policy "cross-origin";

    # Serve the static frontend
    location / {
        try_files $${ESCAPED_URI} /webapp/index.html;
    }

    location /webapp/ {
        try_files $${ESCAPED_URI} /webapp/index.html;
    }

    location = /config.json {
        try_files $${ESCAPED_URI} $${ESCAPED_URI}/ /webapp/config.json;
    }

    location = /templates.json {
        try_files $${ESCAPED_URI} $${ESCAPED_URI}/ /webapp/templates.json;
    }

    # Proxy requests to the respective backends
    location /auth/ {
        proxy_pass http://supabase;
    }

    location /rest/ {
        proxy_pass http://supabase;
    }

    location /storage/ {
        proxy_pass http://supabase;
    }

    location /platform/ {
        proxy_pass http://platform;
    }

    location /api {
        proxy_pass http://api;
    }

    location /renders/ {
        proxy_pass http://api;
    }

    location /files/ {
        proxy_pass http://api;
    }

    location /pipelines/ {
        proxy_pass http://api;
    }
}
```

### How This Works with the Platform

- **Single‑Domain Architecture** – All traffic enters through a single nginx instance, which routes requests to the correct upstream service based on the URL path. This eliminates CORS preflight requests and simplifies client‑side configuration.
- **Security Headers** – The `cross-origin-*` headers enforce a strict cross‑origin isolation policy, which is required for features like `SharedArrayBuffer` and helps prevent side‑channel attacks.
- **Path‑Based Routing** – Requests to `/platform/` are proxied directly to the FFmpegLab Platform service, while `/auth/`, `/rest/`, and `/storage/` go to Supabase, and `/api`, `/renders/`, `/files/`, and `/pipelines/` go to the main API service.
- **Restricted Domain** – By configuring nginx to listen on a specific domain and not exposing individual services directly, you ensure that the Platform can only be accessed through the approved frontend, reducing the attack surface.

When deploying your own extension based on this template, you can adapt this nginx configuration to:
- Point the `platform` upstream to your instance of this service.
- Adjust the `api` upstream to your own business‑logic API (if you have one).
- Keep or remove the other location blocks depending on which services you use.

This setup gives you a clean, secure, and scalable foundation for running your Supabase extension in production.

---

## License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/ffmpeglab/platform/blob/main/LICENSE) file for details.

---

## Links

- **Website**: [ffmpeglab.com](https://ffmpeglab.com)
- **GitHub**: [github.com/ffmpeglab/platform](https://github.com/ffmpeglab/platform)
- **Documentation**: [ffmpeglab.com/docs](https://ffmpeglab.com/docs)
- **Discord**: [Join our community](https://discord.gg/ffmpeglab)

---

**Built with ❤️ by the FFmpegLab team. Open source, self‑hostable, and privacy‑first.**  
Use this template to accelerate your own Supabase extension development.