"use client";

import React from "react";
import Image from "next/image";
import { Monitor, Layers, Settings, ChartNoAxesColumnIncreasing, CheckCircle2, ArrowRight, Zap, Code2 } from "lucide-react";
import { detailedServicesList } from "@/config/servicesContent";

const ICON_MAP = {
  Monitor: Monitor,
  Layers: Layers,
  Settings: Settings,
  ChartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
};

export default function ServicesList() {
  const scrollToContact = (e, serviceTitle) => {
    e.preventDefault();
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToDeliveredProject = (e, projectId) => {
    e.preventDefault();
    const projectEl = document.querySelector(`#project-${projectId}`) || document.querySelector("#delivered-projects");
    if (projectEl) {
      projectEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-16">
          <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2.5 block">
            OUR CORE EXPERTISE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Specialized Services Built for <span className="text-blue-600">Measurable Growth</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you need a high-converting website, custom ERP/CRM operations software, or automated AI workflows, every solution is built to scale your business efficiency and revenue.
          </p>
        </div>

        {/* 4 In-Depth Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
          {detailedServicesList.map((service) => {
            const Icon = ICON_MAP[service.icon] || Monitor;

            return (
              <div
                key={service.id}
                id={service.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 p-4 sm:p-8 lg:p-10"
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200/60">
                        {service.badge}
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-slate-300 font-mono">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-950 tracking-tight mb-1.5 sm:mb-2.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-base font-semibold text-blue-600 leading-snug mb-2.5 sm:mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables List */}
                  <div className="mb-4 sm:mb-6 pt-3.5 sm:pt-5 border-t border-slate-100">
                    <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 sm:mb-3.5">
                      Key Deliverables &amp; Capabilities:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                      Technologies & Tools:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{service.resultsMetric}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => scrollToDeliveredProject(e, service.featuredDeliveredProject)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      <span>View Delivered Work</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => scrollToContact(e, service.title)}
                      className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                    >
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
