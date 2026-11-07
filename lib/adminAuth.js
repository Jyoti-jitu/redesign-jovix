import crypto from "crypto";
import { adminConfig } from "@/config/admin";

/** Constant-time string comparison to mitigate timing attacks. */
export function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function verifyScrypt(password, saltHex, hashHex) {
  try {
    const derived = crypto.scryptSync(password, Buffer.from(saltHex, "hex"), 64);
    return safeEqual(derived.toString("hex"), hashHex);
  } catch {
    return false;
  }
}

/** Verify a submitted password against the configured admin password. */
export function verifyPassword(entered) {
  if (typeof entered !== "string" || entered.length === 0) return false;
  const configured = adminConfig.password;
  if (!configured) return false;

  // Support scrypt hashes: scrypt$<saltHex>$<hashHex>
  if (configured.startsWith("scrypt$")) {
    const parts = configured.split("$");
    if (parts.length !== 3) return false;
    return verifyScrypt(entered, parts[1], parts[2]);
  }

  return safeEqual(entered, configured);
}

/** Verify a submitted username + password against the configured admin account. */
export function verifyCredentials(username, password) {
  if (typeof username !== "string" || typeof password !== "string") return false;
  if (!safeEqual(username.trim().toLowerCase(), adminConfig.username.toLowerCase())) {
    return false;
  }
  return verifyPassword(password);
}

function hmac(data) {
  return crypto
    .createHmac("sha256", adminConfig.authSecret)
    .update(data)
    .digest("base64url");
}

/** Create a signed session token: base64url(payload).base64url(hmac). */
export function createSessionToken() {
  const payload = Buffer.from(
    JSON.stringify({
      exp: Date.now() + adminConfig.sessionMaxAgeSeconds * 1000,
      iat: Date.now(),
    })
  ).toString("base64url");
  return `${payload}.${hmac(payload)}`;
}

/** Verify a session token and ensure it has not expired. */
export function verifySessionToken(token) {
  if (typeof token !== "string" || !token.includes(".")) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  if (!safeEqual(signature, hmac(payload))) return false;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

/** True when the incoming request carries a valid admin session cookie. */
export function isAdminRequest(request) {
  const token = request.cookies?.get(adminConfig.sessionCookieName)?.value;
  return verifySessionToken(token);
}
