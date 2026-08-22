# State for deploy/tenants, which has to be shared: a run starting from an empty
# state tries to create releases that already exist. Versioning is on because
# that state is the only record of which release belongs to which tenant.

resource "google_storage_bucket" "state" {
  project  = var.project_id
  name     = "${var.project_id}-tfstate"
  location = var.region

  uniform_bucket_level_access = true
  force_destroy               = false

  versioning {
    enabled = true
  }
}

resource "google_storage_bucket_iam_member" "deployer_state" {
  bucket = google_storage_bucket.state.name
  role   = "roles/storage.objectAdmin"
  member = "serviceAccount:${google_service_account.deployer.email}"
}
