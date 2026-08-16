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
import { config } from './config';
import { SupabaseSession } from './types';
import { withSupabase, SupabaseCtx } from '@supabase/server/adapters/nestjs';
import type { SupabaseContext } from '@supabase/server';
const oauth2Client = new ClientOAuth2(config);

@Controller()
@UseGuards(withSupabase({ auth: 'user' }))
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('platform/me')
  async me(@SupabaseCtx('userClaims') user: SupabaseContext['userClaims']) {
    let session: SupabaseSession | undefined;
    try {
      session = await this.appService.getSessionForUser(user!.id);
    } catch (err) {
      console.error('session error', err);
    }

    if (!session?.accessToken) {
      return { error: 'platform_api_not_enabled' };
    }

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

  @Get('platform/tenant/:id')
  async getTenant(
    @Param('projectId') projectId,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    const tenant = await this.appService.getTenant(user!.id, projectId);
    return {
      id: tenant?.id,
      name: tenant?.name,
      status: tenant?.status,
      ffmpeglabStatus: tenant?.ffmpeglabStatus,
      ref: tenant?.ref,
      region: tenant?.region,
      created: tenant?.created,
    };
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
    const oauthSession = await oauth2Client.code.getToken((req as Request).url);

    if (!oauthSession.accessToken) {
      response.redirect(`${config.webAppRedirect}/error`);
      return;
    }

    await this.appService.saveOauthSession(user!.id, oauthSession);

    response.redirect(`${config.webAppRedirect}/success`);
  }

  @Get('platform/connect/project/:projectId')
  async connectProject(
    @Param('projectId') projectId,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    const existingTenant = await this.appService.getTenant(user!.id, projectId);

    if (existingTenant && existingTenant.ffmpeglabStatus === 'on') {
      return { status: 'on' };
    }

    await this.appService.createTenant(user!.id, projectId);

    return { status: 'on' };
  }
}
