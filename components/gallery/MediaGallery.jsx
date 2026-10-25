"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  X,
  Maximize2,
  ExternalLink,
  MapPin,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import { galleryList, galleryCategories } from "@/config/announcementsAndGalleryContent";

function getProjectName(title) {
  if (!title) return "";
  let name = title;
  if (name.includes(" — ")) name = name.split(" — ")[0].trim();
  else if (name.includes(" - ")) name = name.split(" - ")[0].trim();
  else if (name.includes(": ")) {
    const parts = name.split(": ");
    name = parts[1] || parts[0];
    name = name.split(" — ")[0].split(" - ")[0].trim();
  }

  const suffixes = [
    " Railway Portal",
    " Real-Time App",
    " AI Chatbot",
    " Security",
    " URL Shortener",
    " Portfolio",
    " Dental Clinic",
  ];
  for (const suffix of suffixes) {
    if (name.endsWith(suffix)) {
      name = name.slice(0, -suffix.length).trim();
      break;
    }
  }

  if (name.includes("Prof. Dr. Sandeep Kumar Panigrahi")) {
    name = "Dr. Sandeep Panigrahi";
  }

  return name;
}

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  // Filter gallery items
  const filteredGallery = useMemo(() => {
    return galleryList.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.caption.toLowerCase().includes(query) ||
        item.client.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev === 0 ? filteredGallery.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev === 0 ? filteredGallery.length - 1 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  const currentItem =
    activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : null;

  return (
    <section className="w-full pb-20">
      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search media, client, location, tags..."
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
          {galleryCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? galleryList.length
                : galleryList.filter((g) => g.category === cat.id).length;

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

      {/* Media Grid */}
      {filteredGallery.length === 0 ? (
        <div className="text-center py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">No media items found</h3>
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
        /* 2x2 grid on mobile (< sm), 2 cols on tablet, 3 cols on desktop */
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative flex flex-col bg-white rounded-xl sm:rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer"
            >
              {/* Media Thumbnail Container */}
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top Category Badge */}
                <div className="absolute top-1.5 left-1.5 sm:top-3.5 sm:left-3.5 z-10">
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Maximize Overlay Icon */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Caption & Metadata Bar */}
              <div className="p-2.5 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-0.5 sm:mb-1">
                    <span className="font-semibold text-slate-500 text-[9px] sm:text-xs truncate">{item.client}</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] sm:text-[11px]">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-base font-extrabold text-slate-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors mb-0.5 sm:mb-2">
                    <span className="sm:hidden line-clamp-1">{getProjectName(item.title)}</span>
                    <span className="hidden sm:inline line-clamp-2">{item.title}</span>
                  </h3>
                  {/* Caption - Desktop only */}
                  <p className="hidden sm:block text-[11px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2 mb-2.5 sm:mb-3">
                    {item.caption}
                  </p>
                </div>

                {/* Bottom Tag Pills - Desktop only */}
                <div className="hidden sm:flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                  {item.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-[10px] font-medium px-1 text-slate-400">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Mobile simple tap indicator */}
                <div className="sm:hidden pt-1.5 mt-1 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-blue-600">
                  <span>View Photo</span>
                  <Maximize2 className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev === 0 ? filteredGallery.length - 1 : prev - 1
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev === filteredGallery.length - 1 ? 0 : prev + 1
              );
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Container */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative w-full aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={currentItem.image}
                alt={currentItem.imageAlt}
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
                priority
              />
            </div>

            {/* Info Footer */}
            <div className="p-5 sm:p-7 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-800">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
                  <span>{currentItem.categoryLabel}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">{currentItem.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentItem.caption}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                {currentItem.liveUrl && (
                  <a
                    href={currentItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Visit Live Client</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={currentItem.image}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                  title="View original image asset"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
