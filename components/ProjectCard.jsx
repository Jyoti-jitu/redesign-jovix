"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

/**
 * ProjectCard Component
 * Displays a portfolio case study with top photography, title, description, and circle arrow CTA.
 */
export default function ProjectCard({ project }) {
  const { title, description, image, imageAlt, href } = project;
  const isExternal = href && href.startsWith("http");

  return (
    <a
      href={href || "#contact"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
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
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {isExternal && (
          <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-700 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      {/* Bottom White Content Bar */}
      <div className="p-3.5 sm:p-6 flex items-center justify-between gap-3 bg-white">
        <div className="flex flex-col min-w-0 pr-1">
          <h3 className="text-sm sm:text-lg font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors truncate">
            {title}
          </h3>
          {description && (
            <p className="text-[11px] sm:text-sm font-medium text-slate-500 leading-snug mt-0.5 sm:mt-1 truncate">
              {description}
            </p>
          )}
        </div>

        {/* Circular Light Blue Arrow Button */}
        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200 shadow-xs">
          <ArrowRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}
