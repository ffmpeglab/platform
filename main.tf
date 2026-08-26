# Vault registry in, running tenants out: an entry becomes a namespace, an
# ExternalSecret and a release; switching it off or removing it tears all three
# down. The Secret itself is written by External Secrets Operator from Vault,
# so no credential value ever passes through this module or its state.

data "http" "users" {
  url = "${local.metadata_url}?list=true"

  request_headers = {
    X-Vault-Token = var.vault_token
  }
}

locals {
  metadata_url = "${trimsuffix(var.vault_address, "/")}/v1/${var.tenant_mount}/metadata/${trim(var.tenant_prefix, "/")}"

  user_ids = data.http.users.status_code == 200 ? jsondecode(data.http.users.response_body).data.keys : []
}

data "http" "projects" {
  for_each = toset(local.user_ids)

  url = "${local.metadata_url}/${trimsuffix(each.value, "/")}?list=true"

  request_headers = {
    X-Vault-Token = var.vault_token
  }
}

locals {
  # "<userId>/<projectId>" for every project of every user.
  tenant_paths = flatten([
    for user, resp in data.http.projects : [
      for project in(resp.status_code == 200 ? jsondecode(resp.response_body).data.keys : []) :
      "${trimsuffix(user, "/")}/${trimsuffix(project, "/")}"
    ]
  ])
}

# Read over the same API as the listing - only metadata (the on/off flag).
# Secret values are fetched by ESO inside the cluster; nothing sensitive
# enters Terraform state.
data "http" "tenant" {
  for_each = toset(local.tenant_paths)

  url = "${trimsuffix(var.vault_address, "/")}/v1/${var.tenant_mount}/data/${trim(var.tenant_prefix, "/")}/${each.value}"

  request_headers = {
    X-Vault-Token = var.vault_token
  }
}

locals {
  records = {
    for path, resp in data.http.tenant :
    path => try(jsondecode(resp.response_body).data.data.data, jsondecode(resp.response_body).data.data)
  }

  tenants = {
    for path, record in local.records :
    path => {
      slug      = substr(lower(regexall("[^/]+$", path)[0]), 0, 40)
      namespace = "${var.namespace_prefix}${substr(lower(regexall("[^/]+$", path)[0]), 0, 40)}"
    }
    if try(tostring(record["ffmpeglabStatus"]), "on") == "on"
  }
}

resource "kubernetes_namespace" "tenant" {
  for_each = local.tenants

  metadata {
    name = each.value.namespace
    labels = {
      "app.kubernetes.io/part-of" = "ffmpeglab"
      "ffmpeglab.com/tenant"      = each.value.slug
    }
  }
}

resource "kubernetes_manifest" "tenant_external_secret" {
  for_each = local.tenants

  manifest = {
    apiVersion = "external-secrets.io/v1"
    kind       = "ExternalSecret"

    metadata = {
      name      = "${each.value.slug}-supabase"
      namespace = kubernetes_namespace.tenant[each.key].metadata[0].name

      labels = {
        "app.kubernetes.io/part-of" = "ffmpeglab"
        "ffmpeglab.com/tenant"      = each.value.slug
      }
    }

    spec = {
      refreshInterval = var.secret_refresh_interval

      secretStoreRef = {
        kind = "ClusterSecretStore"
        name = var.cluster_secret_store_name
      }

      target = {
        name           = "${each.value.slug}-supabase"
        creationPolicy = "Owner"
      }

      dataFrom = [
        { extract = { key = "${trim(var.tenant_prefix, "/")}/${dirname(each.key)}/${basename(each.key)}" } }
      ]
    }
  }
}

resource "helm_release" "tenant" {
  for_each = local.tenants

  name      = each.value.slug
  chart     = var.chart_path != "" ? var.chart_path : "${path.module}/../../helm/ffmpeglab"
  namespace = kubernetes_namespace.tenant[each.key].metadata[0].name

  atomic          = true
  cleanup_on_fail = true
  timeout         = 300

  values = [
    yamlencode(merge(
      {
        tenant = { name = each.value.slug }
        existingSecret = "${each.value.slug}-supabase"
        podAnnotations = merge(
          try(var.chart_values.podAnnotations, {}),
          { "reloader.stakater.com/auto" = "true" },
        )
      },
      var.chart_values,
      var.image_tag != "" ? { image = { tag = var.image_tag } } : {},
    )),
  ]

  depends_on = [kubernetes_manifest.tenant_external_secret]
}
