import { redirect } from "next/navigation";

/**
 * The visual media gallery is now hosted directly inside the Announcements & Media hub.
 * Any direct request to /gallery is seamlessly redirected to /announcements?tab=gallery.
 */
export default function GalleryPage() {
  redirect("/announcements?tab=gallery");
}
