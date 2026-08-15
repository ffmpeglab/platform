import {
  Controller,
  Get,
  Param,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import ClientOAuth2 from 'client-oauth2';
import { config, SUPABASE_URL, vaultClientConfig } from './config';
import * as vault from '@hashicorp/vault-client-typescript';
import { SupabaseSession, SupabaseTenant } from './types';
import { withSupabase, SupabaseCtx } from '@supabase/server/adapters/nestjs';
import type { SupabaseContext } from '@supabase/server';
import { getProject } from './supabase';
import {
  createPostgresCredentials,
  createPostgresqlQueryForCredentials,
} from './utils';
import { SupabaseManagementAPI } from 'supabase-management-js';

const secretsClient = new vault.SecretsApi(vaultClientConfig);
const oauth2Client = new ClientOAuth2(config);
@Controller()
@UseGuards(withSupabase({ auth: 'user' }))
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('platform/me')
  me(@SupabaseCtx('userClaims') user: SupabaseContext['userClaims']) {
    return user;
  }

  @Get('platform/login')
  async platformLogin(
    @Response() response,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ): Promise<any> {
    const uri = oauth2Client.code.getUri();
    response.redirect(uri);
  }

  @Get('platform/oauth2/callback')
  async platformLoginCallback(
    @Request() req,
    @Response() response,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ): Promise<void> {
    const session = await oauth2Client.code.getToken((req as Request).url);

    if (!session.accessToken) throw new Error('invalid_credentials');

    const supabaseSession: SupabaseSession = {
      accessToken: session.accessToken,
      refreshToken: session.refreshToken,
      created: new Date().valueOf(),
      expires: parseInt(session.data.expires),
      refresh_token: session.refreshToken,
      access_token: session.accessToken,
    };
    await secretsClient.kvV2Write('users/' + user!.id, 'secret', {
      data: supabaseSession,
    });

    const params = new URLSearchParams(supabaseSession as any).toString();

    response.redirect(`${config.webAppRedirect}/?${params}`);
  }

  @Get('platform/connect/project/:projectId')
  async connectProject(
    @Param('projectId') projectId,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    // const code = params.userId;
    const session = await this.appService.getSessionForUser(user!.id);
    // const projectId = params.projectId;

    // Use the access token to make an authenticated API request.
    const supaManagementClient = new SupabaseManagementAPI({
      accessToken: session.accessToken ?? session.access_token,
    });

    // 3. Check if tenant already exists and is active
    let existingTenant;
    try {
      existingTenant = (
        await secretsClient.kvV2Read(`tenants/${projectId}`, 'secret')
      ).data as SupabaseTenant;
    } catch (error) {
      // Tenant not found – continue
    }

    if (existingTenant && existingTenant.ffmpeglabStatus === 'on') {
      return { status: 'on' };
    }

    // 4. Generate database credentials
    const dbCreds = createPostgresCredentials();
    const createUserSQL = createPostgresqlQueryForCredentials(dbCreds);
    console.info('new query', createUserSQL);
    // 5. Execute SQL on the Supabase project to create user/database
    await supaManagementClient.runAQuery(projectId, { query: createUserSQL });

    // 6. Enable S3 protocol for storage if not already enabled
    // const storageConfig = await supaManagementClient.getStorageConfig(projectId);
    // if (!storageConfig.data.features.s3Protocol.enabled) {
    //   await supaManagementClient.updateStorageConfig(projectId, {
    //     ...storageConfig.data,
    //     features: {
    //       ...storageConfig.data.features,
    //       s3Protocol: { enabled: true },
    //     },
    //   });
    // }

    // 7. Fetch full project details
    const project = await getProject(supaManagementClient, projectId);
    const poolPort = 6543;
    // 8. Build tenant record
    const newTenant: SupabaseTenant = {
      ...project,
      id: projectId,
      user: user!.id,
      created: Date.now(),
      updated: Date.now(),
      ffmpeglabStatus: 'on',
      db: {
        host: project.database.host,
        port: poolPort,
        user: dbCreds.user,
        password: dbCreds.password,
        database: dbCreds.database,
      },
      DB_HOST: project.database.host,
      DB_USER: dbCreds.user,
      DB_PORT: poolPort,
      DB_PASSWORD: dbCreds.password,
      DB_NAME: dbCreds.database,
    };

    // 9. Persist tenant
    await secretsClient.kvV2Write(`tenants/${projectId}`, 'secret', {
      data: newTenant,
    });

    return { status: 'on' };
  }
}
