"use client";

import React, { useState, useMemo, useEffect } from "react";
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
  Crown,
} from "lucide-react";
import { deliveredProjectsList, projectFilterCategories } from "@/config/servicesContent";

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

export default function DeliveredProjects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setActiveModalProject(null);
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
  }, [activeModalProject]);

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
    setActiveModalProject(null);
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
          /* 2x2 grid on mobile (< sm), 2 cols on tablet, 3 cols on desktop */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  onClick={() => setActiveModalProject(project)}
                  className="group flex flex-col justify-between bg-white rounded-xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div>
                    {/* Project Image & Metric Badge */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        style={
                          project.imagePosition || project.id === "dr-abhishek-anand"
                            ? { objectPosition: project.imagePosition || "center 18%" }
                            : undefined
                        }
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Top Category Badge & Crown Badge */}
                      <div className="absolute top-1.5 left-1.5 sm:top-3.5 sm:left-3.5 z-10 flex items-center gap-1.5">
                        <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-xs">
                          {project.categoryLabel}
                        </span>
                        {(project.hasCrown || project.id === "dr-radhamadhab-sahu") && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-xs">
                            <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-100" />
                            <span className="hidden sm:inline">Top Pick</span>
                          </span>
                        )}
                      </div>

                      {/* Bottom Result Pill - Desktop only */}
                      <div className="hidden sm:flex absolute bottom-3 left-3 right-3 z-10 items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-xs">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{project.outcomeMetric}</span>
                        </div>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-2.5 sm:p-6">
                      <div className="flex items-center justify-between gap-2 mb-0.5 sm:mb-1">
                        <div className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 truncate">
                          {project.client}
                        </div>
                        {project.location && (
                          <div className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 shrink-0">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{project.location}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xs sm:text-base md:text-xl font-extrabold text-slate-950 tracking-tight mb-0.5 sm:mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                        {(project.hasCrown || project.id === "dr-radhamadhab-sahu") && (
                          <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-400 shrink-0 inline-block" />
                        )}
                        <span className="sm:hidden line-clamp-1">{getProjectName(project.title)}</span>
                        <span className="hidden sm:inline">{project.title}</span>
                      </h3>

                      {/* Summary - Desktop only */}
                      <p className="hidden sm:block text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3 sm:mb-4">
                        {project.summary}
                      </p>

                      {/* Key Highlights - Desktop only */}
                      <div className="hidden sm:block mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* In-place Expandable Details - Desktop only */}
                      {isExpanded && (
                        <div className="hidden sm:block pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 space-y-2.5 sm:space-y-3">
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

                      {/* Tech Stack Pills - Desktop only */}
                      <div className="hidden sm:flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-slate-100">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Mobile simple tap indicator */}
                      <div className="sm:hidden pt-1.5 mt-1 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-blue-600">
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interactive Actions - Desktop only */}
                  <div className="hidden sm:flex p-4 sm:p-6 pt-0 flex-wrap items-center justify-between gap-2 border-t border-slate-100 mt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(project.id);
                      }}
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
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
                        >
                          <span>{project.liveUrlLabel || "Visit Live"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact(project.title);
                        }}
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

        {/* Modal: Full Delivered Project Details when card is clicked */}
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveModalProject(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 p-4 sm:p-6 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Modal Image */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-4">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.imageAlt}
                  fill
                  style={
                    activeModalProject.imagePosition || activeModalProject.id === "dr-abhishek-anand"
                      ? { objectPosition: activeModalProject.imagePosition || "center 18%" }
                      : undefined
                  }
                  className="object-cover"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-xs">
                    {activeModalProject.categoryLabel}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 bg-blue-600 text-white rounded-full shadow-xs">
                    {activeModalProject.outcomeMetric}
                  </span>
                </div>
              </div>

              {/* Client & Title */}
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                {activeModalProject.client} {activeModalProject.location && `• ${activeModalProject.location}`}
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-slate-950 tracking-tight leading-snug mb-2 flex items-center gap-2">
                {(activeModalProject.hasCrown || activeModalProject.id === "dr-radhamadhab-sahu") && (
                  <Crown className="w-5 h-5 text-amber-500 fill-amber-400 shrink-0" />
                )}
                <span>{activeModalProject.title}</span>
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                {activeModalProject.summary}
              </p>

              {/* Key Features */}
              <div className="mb-4 pt-3 border-t border-slate-100">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Delivered Highlights
                </h4>
                <div className="space-y-1.5">
                  {activeModalProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-2.5 mb-4">
                {activeModalProject.challenge && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Client Challenge
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeModalProject.challenge}
                    </p>
                  </div>
                )}

                {activeModalProject.solution && (
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-blue-800 mb-1">
                      Delivered Solution
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeModalProject.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="mb-5">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs font-medium px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-3 border-t border-slate-100">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all text-center"
                  >
                    <span>{activeModalProject.liveUrlLabel || "Visit Live Platform"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => scrollToContact(activeModalProject.title)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  <span>Inquire for Similar Project</span>
                </button>
              </div>
            </div>
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
