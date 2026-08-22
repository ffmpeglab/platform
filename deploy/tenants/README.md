# tenants

Turns a Vault registry into one FFmpegLab release per tenant.

**This is not part of deploying FFmpegLab.** `./deploy/deploy.sh` never runs it. It uses
the same chart, once per tenant, and exists because the application binds one
process to one database — so a tenant is a deployment, not a setting.

```
Vault registry  →  terraform  →  one namespace + one release per tenant
                        ↑
              status flag decides which exist
```

## What it does

Reads every record under `secret/tenants/<userId>/<projectId>`, keeps a release
for each one whose `ffmpeglabStatus` is `on`, and removes the namespace, release
and Secret of any that is switched off or deleted.

It does not create tenants. The platform writes them into Vault; this only
follows.

## Running it

```bash
export VAULT_ADDR=https://vault.example.com
export TF_VAR_vault_token=$(vault login -token-only -method=userpass username=<user>)
export TF_VAR_vault_address=$VAULT_ADDR

terraform -chdir=deploy/tenants/terraform init
terraform -chdir=deploy/tenants/terraform apply -var-file=cloud.tfvars
```

`cloud.tfvars` targets a GKE cluster, `demo.tfvars` a single-node local one.

State lives in a bucket, declared in `backend.tf` on its own so a local run can
delete that file and keep state in a local file instead. Without that, running
this at all would need an account on the project holding the bucket.

## Credentials

By default Terraform reads each record and writes the Secret, which puts every
tenant password into Terraform state.

With `manage_secrets = false` and `vaultSecret.enabled = true`, the Vault Secrets
Operator produces the Secret instead — see [../vso/](../vso/). Terraform then
holds only which tenants exist, and a rotated password reaches the pods without
a pipeline run.

One read remains: Terraform still fetches each record to find `ffmpeglabStatus`,
and that response lands in state. Writing the flag to `custom_metadata` as well
would let it decide from metadata alone and keep credentials out of state
entirely — see [../vault/README.md](../vault/README.md).
