terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  # Use API token from environment variable CLOUDFLARE_API_TOKEN
  # Or you can set it here directly: api_token = "your-token-here"
}

# Get account ID from data source
data "cloudflare_accounts" "main" {
  name = "Ramarm0825@gmail.com's Account"
}

# Create Cloudflare Pages project
resource "cloudflare_pages_project" "tiu_pavimentos" {
  account_id        = data.cloudflare_accounts.main.accounts[0].id
  name              = "tiu-pavimentos"
  production_branch = "main"

  # Build configuration
  build_config {
    build_command   = ""
    destination_dir = "/"
    root_dir        = "/"
  }

  # Source configuration - GitHub
  source {
    type = "github"
    config {
      owner                         = "Emilio-Ramirez"
      repo_name                     = "Valerita"
      production_branch             = "main"
      pr_comments_enabled           = true
      deployments_enabled           = true
      production_deployment_enabled = true
      preview_deployment_setting    = "all"
      preview_branch_includes       = ["*"]
      preview_branch_excludes       = []
    }
  }

  deployment_configs {
    preview {
      environment_variables = {}
      compatibility_date    = "2024-01-01"
      compatibility_flags   = []
    }

    production {
      environment_variables = {}
      compatibility_date    = "2024-01-01"
      compatibility_flags   = []
    }
  }
}

# Output the deployment URL
output "pages_url" {
  value       = "https://${cloudflare_pages_project.tiu_pavimentos.subdomain}.pages.dev"
  description = "The URL of the Cloudflare Pages deployment"
}

output "project_name" {
  value       = cloudflare_pages_project.tiu_pavimentos.name
  description = "The name of the Cloudflare Pages project"
}
