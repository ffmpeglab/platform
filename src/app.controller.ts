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
import { config, supabaseEnv } from './config';
import { SupabaseSession, SupabaseTenantDTO } from './types';
import { withSupabase, SupabaseCtx } from '@supabase/server/adapters/nestjs';
import type { SupabaseContext } from '@supabase/server';
import { ApiBearerAuth, ApiResponse, getSchemaPath } from '@nestjs/swagger';

const oauth2Client = new ClientOAuth2(config);
@Controller()
@UseGuards(
  withSupabase({
    auth: 'user',
    env: supabaseEnv,
  }),
)
@ApiBearerAuth('user')
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
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched projects for organization.',
    schema: {
      // 2. Reference the exact schema key name from your external YAML/JSON file
      $ref: getSchemaPath('OrganizationProjectsResponse'),
    },
  })
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
  @ApiResponse({ type: SupabaseTenantDTO })
  async getTenant(
    @Param('projectId') projectId,
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    const tenant = await this.appService.getTenant(user!.id, projectId);
    if (tenant?.id) {
      const tenantDto = {
        id: tenant.id,
        name: tenant.name,
        status: tenant.status,
        ffmpeglabStatus: tenant.ffmpeglabStatus,
        ref: tenant.ref,
        region: tenant.region,
        created: tenant.created,
        created_at: tenant.created_at,
        user: tenant.user,
        updated: tenant.updated,
      } as SupabaseTenantDTO;
      return tenantDto;
    }
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
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched organizations.',
    schema: {
      type: 'array', // 1. Define the top-level type as an array
      items: {
        // 2. Reference the individual object schema inside the array
        $ref: getSchemaPath('OrganizationResponseV1'),
      },
    },
  })
  async organizations(
    @SupabaseCtx('userClaims') user: SupabaseContext['userClaims'],
  ) {
    const supaManagementClient = await this.appService.createSupaClient(
      user!.id,
    );
    return (await supaManagementClient.listAllOrganizations()).data;
  }

  @Get('platform/connect')
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
