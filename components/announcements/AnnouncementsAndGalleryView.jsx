"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Bell, Image as ImageIcon } from "lucide-react";
import AnnouncementsFeed from "@/components/announcements/AnnouncementsFeed";
import MediaGallery from "@/components/gallery/MediaGallery";
import { announcementsList, galleryList } from "@/config/announcementsAndGalleryContent";

function TabSwitcherContent({ initialTab = "announcements" }) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [userSelectedTab, setUserSelectedTab] = useState(null);

  // Derive active tab: user selection takes precedence, followed by query param, then fallback
  const activeTab = userSelectedTab ?? (tabParam === "gallery" ? "gallery" : initialTab);

  return (
    <div className="w-full">
      {/* Community Switcher Tabs */}
      <div className="flex items-center justify-center my-3 sm:my-8" id="community-tabs">
        <div className="inline-flex p-1 sm:p-1.5 rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200/90 shadow-xs max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setUserSelectedTab("announcements")}
            className={`inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-extrabold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeTab === "announcements"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            <Bell className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === "announcements" ? "text-blue-600 animate-bounce" : "text-slate-400"}`} />
            <span>Announcements &amp; News</span>
            <span
              className={`px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold ${
                activeTab === "announcements" ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-600"
              }`}
            >
              {announcementsList.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setUserSelectedTab("gallery")}
            className={`inline-flex items-center gap-1.5 sm:gap-2.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-extrabold tracking-tight transition-all duration-200 whitespace-nowrap cursor-pointer ${
              activeTab === "gallery"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            <ImageIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === "gallery" ? "text-blue-600" : "text-slate-400"}`} />
            <span>Photo &amp; Media Gallery</span>
            <span
              className={`px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold ${
                activeTab === "gallery" ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-600"
              }`}
            >
              {galleryList.length}
            </span>
          </button>
        </div>
      </div>

      {/* Dynamic Tab Content */}
      <div className="pt-2">
        {activeTab === "announcements" && <AnnouncementsFeed />}
        {activeTab === "gallery" && <MediaGallery />}
      </div>
    </div>
  );
}

export default function AnnouncementsAndGalleryView({ initialTab = "announcements" }) {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-slate-500 font-semibold text-sm">
          Loading updates...
        </div>
      }
    >
      <TabSwitcherContent initialTab={initialTab} />
    </Suspense>
  );
}
