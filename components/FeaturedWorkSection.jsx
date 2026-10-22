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
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Eyebrow + Title on Left, Link on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-2.5 block">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <span className="text-blue-600">{titleHighlight}</span>
            </h2>
          </div>

          <a
            href={viewAllLink.href}
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors group self-start sm:self-auto"
          >
            <span>{viewAllLink.label}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Projects Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
