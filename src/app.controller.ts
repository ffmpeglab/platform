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
import { config, POOL_PORT, POOL_POSTFIX, vaultClientConfig } from './config';
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

  @Get('platform/projects/:orgId')
  async projects(
    @Param('orgId') orgId,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims']) {
    const session = await this.appService.getSessionForUser(user!.id);

    const supaManagementClient = new SupabaseManagementAPI({
      accessToken: session.accessToken ?? session.access_token,
    });
    return (await supaManagementClient.getAllProjectsForOrganization(orgId)).data
  }

  @Get('platform/organizations')
  async organizations(
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims']) {
    const session = await this.appService.getSessionForUser(user!.id);

    const supaManagementClient = new SupabaseManagementAPI({
      accessToken: session.accessToken ?? session.access_token,
    });

    return (await supaManagementClient.listAllOrganizations()).data
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

    // Check if tenant already exists and is active
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

    // Generate database credentials
    const dbCreds = createPostgresCredentials();
    const createUserSQL = createPostgresqlQueryForCredentials(dbCreds);

    // Execute SQL on the Supabase project to create user/database
    await supaManagementClient.runAQuery(projectId, { query: createUserSQL });

    // Fetch full project details
    const project = await getProject(supaManagementClient, projectId);

    // Build tenant record
    const poolPort = POOL_PORT;
    const poolHost = `aws-0-${project.region}${POOL_POSTFIX}`

    const newTenant: SupabaseTenant = {
      ...project,
      id: projectId,
      user: user!.id,
      created: Date.now(),
      updated: Date.now(),
      ffmpeglabStatus: 'on',
      db: {
        host: poolHost,
        port: poolPort as number,
        user: dbCreds.user+'.'+projectId,
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

    return { status: 'on' };
  }
}
