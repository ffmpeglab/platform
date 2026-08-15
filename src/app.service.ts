import { Injectable } from '@nestjs/common';

import { config, vaultClientConfig } from './config';
import ClientOAuth2 from 'client-oauth2';
import * as vault from '@hashicorp/vault-client-typescript';
import { SupabaseSession } from './types';

const secretsClient = new vault.SecretsApi(vaultClientConfig);
const oauth2Client = new ClientOAuth2(config);

@Injectable()
export class AppService {
  async getSessionForUser(userId: string) {
    let session = (await secretsClient.kvV2Read('users/' + userId, 'secret'))
      .data as SupabaseSession;
    const sessionExpiresDate = session.created + session.expires;
    const isSessionValid = new Date().valueOf() < sessionExpiresDate;
    console.info({ session, isSessionValid });
    if (!isSessionValid) {
      const supabaseSession = await oauth2Client
        .createToken(session.accessToken as string, session.refreshToken as any)
        .refresh();
      console.info('newSession', supabaseSession);
      if (!supabaseSession.accessToken)
        throw new Error('unable_to_refresh_session');

      session = {
        accessToken: supabaseSession.accessToken,
        refreshToken: supabaseSession.refreshToken,
        created: new Date().valueOf(),
        expires: parseInt(supabaseSession.data.expires),
        refresh_token: supabaseSession.refreshToken,
        access_token: supabaseSession.accessToken,
      };

      await secretsClient.kvV2Write('users/' + userId, 'secret', {
        data: session,
      });
    }
    return session;
  }
}
