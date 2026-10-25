"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Search,
  X,
  ExternalLink,
} from "lucide-react";
import { demoProjectsList, demoCategories } from "@/config/servicesContent";

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

export default function DemoProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalDemo, setActiveModalDemo] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalDemo) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setActiveModalDemo(null);
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
  }, [activeModalDemo]);

  // Filter demos by category and search
  const filteredDemos = useMemo(() => {
    return demoProjectsList.filter((demo) => {
      const matchesCategory =
        selectedCategory === "all" || demo.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        demo.title.toLowerCase().includes(query) ||
        demo.tagline.toLowerCase().includes(query) ||
        demo.description.toLowerCase().includes(query) ||
        demo.categoryLabel.toLowerCase().includes(query) ||
        demo.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const scrollToContact = () => {
    setActiveModalDemo(null);
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="demo-projects"
      aria-label="Interactive Demo Projects & Concept Prototypes"
      className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-blue-600 mb-1.5 sm:mb-2.5">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              <span>LIVE INTERACTIVE PROTOTYPES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Classified <span className="text-blue-600">Demo Projects</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-lg text-slate-600 font-normal">
              Click any industry category below to filter our functional prototypes. Click <strong className="text-slate-900 font-bold">&quot;Test Live Prototype&quot;</strong> on any card to test the full-page live simulator with instant booking, calculations, and dispatch workflows.
            </p>
          </div>

          {/* Search Demos */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search demo prototypes..."
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

        {/* Category Classification Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 no-scrollbar">
          {demoCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count =
              cat.id === "all"
                ? demoProjectsList.length
                : demoProjectsList.filter((d) => d.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected
                      ? "bg-white/25 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredDemos.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-base font-bold text-slate-800">
              No demo projects match &quot;{searchQuery}&quot; in this category.
            </p>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try clearing your search term or select &quot;All Demos&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 text-xs font-semibold text-blue-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Show all demo projects
            </button>
          </div>
        ) : (
          /* 2x2 grid on mobile (< sm), 2 cols on tablet, 3 cols on desktop */
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
            {filteredDemos.map((demo) => {
              return (
                <div
                  key={demo.id}
                  id={demo.id}
                  onClick={() => setActiveModalDemo(demo)}
                  className="group flex flex-col justify-between bg-white rounded-xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div>
                    {/* Demo Image & Badges */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={demo.image}
                        alt={demo.imageAlt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-1.5 left-1.5 sm:top-3.5 sm:left-3.5 z-10">
                        <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-3 sm:py-1 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-xs">
                          {demo.categoryLabel}
                        </span>
                      </div>

                      {/* Prototype Indicator - desktop only */}
                      <div className="hidden sm:block absolute bottom-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold shadow-xs">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Interactive Prototype</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Content: Simple on mobile, rich on desktop */}
                    <div className="p-2.5 sm:p-6">
                      <h3 className="text-xs sm:text-base md:text-xl font-extrabold text-slate-950 tracking-tight mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors">
                        <span className="sm:hidden line-clamp-1">{getProjectName(demo.title)}</span>
                        <span className="hidden sm:inline">{demo.title}</span>
                      </h3>
                      <p className="hidden sm:block text-xs sm:text-sm font-semibold text-blue-600 mb-1 sm:mb-2.5 leading-tight">
                        {demo.tagline}
                      </p>

                      {/* Description - Desktop only */}
                      <p className="hidden sm:block text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3 sm:mb-4">
                        {demo.description}
                      </p>

                      {/* Key Capabilities - Desktop only */}
                      <div className="hidden sm:block space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        {demo.keyCapabilities.slice(0, 3).map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills - Desktop only */}
                      <div className="hidden sm:flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-slate-100">
                        {demo.techStack.map((tech, tIdx) => (
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

                  {/* Card Bottom Action Bar - Desktop only */}
                  <div className="hidden sm:flex p-4 sm:p-6 pt-0 items-center justify-between gap-2.5 border-t border-slate-100 mt-3 sm:mt-4">
                    <Link
                      href={`/demo-projects/${demo.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-bold transition-all cursor-pointer shadow-xs group/btn"
                    >
                      <span>Test Live Prototype</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContact();
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-[11px] sm:text-xs font-bold transition-all cursor-pointer"
                    >
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal: Full Project Details when card is clicked */}
        {activeModalDemo && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveModalDemo(null)}
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
                onClick={() => setActiveModalDemo(null)}
                aria-label="Close dialog"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Modal Image */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-100 mb-4">
                <Image
                  src={activeModalDemo.image}
                  alt={activeModalDemo.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 bg-white/95 backdrop-blur-md text-slate-900 rounded-full shadow-xs">
                    {activeModalDemo.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                {activeModalDemo.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5 mb-3">
                {activeModalDemo.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                {activeModalDemo.description}
              </p>

              {/* Key Capabilities */}
              <div className="mb-4">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Key Capabilities
                </h4>
                <div className="space-y-1.5">
                  {activeModalDemo.keyCapabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-5">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalDemo.techStack.map((tech, idx) => (
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
                <Link
                  href={`/demo-projects/${activeModalDemo.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-all text-center"
                >
                  <span>Test Live Prototype</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  <span>Inquire About Build</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-8 sm:mt-14 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-md">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1.5 sm:mb-2">
              BESPOKE SOFTWARE &amp; WEB PLATFORMS
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug">
              Need a production system engineered for your business?
            </h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-300 font-normal">
              We design and build production-ready custom web portals, booking engines, clinic systems, and ERP workflows with zero restrictive monthly SaaS fees.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToContact}
            className="w-full sm:w-auto justify-center px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer flex items-center gap-2"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
