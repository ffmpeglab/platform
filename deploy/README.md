# deploy

Terraform that builds the cloud side of FFmpegLab: a Kubernetes cluster and the
FFmpegLab releases running on it.

Moved here from `ffmpeglab/server` unchanged. That repository now only deploys
the application into a cluster that already exists — locally or on-prem. Anything
that creates cloud resources belongs here, next to the API that will drive it.

## Why it is in this repository

The intended flow is a button in the FFmpegLab UI, not a pipeline:

```
  user signs in to Google Cloud with OAuth
        │
        ▼
  user clicks "deploy" in the FFmpegLab UI
        │
        ▼
  platform REST API
        │
        ▼
  Terraform runs               ← this folder
        │
        ▼
  Google Cloud API  →  GKE cluster + FFmpegLab, in the user's own account
```

Terraform applies into the account the user authorised, not into a shared
FFmpegLab project. Nothing here is run by CI: there is no deployment workflow in
this repository and none is planned, because the API is what triggers Terraform.
That is why the code lives next to the API.

## What each folder does

| Folder | What it creates | Runs when |
|--------|-----------------|-----------|
| `cloud/gke` | the GKE cluster, its node pool, a service account, and workload identity federation | once per cluster |
| `tenants/terraform` | one namespace, one Secret and one Helm release per tenant, read from a Vault registry | whenever the tenant list changes |
| `nfs` | a `ReadWriteMany` storage class from an in-cluster NFS server | once per cluster, if the cluster has no RWX storage |

### cloud/gke

A zonal cluster with one autoscaling pool of spot nodes. Also creates the
identity a deploy process uses, so no service account key has to be stored
anywhere.

```bash
terraform -chdir=deploy/cloud/gke init
terraform -chdir=deploy/cloud/gke apply \
  -var project_id=<gcp project> -var github_repository=<owner/name>
```

State is currently a local file. That is fine for one operator and wrong for an
API that serves many users — a remote backend has to be chosen before this is
driven from the UI.

### tenants/terraform

Reads every record under `secret/tenants/<userId>/<projectId>` in Vault and keeps
a Helm release for each one whose `ffmpeglabStatus` is `on`. Switching a tenant
off removes its namespace, release and Secret; switching it on brings them back.

```bash
export TF_VAR_vault_address=https://<vault>
export TF_VAR_vault_token=<token that can read the registry>

terraform -chdir=deploy/tenants/terraform init \
  -backend-config="bucket=<state bucket>"
terraform -chdir=deploy/tenants/terraform apply -var-file=cloud.tfvars
```

It does not create tenants. The platform writes them into Vault; this follows
what is written.

`cloud.tfvars` is the profile for a GKE cluster, `demo.tfvars` for a single-node
one. It installs the chart from `ffmpeglab/server` — the path is relative and
assumes that repository sits next to this one, which will need changing when this
runs from a server rather than a laptop.

### nfs

render writes the finished file into a directory and the file runner reads it
back from there, so both pods need the same volume. GKE's default storage class
attaches to one pod at a time, which is not enough.

This installs an NFS server in the cluster backed by one ordinary disk and
exposes it as a `ReadWriteMany` class. **One replica — a single point of failure,
not production HA.** Google's managed answer is Filestore, from about $200 a
month; this costs the price of the disk.

## What still has to be built

- **Where Terraform state lives** once this is driven by the API rather than by
  hand. A local file cannot serve many users.
- **How many clusters.** One per user, one per GCP project, or one per
  deployment. Google's free tier covers one zonal cluster per billing account, so
  a cluster per deployment makes the second one cost about $73 a month.
- **Google Cloud OAuth.** The model is settled — the user authorises, Terraform
  applies into their account — but nothing in this repository implements it yet.
  The only OAuth here is Supabase Connect (`src/config.ts`), which grants access
  to Supabase projects and nothing in Google Cloud. A Google authorization flow,
  a place to run Terraform outside an HTTP request, and a record of what was
  deployed all still have to be built.
