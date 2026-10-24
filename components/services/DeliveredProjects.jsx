"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Search,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { deliveredProjectsList, projectFilterCategories } from "@/config/servicesContent";

export default function DeliveredProjects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return deliveredProjectsList.filter((project) => {
      // Category match
      const matchesCategory =
        activeCategory === "all" ||
        project.category === activeCategory ||
        project.secondaryCategory === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.techStack.some((t) => t.toLowerCase().includes(query)) ||
        project.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const scrollToContact = (projectName) => {
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="delivered-projects"
      aria-label="Delivered Projects Portfolio"
      className="w-full bg-slate-50/70 py-10 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-blue-600 mb-1.5 sm:mb-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>DELIVERED CLIENT WORK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Real Work Delivering <span className="text-blue-600">Measurable Impact</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-lg text-slate-600 font-normal">
              Browse our portfolio of completed projects across healthcare, industrial engineering, clean energy, local e-commerce, and enterprise operations.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-10 pr-8 py-2 sm:py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 scrollbar-none">
          {projectFilterCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? deliveredProjectsList.length
                : deliveredProjectsList.filter(
                    (p) => p.category === cat.id || p.secondaryCategory === cat.id
                  ).length;

            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No matching delivered projects</h3>
            <p className="text-sm text-slate-500 mb-4">
              Try adjusting your search query or switching categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
                >
                  <div>
                    {/* Project Image & Metric Badge */}
                    <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Top Category Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-xs">
                          {project.categoryLabel}
                        </span>
                      </div>

                      {/* Bottom Result Pill */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-xs">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{project.outcomeMetric}</span>
                        </div>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 truncate">
                          {project.client}
                        </div>
                        {project.location && (
                          <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 shrink-0">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{project.location}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-base sm:text-xl font-extrabold text-slate-950 tracking-tight mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3 sm:mb-4">
                        {project.summary}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* In-place Expandable Details (No glitchy modal) */}
                      {isExpanded && (
                        <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 space-y-2.5 sm:space-y-3">
                          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                              Client Challenge
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {project.challenge}
                            </p>
                          </div>

                          <div className="p-3 sm:p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-800 mb-1">
                              Delivered Solution
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-slate-100">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interactive Actions with Live Project Link */}
                  <div className="p-4 sm:p-6 pt-0 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 mt-2">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Less Details" : "Case Details"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <span>{project.liveUrlLabel || "Visit Live"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => scrollToContact(project.title)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
                        title="Inquire about a similar project"
                      >
                        <span>Inquire</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 mb-2 block">
              CUSTOM ENGINEERING
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Have a unique project or custom workflow requirement?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We engineer tailor-made business software, patient portals, and automated systems built specifically for your operations.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToContact("Custom Project")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shrink-0 transition-all shadow-sm cursor-pointer"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
