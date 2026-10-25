"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { featuredWorkConfig } from "@/config/landingContent";

/**
 * Featured Work Section
 * Displays three top projects with a clear section header and "View all projects" link.
 */
export default function FeaturedWorkSection({ config = featuredWorkConfig }) {
  const { badge, titlePart1, titleHighlight, viewAllLink, projects } = config;

  return (
    <section
      id="work"
      aria-label="Featured Work and Case Studies"
      className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Eyebrow + Title on Left, Link on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-14">
          <div>
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2.5 block">
              {badge}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <span className="text-blue-600">{titleHighlight}</span>
            </h2>
          </div>

          <a
            href={viewAllLink.href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors group self-start sm:self-auto"
          >
            <span>{viewAllLink.label}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Grid: 2x2 on mobile (< sm), 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
