import ClientOAuth2 from 'client-oauth2';
import { SupabaseManagementAPI } from 'supabase-management-js';
import { profileUri } from './config';
import { SupabaseProfile } from './types';

export const getProject = async (
  supaManagementClient: SupabaseManagementAPI,
  projectId: string,
) => (await supaManagementClient.getProject(projectId)).data;

export const getSupabaseProfile = async (session: ClientOAuth2.Token) =>
  (await (
    await fetch(profileUri, {
      headers: { authorization: 'Beaerer ' + session.accessToken },
    })
  ).json()) as SupabaseProfile;
