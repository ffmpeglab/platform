import {
  Controller,
  Get,
  Request,
  Response,
  Session,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import ClientOAuth2 from 'client-oauth2';
import { config, supabaseEnv } from './config';

import { withSupabase, SupabaseCtx } from '@supabase/server/adapters/nestjs';
import { getSupabaseProfile } from './supabase';
import { ApiResponse } from '@nestjs/swagger';
import { ConnectRedirectResponseDTO } from './types';

const oauth2Client = new ClientOAuth2(config);

@Controller()
@UseGuards(
  withSupabase({
    auth: 'none',
    env: supabaseEnv,
  }),
)
export class LoginController {
  constructor(private readonly appService: AppService) {}

  @Get('platform/login')
  @ApiResponse({ type: ConnectRedirectResponseDTO })
  platformLogin(): { redirectUri: string } {
    const redirectUri = oauth2Client.code.getUri();
    return { redirectUri };
  }

  @Get('platform/oauth2/callback')
  async platformLoginCallback(
    @Request() req,
    @Response() response,
    @Session() session: Record<string, any>,
    @SupabaseCtx() ctx,
  ): Promise<void | { error: string }> {
    const oauthSession = await oauth2Client.code.getToken((req as Request).url);

    if (!oauthSession.accessToken) {
      response.redirect(`${config.webAppRedirect}/error`);
      return;
    }
    if (session.user) {
      await this.appService.saveOauthSession(session.user, oauthSession);
      return response.redirect(`${config.webAppRedirect}/success`);
    }
    const profile = await getSupabaseProfile(oauthSession);
    const newuser = await ctx.supabase.auth.admin.createUser({
      email: profile.primary_email,
      user_metadata: { name: profile.username },
    });
    await this.appService.saveOauthSession(newuser.id, oauthSession);
    return response.redirect(`${config.webAppRedirect}/success`);
  }
}
