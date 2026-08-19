import { Injectable } from '@nestjs/common';

import { config, POOL_PORT, POOL_POSTFIX, vaultClientConfig } from './config';
import ClientOAuth2 from 'client-oauth2';
import * as vault from 'vault-client-typescript';
import { SupabaseSession, SupabaseTenant } from './types';
import { SupabaseManagementAPI } from 'supabase-management-js';
import {
  createPostgresCredentials,
  createPostgresqlQueryForCredentials,
  initSql,
} from './utils';
import { getProject } from './supabase';

const secretsClient = new vault.SecretsApi(vaultClientConfig);
const oauth2Client = new ClientOAuth2(config);

@Injectable()
export class AppService {
  async getSessionForUser(userId: string) {
    let session = (await secretsClient.kvV2Read('users/' + userId, 'secret'))
      .data as SupabaseSession;
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

    await secretsClient.kvV2Write('users/' + userId, 'secret', {
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
      // Tenant not found – continue
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

  async createTenant(userId: string, projectId: string) {
    const supaManagementClient = await this.createSupaClient(userId);
    // Generate database credentials
    const dbCreds = createPostgresCredentials();
    const createUserSQL = createPostgresqlQueryForCredentials(dbCreds);

    // Execute SQL on the Supabase project to create database tables
    await supaManagementClient.applyAMigration(projectId, {
      query: initSql,
      name: 'ffmpeglab-init',
    });

    // Execute SQL on the Supabase project to create user and give permissions for database tables
    await supaManagementClient.applyAMigration(projectId, {
      query: createUserSQL,
      name: 'ffmpeglab-permissions',
    });

    // Fetch full project details
    const project = await getProject(supaManagementClient, projectId);

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
    };

    // Persist tenant
    await secretsClient.kvV2Write(`tenants/${userId}/${projectId}`, 'secret', {
      data: newTenant,
    });
    return newTenant;
  }
}
