import { V1ProjectWithDatabaseResponseStatus } from 'supabase-management-js';
import { getProject } from './supabase';
import { ApiProperty } from '@nestjs/swagger';

export class SupabaseSession {
  @ApiProperty()
  created: number;
  @ApiProperty()
  expires: number;
  @ApiProperty()
  refresh_token: string;
  @ApiProperty()
  refreshToken?: string;
  @ApiProperty()
  accessToken?: string;
  @ApiProperty()
  access_token: string;
}

export class applyMigrationDTO {
  @ApiProperty()
  projectId: string;
  @ApiProperty()
  sql: string;
  @ApiProperty()
  name: string;
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
  TENANT_SECRET_KEY: string;
  TENANT_SERVICE_KEY: string;
  TENANT_USER_ID: string;
  TENANT_WORKER_LOGIN: string;
  SUPABASE_ANON_KEY: string;
  PLATFORM_HOST: string;
  S3_REGION: string;
  S3_ENDPOINT: string;
}

export class ConnectResponseDTO {
  @ApiProperty()
  status: 'on' | 'off';
  @ApiProperty()
  error: string;
}

export interface SupabaseProfile {
  gotrue_id: string;
  primary_email: string;
  username: string;
}

export class ConnectRedirectResponseDTO {
  @ApiProperty()
  redirectUri: string;
}

export class SupabaseTenantDTO implements Omit<
  SupabaseTenant,
  | 'db'
  | 'DB_HOST'
  | 'DB_USER'
  | 'DB_PORT'
  | 'DB_PASSWORD'
  | 'DB_NAME'
  | 'database'
  | 'organization_id'
  | 'organization_slug'
  | '(Missing)'
  | 'TENANT_SERVICE_KEY'
> {
  @ApiProperty()
  id: string;
  @ApiProperty()
  created: number;
  @ApiProperty()
  updated: number;
  @ApiProperty()
  user: string;
  @ApiProperty()
  ffmpeglabStatus: 'on' | 'off';
  @ApiProperty()
  region: string;
  @ApiProperty()
  ref: string;
  @ApiProperty({ enum: V1ProjectWithDatabaseResponseStatus })
  status: V1ProjectWithDatabaseResponseStatus;
  @ApiProperty()
  name: string;
  @ApiProperty()
  created_at: string;
}
