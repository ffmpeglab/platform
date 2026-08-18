import {
  Controller,
  Get,
  Param,
  Put,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import ClientOAuth2 from 'client-oauth2';
import {
  config,
  SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_URL,
  SUPABASE_SECRET_KEY,
  SUPABASE_JWKS_URL,
} from './config';
import { SupabaseSession } from './types';
import { withSupabase, SupabaseCtx } from '@supabase/server/adapters/nestjs';
import type { SupabaseContext } from '@supabase/server';
import type {OrganizationProjectsResponse, OrganizationProjectsResponsePagination, OrganizationProjectsResponseProjectsItem} from 'supabase-management-js'
import { ApiBearerAuth, ApiProperty, ApiResponse } from '@nestjs/swagger';

const oauth2Client = new ClientOAuth2(config);
class OrganizationProjectsResponseDTO implements OrganizationProjectsResponse {
  @ApiProperty()
  projects: OrganizationProjectsResponseProjectsItem[];
  @ApiProperty()
  pagination: OrganizationProjectsResponsePagination;
}
@Controller()
@UseGuards(
  withSupabase({
    auth: 'user',
    env: {
      url: SUPABASE_URL,
      publishableKeys: {
        default: SUPABASE_PUBLISHABLE_KEY,
      },
      secretKeys: { default: SUPABASE_SECRET_KEY as string },
      jwks: new URL(SUPABASE_JWKS_URL as string),
    },
  }),
)
@ApiBearerAuth()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('platform/me')
  @ApiResponse({ type: SupabaseCtx['userClaims'] })
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
  @ApiResponse({type: OrganizationProjectsResponseDTO})
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

  @Put('platform/tenant/:id/:status')
  async toggleTenant(
    @Param('projectId') projectId,
    @Param('status') status,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    const tenant = await this.appService.getTenant(user!.id, projectId);
    if (tenant) {
      tenant.ffmpeglabStatus = status;
      return await this.appService.updateTenant(tenant);
    }
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
  platformLogin(
    @Session() session: Record<string, any>,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ): { redirectUri: string } {
    session.user = user?.id;
    const redirectUri = oauth2Client.code.getUri();
    return { redirectUri };
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
