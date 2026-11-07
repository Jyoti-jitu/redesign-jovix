import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { adminConfig } from "@/config/admin";
import { verifySessionToken } from "@/lib/adminAuth";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const metadata = {
  title: "Admin Login | Jovix",
  robots: { index: false, follow: false },
};

// This route reads the session cookie on the server and blocks (redirects)
// when already authenticated — it cannot be prerendered.
export const instant = false;

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  await connection(); // force request-time rendering before session check
  const token = cookieStore.get(adminConfig.sessionCookieName)?.value;

  if (token && verifySessionToken(token)) {
    redirect("/admin");
  }

  return <AdminLoginForm />;
}
