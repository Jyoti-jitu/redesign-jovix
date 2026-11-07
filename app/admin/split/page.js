import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { adminConfig } from "@/config/admin";
import { verifySessionToken } from "@/lib/adminAuth";
import SplitDashboard from "@/components/admin/SplitDashboard";

export const metadata = {
  title: "Split | Jovix Admin",
  robots: { index: false, follow: false },
};

// Reads the session cookie on the server and blocks when unauthenticated.
export const instant = false;

export default async function SplitPage() {
  const cookieStore = await cookies();
  await connection(); // force request-time rendering before session check
  const token = cookieStore.get(adminConfig.sessionCookieName)?.value;

  if (!token || !verifySessionToken(token)) {
    redirect("/admin/login");
  }

  return <SplitDashboard />;
}
