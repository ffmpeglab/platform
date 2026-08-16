/** Generates a random username, password, and database name */
export function createPostgresCredentials() {
  const user = `user_ffmpeglab_${Date.now()}`;
  const password = generateSecurePassword(); // implement your own
  // const database = `db_ffmpeglab_${Date.now()}`;
  const database = 'postgres';
  return { user, password, database };
}

/** Builds SQL to create a database role and grant privileges */
export function createPostgresqlQueryForCredentials(creds: {
  user: string;
  password: string;
  database: string;
}) {
  return `
    CREATE USER ${creds.user} WITH PASSWORD '${creds.password}' CREATEDB;
    GRANT ALL privileges ON DATABASE postgres to ${creds.user};
  `;
}

/** Secure password generator (example) */
export function generateSecurePassword() {
  const array = new Uint32Array(10);
  return crypto.getRandomValues(array).join('').toString();
}
