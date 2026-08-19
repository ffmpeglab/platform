import { getProject } from './supabase';

export class OrganizationProjectsResponseDTO implements OrganizationProjectsResponse {
  @ApiProperty()
  projects: OrganizationProjectsResponseProjectsItem[];
  @ApiProperty()
  pagination: OrganizationProjectsResponsePagination;
}

export interface SupabaseSession {
  created: number;
  expires: number;
  refresh_token: string;
  refreshToken?: string;
  accessToken?: string;
  access_token: string;
}

export interface SupabaseTenant extends Awaited<ReturnType<typeof getProject>> {
  id: string;
  created: number;
  updated: number;
  user: string;
  ffmpeglabStatus: 'on' | 'off';
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
  DB_HOST: string;
  DB_USER: string;
  DB_PORT: number;
  DB_PASSWORD: string;
  DB_NAME: string;
}
