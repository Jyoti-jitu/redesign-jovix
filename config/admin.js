/**
 * Admin authentication configuration for the Jovix admin area.
 *
 * SECURITY: All values MUST be set via environment variables:
 *
 *   ADMIN_USERNAME     -> admin login username
 *   ADMIN_PASSWORD     -> admin login password (plain text OR scrypt hash)
 *   ADMIN_AUTH_SECRET  -> secret used to sign session cookies (long random string)
 *
 * The password may be supplied as plain text or as a scrypt hash in the format:
 *   scrypt$<salt hex>$<derived key hex>
 * (e.g. `scrypt$...$...` — generated with crypto.scryptSync(password, salt, 64))
 *
 * To generate a strong auth secret:
 *   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
 */

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
      `Set it in your .env.local file (dev) or Vercel dashboard (production).`
    );
  }
  return value.trim();
}

export const adminConfig = {
  username: getRequiredEnv("ADMIN_USERNAME"),
  password: getRequiredEnv("ADMIN_PASSWORD"),
  authSecret: getRequiredEnv("ADMIN_AUTH_SECRET"),
  sessionCookieName: "jovix_admin_session",
  sessionMaxAgeSeconds: 60 * 60 * 12, // 12 hours
};
