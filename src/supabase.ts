import { SupabaseManagementAPI } from 'supabase-management-js';

export const getProject = async (
  supaManagementClient: SupabaseManagementAPI,
  projectId: string,
) => (await supaManagementClient.getProject(projectId)).data;
