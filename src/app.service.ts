import { Injectable } from '@nestjs/common';

import { config, POOL_PORT, POOL_POSTFIX, vaultClientConfig } from './config';
import ClientOAuth2 from 'client-oauth2';
import * as vault from '@hashicorp/vault-client-typescript';
import { SupabaseSession, SupabaseTenant } from './types';
import { SupabaseManagementAPI } from 'supabase-management-js';
import {
  createPostgresCredentials,
  createPostgresqlQueryForCredentials,
} from './utils';
import { getProject } from './supabase';

const secretsClient = new vault.SecretsApi(vaultClientConfig);
const oauth2Client = new ClientOAuth2(config);

@Injectable()
export class AppService {
  async createSupaClient(userId: string) {
    const session = await this.getSessionForUser(userId);

    const supaManagementClient = new SupabaseManagementAPI({
      accessToken: session.accessToken ?? session.access_token,
    });
    return supaManagementClient;
  }

  async getTenant(projectId: string) {
    try {
      return (await secretsClient.kvV2Read(`tenants/${projectId}`, 'secret'))
        .data as SupabaseTenant;
    } catch (error) {
      // Tenant not found – continue
    }
  }

  async createTenant(userId: string, projectId: string) {
    const supaManagementClient = await this.createSupaClient(userId);
    // Generate database credentials
    const dbCreds = createPostgresCredentials();
    const createUserSQL = createPostgresqlQueryForCredentials(dbCreds);

    // Execute SQL on the Supabase project to create user/database
    await supaManagementClient.runAQuery(projectId, { query: createUserSQL });

    // Fetch full project details
    const project = await getProject(supaManagementClient, projectId);

    // Build tenant record
    const poolPort = POOL_PORT;
    const poolHost = `aws-0-${project.region}${POOL_POSTFIX}`;
    const now = Date.now();
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
        user: dbCreds.user + '.' + projectId,
        password: dbCreds.password,
        database: dbCreds.database,
      },
      DB_HOST: poolHost,
      DB_USER: dbCreds.user,
      DB_PORT: poolPort as number,
      DB_PASSWORD: dbCreds.password,
      DB_NAME: dbCreds.database,
    };

    // Persist tenant
    await secretsClient.kvV2Write(`tenants/${projectId}`, 'secret', {
      data: newTenant,
    });
    return newTenant;
  }

  async getSessionForUser(userId: string) {
    let session = (await secretsClient.kvV2Read('users/' + userId, 'secret'))
      .data as SupabaseSession;
    const sessionExpiresDate = session.created + session.expires;
    const isSessionValid = new Date().valueOf() < sessionExpiresDate;
    console.info({ session, isSessionValid });
    if (!isSessionValid) {
      const supabaseSession = await oauth2Client
        .createToken(session.accessToken as string, session.refreshToken as any)
        .refresh();
      console.info('newSession', supabaseSession);
      if (!supabaseSession.accessToken)
        throw new Error('unable_to_refresh_session');

      session = {
        accessToken: supabaseSession.accessToken,
        refreshToken: supabaseSession.refreshToken,
        created: new Date().valueOf(),
        expires: parseInt(supabaseSession.data.expires),
        refresh_token: supabaseSession.refreshToken,
        access_token: supabaseSession.accessToken,
      };

      await secretsClient.kvV2Write('users/' + userId, 'secret', {
        data: session,
      });
    }
    return session;
  }
}
