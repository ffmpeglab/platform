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
import { config, vaultClientConfig } from './config';
import * as vault from '@hashicorp/vault-client-typescript';
import { SupabaseSession } from './types';
import { withSupabase, SupabaseCtx } from '@supabase/server/adapters/nestjs';
import type { SupabaseContext } from '@supabase/server';

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
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    const supaManagementClient = await this.appService.createSupaClient(
      user!.id,
    );
    return (await supaManagementClient.getAllProjectsForOrganization(orgId))
      .data;
  }

  @Get('platform/organizations')
  async organizations(
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    const supaManagementClient = await this.appService.createSupaClient(
      user!.id,
    );

    return (await supaManagementClient.listAllOrganizations()).data;
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
    // Check if tenant already exists and is active
    const existingTenant = await this.appService.getTenant(projectId);

    if (existingTenant && existingTenant.ffmpeglabStatus === 'on') {
      return { status: 'on' };
    }

    await this.appService.createTenant(user!.id, projectId);

    return { status: 'on' };
  }
}
