import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { adminConfig } from "@/config/admin";
import { verifySessionToken } from "@/lib/adminAuth";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin Dashboard | Jovix",
  robots: { index: false, follow: false },
};

// This route reads the session cookie on the server and blocks (redirects)
// when unauthenticated — it cannot be prerendered.
export const instant = false;

export default async function AdminPage() {
  const cookieStore = await cookies();
  await connection(); // force request-time rendering before session check
  const token = cookieStore.get(adminConfig.sessionCookieName)?.value;

  if (!token || !verifySessionToken(token)) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
