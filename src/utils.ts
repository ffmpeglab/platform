export function createPostgresCredentials() {
  const user = `user_ffmpeglab_${Date.now()}`;
  const password = generateSecurePassword();
  const database = 'postgres';
  return { user, password, database };
}

export function createPostgresqlQueryForCredentials(creds: {
  user: string;
  password: string;
  database: string;
}) {
  return `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS pgmq CASCADE;
    CREATE USER ${creds.user} WITH PASSWORD '${creds.password}' CREATEDB;
    GRANT CREATE ON SCHEMA public to ${creds.user};
    GRANT CREATE ON SCHEMA pgmq to ${creds.user};
  `;
}

/** Secure password generator (example) */
export function generateSecurePassword() {
  const array = new Uint32Array(10);
  return crypto.getRandomValues(array).join('').toString();
}
