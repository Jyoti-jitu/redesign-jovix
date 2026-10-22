"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Layers, CheckCircle } from "lucide-react";

const PROJECTS = [
  {
    title: "Apex Healthcare Platform",
    category: "Medical & Health Tech",
    metric: "+148% Patient Bookings",
    summary:
      "A complete redesign and Next.js re-architecture for a multi-location health group, optimizing patient onboarding and mobile conversion.",
    tags: ["Next.js", "Tailwind CSS", "HIPAA Ready"],
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Lumina Financial Services",
    category: "Fintech & Wealth Advisory",
    metric: "0.5s Page Load Time",
    summary:
      "Modern brand positioning and client portal interface designed for high trust, interactive investment calculators, and seamless lead capture.",
    tags: ["React", "API Integration", "Design System"],
    gradient: "from-slate-800 to-slate-950",
  },
  {
    title: "Vanguard Studio Interiors",
    category: "Architecture & Design",
    metric: "3.2x Consultation Inquiries",
    summary:
      "Minimalist, photography-driven portfolio with smooth transitions, interactive project floorplans, and an editorial aesthetic.",
    tags: ["UI/UX Design", "Headless CMS", "Performance"],
    gradient: "from-amber-700 to-orange-800",
  },
  {
    title: "Nordic Living Collective",
    category: "DTC E-Commerce Storefront",
    metric: "+82% Average Order Value",
    summary:
      "Custom Shopify Plus build featuring bespoke product builders, one-click checkout, and lightning-fast edge caching.",
    tags: ["Shopify Plus", "Tailwind CSS", "Analytics"],
    gradient: "from-emerald-700 to-teal-800",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Real Work Delivering Real Results
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Explore how we have helped business owners establish authority, attract high-value clients, and scale their digital footprint.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Decorative Project Header */}
              <div
                className={`h-44 sm:h-52 bg-gradient-to-br ${project.gradient} p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden`}
              >
                <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6 opacity-10">
                  <Layers className="w-48 h-48" />
                </div>
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
                    {project.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-slate-900 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-xs font-medium text-white/90">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-300" />
                    <span>Key Outcome: {project.metric}</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
