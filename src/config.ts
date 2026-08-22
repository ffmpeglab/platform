import * as vault from 'vault-client-typescript';

export const SUPABASE_PLATFORM = 'https://api.supabase.com/';

export const config = {
  clientId: process.env.SUPA_CONNECT_CLIENT_ID,
  clientSecret: process.env.SUPA_CONNECT_CLIENT_SECRET,
  authorizationUri: 'https://api.supabase.com/v1/oauth/authorize',
  accessTokenUri: 'https://api.supabase.com/v1/oauth/token',
  redirectUri: process.env.PLATFORM_HOST + '/platform/oauth2/callback',
  webAppRedirect:
    process.env.WEBAPP_HOST + '/pipelines?showPipelineTemplates=true',
};

export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_PUBLISHABLE_KEY = process.env
  .SUPABASE_PUBLISHABLE_KEY as string;
export const SUPABASE_SECRET_KEY = process.env.SUPABASE_SECRET_KEY as string;
export const SUPABASE_JWKS_URL = process.env.SUPABASE_JWKS_URL as string;

export const POOL_POSTFIX =
  process.env.SUPABASE_CLOUD_POSTGRES_POOLER_URL || '.pooler.supabase.com';

export const POOL_PORT =
  process.env.SUPABASE_CLOUD_POSTGRES_POOLER_PORT || 6543;

export const FFMPEGLAB_PLATFORM_PORT =
  process.env.FFMPEGLAB_PLATFORM_PORT ?? 7001;

export const profileUri = SUPABASE_PLATFORM + 'v1/organizations';

export const vaultClientConfig = new vault.Configuration({
  basePath: process.env.VAULT_URL,
  headers: {
    'X-Vault-Token': process.env.VAULT_TOKEN as string,
  },
});

export const supabaseEnv = {
  url: SUPABASE_URL,
  publishableKeys: {
    default: SUPABASE_PUBLISHABLE_KEY,
  },
  secretKeys: { default: SUPABASE_SECRET_KEY as string },
  jwks: new URL(SUPABASE_JWKS_URL as string),
};

export default {};
