/**
 * Admin authentication configuration for the Jovix admin area.
 *
 * SECURITY NOTE: The values below are DEV DEFAULTS so the feature works out
 * of the box. Before deploying publicly you MUST override them with
 * environment variables:
 *
 *   ADMIN_USERNAME     -> admin login username
 *   ADMIN_PASSWORD     -> admin login password (plain text OR scrypt hash)
 *   ADMIN_AUTH_SECRET  -> secret used to sign session cookies (long random string)
 *
 * The password may be supplied as plain text or as a scrypt hash in the format:
 *   scrypt$<salt hex>$<derived key hex>
 * (e.g. `scrypt$...$...` — generated with crypto.scryptSync(password, salt, 64))
 */

const DEFAULT_ADMIN_USERNAME = "jitu@gmail.com";
const DEFAULT_ADMIN_PASSWORD = "jitu2005"; // TODO: change before public deploy
const DEFAULT_AUTH_SECRET = "jovix-admin-dev-secret-2026";

function envOrFallback(name, fallback) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : fallback;
}

export const adminConfig = {
  username: envOrFallback("ADMIN_USERNAME", DEFAULT_ADMIN_USERNAME),
  password: envOrFallback("ADMIN_PASSWORD", DEFAULT_ADMIN_PASSWORD),
  authSecret: envOrFallback("ADMIN_AUTH_SECRET", DEFAULT_AUTH_SECRET),
  sessionCookieName: "jovix_admin_session",
  sessionMaxAgeSeconds: 60 * 60 * 12, // 12 hours
};
