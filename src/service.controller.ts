import {
  Controller,
  Get,
  Param,
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

  @Get('platform/session/supabase/:userId')
  @ApiParam({ name: 'userId' })
  async getSupabaseSession(
    @Param('userId') userId: string,
    @Request() req: Request,
  ) {
    const token = extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException();
    }

    const isValid = await this.appService.validateUserTenantServiceKey(
      token,
      userId,
    );

    if (!isValid) {
      throw new UnauthorizedException();
    }

    const session = await this.appService.getSessionForUser(userId);

    return { access_token: session.access_token || session.accessToken };
  }
}
