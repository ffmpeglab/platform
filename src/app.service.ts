import { Injectable } from '@nestjs/common';

import {
  config,
  POOL_PORT,
  POOL_POSTFIX,
  vaultClientConfig,
  PLATFORM_HOST,
  TENANT_WORKER_LOGIN,
} from './config';
import ClientOAuth2 from 'client-oauth2';
import * as vault from 'vault-client-typescript';
import { applyMigrationDTO, SupabaseSession, SupabaseTenant } from './types';
import { SupabaseManagementAPI } from 'supabase-management-js';
import {
  createPostgresCredentials,
  createPostgresqlQueryForCredentials,
  generateSecurePassword,
  initSql,
} from './utils';
import { getProject } from './supabase';
import { createClient } from '@supabase/supabase-js';

const secretsClient = new vault.SecretsApi(vaultClientConfig);
const oauth2Client = new ClientOAuth2(config);

@Injectable()
export class AppService {
  async getSessionForUser(userId: string) {
    let session = (
      await secretsClient.kvV2Read(`users/${userId}/session`, 'secret')
    ).data as SupabaseSession;
    const sessionExpiresDate = session.created + session.expires;
    const isSessionValid = new Date().valueOf() < sessionExpiresDate;
    if (!isSessionValid) {
      const oauthSession = await oauth2Client
        .createToken(session.accessToken as string, session.refreshToken as any)
        .refresh();
      if (!oauthSession.accessToken)
        throw new Error('unable_to_refresh_session');
      session = await this.saveOauthSession(userId, oauthSession);
    }
    return session;
  }

  async saveOauthSession(
    userId: string,
    oauthSession: ClientOAuth2.Token,
  ): Promise<SupabaseSession> {
    const session: SupabaseSession = {
      accessToken: oauthSession.accessToken,
      refreshToken: oauthSession.refreshToken,
      created: new Date().valueOf(),
      expires: !isNaN(parseInt(process.env.TOKEN_EXPIRE_TIME as string))
        ? parseInt(process.env.TOKEN_EXPIRE_TIME as string)
        : 3600,
      refresh_token: oauthSession.refreshToken,
      access_token: oauthSession.accessToken,
    };

    await secretsClient.kvV2Write(`users/${userId}/session`, 'secret', {
      data: session,
    });
    return session;
  }

  async createSupaClient(userId: string) {
    const session = await this.getSessionForUser(userId);

    const supaManagementClient = new SupabaseManagementAPI({
      accessToken: session.accessToken ?? session.access_token,
    });
    return supaManagementClient;
  }

  async getTenant(userId: string, projectId: string) {
    try {
      return (
        await secretsClient.kvV2Read(`tenants/${userId}/${projectId}`, 'secret')
      ).data as SupabaseTenant;
    } catch (error) {
      console.error('tenant not found', error);
    }
  }

  async updateTenant(tenant: SupabaseTenant) {
    await secretsClient.kvV2Write(
      `tenants/${tenant.user}/${tenant.id}`,
      'secret',
      {
        data: tenant,
      },
    );
    return this.getTenant(tenant.user, tenant.id);
  }

  async applyMigration(userId: string, body: applyMigrationDTO) {
    const { projectId, sql, name } = body;
    const supaManagementClient = await this.createSupaClient(userId);
    return await supaManagementClient.applyAMigration(projectId, {
      query: sql,
      name,
    });
  }

  async createTenant(userId: string, projectId: string) {
    const supaManagementClient = await this.createSupaClient(userId);
    // Generate database credentials
    const dbCreds = createPostgresCredentials();
    const createUserSQL = createPostgresqlQueryForCredentials(dbCreds);
    try {
      // Execute SQL on the Supabase project to create database tables
      await supaManagementClient.applyAMigration(projectId, {
        query: initSql,
        name: 'ffmpeglab-init',
      });
    } catch (err) {
      console.error('initSql err', err);
    }

    // Execute SQL on the Supabase project to create user and give permissions for database tables
    await supaManagementClient.applyAMigration(projectId, {
      query: createUserSQL,
      name: 'ffmpeglab-permissions',
    });

    const TENANT_SERVICE_KEY = (
      await supaManagementClient.createProjectApiKey(projectId, {
        type: 'secret',
        name: 'FFMpegLab',
      })
    )?.data?.api_key as string;

    const SUPABASE_ANON_KEY = (
      await supaManagementClient.createProjectApiKey(projectId, {
        type: 'publishable',
        name: 'FFMpegLab Public',
      })
    )?.data?.api_key as string;

    const TENANT_SECRET_KEY = generateSecurePassword();
    const project = await getProject(supaManagementClient, projectId);
    const projectHost = `https://${projectId}.supabase.co`;
    const tenantAdminClient = createClient(projectHost, TENANT_SERVICE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const newuser = await tenantAdminClient.auth.admin.createUser({
      email: TENANT_WORKER_LOGIN,
      password: TENANT_SECRET_KEY,
      email_confirm: true, // ⚡ Bypasses email confirmation loops
      user_metadata: { role: 'platform-s3-worker' },
    });

    // Build tenant record
    const poolPort = POOL_PORT;
    const poolHost = `aws-1-${project.region}${POOL_POSTFIX}`;
    const now = Date.now();
    const dbUserName = dbCreds.user + '.' + projectId;
    const newTenant: SupabaseTenant = {
      ...project,
      id: projectId,
      user: userId,
      created: now,
      updated: now,
      ffmpeglabStatus: 'on',
      db: {
        host: poolHost,
        port: poolPort as number,
        user: dbUserName,
        password: dbCreds.password,
        database: dbCreds.database,
      },
      DB_HOST: poolHost,
      DB_USER: dbUserName,
      DB_PORT: poolPort as number,
      DB_PASSWORD: dbCreds.password,
      DB_NAME: dbCreds.database,
      TENANT_SECRET_KEY,
      TENANT_SERVICE_KEY,
      TENANT_WORKER_LOGIN,
      TENANT_USER_ID: userId,
      SUPABASE_ANON_KEY,
      PLATFORM_HOST,
      S3_REGION: project.region,
      S3_ENDPOINT: `https://${projectId}.storage.supabase.co/storage/v1/s3`,
    };

    // Persist tenant
    await secretsClient.kvV2Write(`tenants/${userId}/${projectId}`, 'secret', {
      data: newTenant,
    });
    return newTenant;
  }

  async validateUserTenantServiceKey(
    key: string,
    userId: string,
  ): Promise<boolean> {
    const users = (
      await secretsClient.kvV2List(
        'users',
        'secret',
        vault.SecretsApiKvV2ListListEnum.TRUE,
      )
    ).keys;

    if (!users) throw 'no_users';

    const vaultRes = await secretsClient.kvV2Read(
      `users/${userId}/key`,
      'secret',
    );

    const secretKey = (vaultRes.data as { secretKey: string }).secretKey;

    if (secretKey === key) return true;

    return false;
  }

  async getOrCreateTenantServiceKey(userId: string): Promise<string> {
    try {
      const tenantServiceKey = (
        await secretsClient.kvV2Read(`users/${userId}/key`, 'secret')
      ).data as { secretKey: string };
      return tenantServiceKey.secretKey;
    } catch (err) {
      console.info('error on lookup for tenant service key', err);
    }
    const secretKey = generateSecurePassword();

    await secretsClient.kvV2Write(`users/${userId}/key`, 'secret', {
      data: { secretKey },
    });

    return secretKey;
  }
}
