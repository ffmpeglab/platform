import { Controller, Get, Request, Response, Session } from '@nestjs/common';
import { AppService } from './app.service';
import ClientOAuth2 from 'client-oauth2';
import { config } from './config';
const oauth2Client = new ClientOAuth2(config);

@Controller()
export class CallbackController {
  constructor(private readonly appService: AppService) {}

  @Get('platform/oauth2/callback')
  async platformLoginCallback(
    @Request() req,
    @Response() response,
    @Session() session: Record<string, any>,
  ): Promise<void> {
    const oauthSession = await oauth2Client.code.getToken((req as Request).url);
    if (!oauthSession.accessToken || !session.user) {
      response.redirect(`${config.webAppRedirect}/error`);
      return;
    }

    await this.appService.saveOauthSession(session.user, oauthSession);

    response.redirect(`${config.webAppRedirect}/success`);
  }
}
