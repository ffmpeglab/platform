import * as fs from 'fs';

/**
 * Reads a secret from an environment variable or a file.
 * If the file environment variable is set, the file is read and its content is used.
 * Otherwise, the secret environment variable is used.
 * Throws an error if neither is provided or if the file cannot be read.
 */
export function getSecretFromEnvOrFile(
  secretEnvName: string,
  fileEnvName: string,
): string {
  const filePath = process.env[fileEnvName];
  if (filePath) {
    try {
      return fs.readFileSync(filePath, 'utf8').trim();
    } catch (err) {
      console.error(`Failed to read secret from file ${filePath}:`, err);
      throw new Error(`Failed to read secret from file ${filePath}`);
    }
  }

  const secret = process.env[secretEnvName];
  if (!secret) {
    throw new Error(
      `Missing secret: either ${secretEnvName} or ${fileEnvName} must be set.`,
    );
  }
  return secret;
}
