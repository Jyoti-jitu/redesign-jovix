"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, X, Crown } from "lucide-react";

/**
 * ProjectCard Component
 * Decreased size on mobile (2x2 grid friendly), simple details in UI,
 * with full details modal on click so user can see all necessary details.
 */
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

export default function ProjectCard({ project }) {
  const { title, description, image, imageAlt, href } = project;
  const isExternal = href && href.startsWith("http");
  const hasCrown = project.hasCrown || project.id === "dr-radhamadhab-sahu";
  const imagePosition =
    project.imagePosition ||
    (project.id === "dr-abhishek-anand" ? "center 18%" : undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  const handleCardClick = (e) => {
    if (window.innerWidth < 640) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <a
        href={href || "#contact"}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={handleCardClick}
        className="group flex flex-col bg-white rounded-xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden cursor-pointer relative"
      >
        {/* Top Image Area */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Crown Badge */}
          {hasCrown && (
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md border border-amber-300/40 backdrop-blur-xs">
              <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-100 text-white stroke-[2]" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-amber-50">
                Top Pick
              </span>
            </div>
          )}

          {isExternal && (
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          )}
        </div>

        {/* Bottom White Content Bar */}
        <div className="p-2 sm:p-6 flex items-center justify-between gap-1.5 sm:gap-3 bg-white">
          <div className="flex flex-col min-w-0 pr-1">
            <h3 className="text-xs sm:text-lg font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors flex items-center gap-1 sm:gap-1.5 min-w-0">
              {hasCrown && (
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-amber-400 shrink-0 inline-block" />
              )}
              <span className="sm:hidden truncate block">{getProjectName(title)}</span>
              <span className="hidden sm:inline truncate">{title}</span>
            </h3>
            {/* Description - Desktop only */}
            {description && (
              <p className="hidden sm:block text-[11px] sm:text-sm font-medium text-slate-500 leading-snug mt-0.5 sm:mt-1 truncate">
                {description}
              </p>
            )}
          </div>

          {/* Circular Light Blue Arrow Button */}
          <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-xs">
            <ArrowRight className="w-3 h-3 sm:w-4.5 sm:h-4.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>
      </a>

      {/* Details Modal on Mobile */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close dialog"
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <Image
                src={image}
                alt={imageAlt}
                fill
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
                className="object-cover"
              />
              {hasCrown && (
                <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md border border-amber-300/40">
                  <Crown className="w-3.5 h-3.5 fill-amber-100 text-white stroke-[2]" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-50">
                    Top Pick
                  </span>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 className="text-base font-extrabold text-slate-950 tracking-tight mb-2 flex items-center gap-1.5">
              {hasCrown && (
                <Crown className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" />
              )}
              <span>{title}</span>
            </h3>

            {/* Full Description */}
            {description && (
              <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                {description}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <a
                href={href || "#contact"}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setIsModalOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-all text-center"
              >
                <span>{isExternal ? "Visit Project" : "View Case Study"}</span>
                {isExternal ? (
                  <ExternalLink className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </a>

              <a
                href="/services#delivered-projects"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all text-center"
              >
                <span>All Projects</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
