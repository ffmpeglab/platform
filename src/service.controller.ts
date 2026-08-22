import {
  Controller,
  Get,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';

import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { extractTokenFromHeader } from './utils';

@Controller()
@ApiBearerAuth()
export class ServiceController {
  constructor(private readonly appService: AppService) {}

  @Get('platform/session/supabase')
  @ApiParam({ name: 'userId' })
  async getSupabaseSession(@Request() req: Request) {
    const token = extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException();
    }

    const userId = await this.appService.findUserByTenantSecret(token);

    if (!userId) {
      throw new UnauthorizedException();
    }

    const session = await this.appService.getSessionForUser(userId);

    return { access_token: session.access_token || session.accessToken };
  }
}
