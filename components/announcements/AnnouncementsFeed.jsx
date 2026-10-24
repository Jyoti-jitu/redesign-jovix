"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  X,
  Calendar,
  Pin,
  ArrowRight,
  ExternalLink,
  Tag,
  CheckCircle2,
  Sparkles,
  Share2,
  Check,
} from "lucide-react";
import {
  announcementsList,
  announcementCategories,
} from "@/config/announcementsAndGalleryContent";

export default function AnnouncementsFeed() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Filtered & sorted announcements (pinned items first)
  const filteredAnnouncements = useMemo(() => {
    return announcementsList
      .filter((item) => {
        const matchesCategory =
          activeCategory === "all" || item.category === activeCategory;

        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          item.title.toLowerCase().includes(query) ||
          item.summary.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query) ||
          item.tags.some((t) => t.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        // Pinned first
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        // Then by date descending
        return new Date(b.isoDate) - new Date(a.isoDate);
      });
  }, [activeCategory, searchQuery]);

  const handleShare = (e, item) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      const shareUrl = `${window.location.origin}/announcements#${item.id}`;
      navigator.clipboard?.writeText(shareUrl).then(() => {
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2500);
      });
    }
  };

  return (
    <section className="w-full pb-20">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search announcements, tags, topics..."
            className="w-full pl-10 pr-9 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {announcementCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? announcementsList.length
                : announcementsList.filter((a) => a.category === cat.id).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Announcements */}
      {filteredAnnouncements.length === 0 ? (
        <div className="text-center py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">No announcements found</h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-4">
            Try adjusting your search query or switching categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="px-3.5 py-2 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredAnnouncements.map((item) => (
            <article
              key={item.id}
              id={item.id}
              onClick={() => setSelectedAnnouncement(item)}
              className={`group flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer shadow-xs hover:shadow-xl ${
                item.pinned
                  ? "border-blue-300 ring-2 ring-blue-500/10 hover:border-blue-400"
                  : "border-slate-200/90 hover:border-slate-300"
              }`}
            >
              <div>
                {/* Image Header */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 sm:top-3.5 sm:left-3.5 sm:right-3.5 z-10 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-xs">
                      {item.badge}
                    </span>

                    {item.pinned && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-blue-600 text-white rounded-full shadow-xs">
                        <Pin className="w-3 h-3 fill-white" />
                        <span>Pinned</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6">
                  {/* Meta date + Author */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <div className="inline-flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 truncate max-w-[130px]">
                      By {item.author}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3 sm:mb-4 line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {item.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 text-slate-400">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Read Full Post</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <button
                  type="button"
                  onClick={(e) => handleShare(e, item)}
                  title="Copy link to announcement"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  {copiedId === item.id ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Interactive Detail Modal / Drawer */}
      {selectedAnnouncement && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedAnnouncement(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-slate-200 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-100">
              <Image
                src={selectedAnnouncement.image}
                alt={selectedAnnouncement.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white transition-all shadow-md cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-blue-600 rounded-full inline-block mb-2 shadow-xs">
                  {selectedAnnouncement.badge}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight drop-shadow-sm">
                  {selectedAnnouncement.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-700">{selectedAnnouncement.date}</span>
                  <span className="text-slate-300">•</span>
                  <span>Published by {selectedAnnouncement.author}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                  <span>Category:</span>
                  <span className="text-blue-600">{selectedAnnouncement.categoryLabel}</span>
                </div>
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {selectedAnnouncement.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Highlights */}
              {selectedAnnouncement.highlights && selectedAnnouncement.highlights.length > 0 && (
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>Key Announcements Highlights</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedAnnouncement.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Links */}
              {selectedAnnouncement.links && selectedAnnouncement.links.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {selectedAnnouncement.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                    >
                      <span>{link.label}</span>
                      {link.isExternal && <ExternalLink className="w-3.5 h-3.5" />}
                    </a>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
                {selectedAnnouncement.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
