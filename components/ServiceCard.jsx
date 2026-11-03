"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  Monitor,
  Layers,
  Settings,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
  X,
} from "lucide-react";

/**
 * Maps icon name strings to Lucide icon components
 */
const ICON_MAP = {
  Monitor: Monitor,
  Layers: Layers,
  Settings: Settings,
  ChartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
};

/**
 * Individual Service Card Component
 * Decreased size on mobile (2x2 grid friendly), simple details in UI,
 * with full details modal on click (portaled to body) so user can see all necessary details glitch-free.
 */
function getShortServiceName(title) {
  if (!title) return "";
  if (title.includes("Customized Software")) return "Custom Software";
  if (title.includes("Website")) return "Websites";
  if (title.includes("Automation") || title.includes("AI")) return "AI Automation";
  if (title.includes("Marketing")) return "Digital Marketing";
  return title.split(" — ")[0].split("&")[0].trim();
}

export default function ServiceCard({ service }) {
  const { title, description, image, imageAlt, icon, link } = service;
  const IconComponent = ICON_MAP[icon] || Monitor;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const handleCardClick = (e) => {
    // On small screens (< 640px), open the modal to display all necessary details
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      e.preventDefault();
      e.stopPropagation();
      setIsModalOpen(true);
    }
  };

  const modalContent = isModalOpen ? (
    <div
      className="fixed inset-0 z-[9999] bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={() => setIsModalOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto overscroll-contain bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 p-4 sm:p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close dialog"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 flex items-center justify-center transition-all z-20 cursor-pointer shadow-xs"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Modal Image */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 90vw, 420px"
            className="object-cover"
          />
          <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md shadow-xs flex items-center justify-center text-blue-600 border border-slate-200/80">
            <IconComponent className="w-4 h-4 stroke-[2]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-black text-slate-950 tracking-tight mb-2 pr-8">
          {title}
        </h3>

        {/* Full Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
          <a
            href={link.href}
            onClick={() => setIsModalOpen(false)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-all text-center min-h-[44px]"
          >
            <span>{link.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="/services"
            onClick={() => setIsModalOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 active:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold transition-all text-center min-h-[44px]"
          >
            <span>All Services</span>
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div
        onClick={handleCardClick}
        className="group flex flex-col h-full bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden cursor-pointer"
      >
        {/* Top Photography Area */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content Area with Boundary-Overlapping Icon Badge */}
        <div className="relative flex-1 flex flex-col pt-4 pb-2.5 px-2.5 sm:pt-8 sm:pb-6 sm:px-6 bg-white">
          {/* Floating Icon Badge overlapping image & content boundary */}
          <div className="absolute -top-3.5 left-2.5 sm:-top-6 sm:left-6 w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-900 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300">
            <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2]" />
          </div>

          {/* Title: simple and clear */}
          <h3 className="text-xs sm:text-lg font-extrabold text-slate-950 mb-1 sm:mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
            <span className="sm:hidden line-clamp-1">{getShortServiceName(title)}</span>
            <span className="hidden sm:inline line-clamp-2">{title}</span>
          </h3>

          {/* Description - Desktop only (don't elaborate on mobile UI) */}
          <p className="hidden sm:block text-xs sm:text-sm font-medium text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-1">
            {description}
          </p>

          {/* Mobile Tap Indicator */}
          <div className="sm:hidden mt-auto pt-1 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-blue-600">
            <span>Details</span>
            <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Desktop CTA Link */}
          <a
            href={link.href}
            onClick={(e) => e.stopPropagation()}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto group/link"
          >
            <span>{link.label}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-200 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Details Modal on Mobile - Portaled to document.body to prevent transform/clipping glitches */}
      {mounted && typeof document !== "undefined" && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
