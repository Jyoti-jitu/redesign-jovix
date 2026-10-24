"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Image as ImageIcon, Sparkles } from "lucide-react";
import { announcementsList, galleryList } from "@/config/announcementsAndGalleryContent";

export default function CommunityNavTabs() {
  const pathname = usePathname();
  const isAnnouncements = pathname === "/announcements";
  const isGallery = pathname === "/gallery";

  return (
    <div className="flex items-center justify-center my-8">
      <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-xs max-w-full overflow-x-auto">
        <Link
          href="/announcements"
          className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold tracking-tight transition-all duration-200 whitespace-nowrap ${
            isAnnouncements
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
          }`}
        >
          <Bell className={`w-4 h-4 ${isAnnouncements ? "text-blue-600 animate-bounce" : "text-slate-400"}`} />
          <span>Announcements & News</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              isAnnouncements ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-600"
            }`}
          >
            {announcementsList.length}
          </span>
        </Link>

        <Link
          href="/gallery"
          className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold tracking-tight transition-all duration-200 whitespace-nowrap ${
            isGallery
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
          }`}
        >
          <ImageIcon className={`w-4 h-4 ${isGallery ? "text-blue-600" : "text-slate-400"}`} />
          <span>Media Gallery</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              isGallery ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-600"
            }`}
          >
            {galleryList.length}
          </span>
        </Link>
      </div>
    </div>
  );
}
