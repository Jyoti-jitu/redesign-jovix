"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * ProjectCard Component
 * Displays a portfolio case study with top photography, title, description, and circle arrow CTA.
 */
export default function ProjectCard({ project }) {
  const { title, description, image, imageAlt, href } = project;

  return (
    <a
      href={href || "#contact"}
      className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      {/* Top Image Area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-104 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Bottom White Content Bar */}
      <div className="p-5 sm:p-6 flex items-center justify-between gap-4 bg-white">
        <div className="flex flex-col min-w-0 pr-2">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors truncate">
            {title}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm font-medium text-slate-500 leading-snug mt-1 truncate">
              {description}
            </p>
          )}
        </div>

        {/* Circular Light Blue Arrow Button */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-xs">
          <ArrowRight className="w-4.5 h-4.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}
