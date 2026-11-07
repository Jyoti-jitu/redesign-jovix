import { NextResponse } from "next/server";
import { adminConfig } from "@/config/admin";
import { verifyCredentials, createSessionToken } from "@/lib/adminAuth";


export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const username = body?.username;
  const password = body?.password;
  if (!verifyCredentials(username, password)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminConfig.sessionCookieName, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: adminConfig.sessionMaxAgeSeconds,
  });
  return response;
}
