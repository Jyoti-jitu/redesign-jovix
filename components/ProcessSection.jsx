"use client";

import React from "react";
import { Lightbulb, FileText, Code2, Rocket } from "lucide-react";
import { processConfig } from "@/config/landingContent";

/**
 * Maps icon names to Lucide icon components
 */
const PROCESS_ICONS = {
  Lightbulb: Lightbulb,
  FileText: FileText,
  Code2: Code2,
  Rocket: Rocket,
};

/**
 * Our Process Section
 * Matches reference layout with connected horizontal steps on desktop
 * and an adaptive vertical flow on mobile screens.
 */
export default function ProcessSection({ config = processConfig }) {
  const { badge, titlePart1, titleHighlight, steps } = config;

  return (
    <section
      id="process"
      aria-label="Our Development Process"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Blue-Gray Enclosing Card matching reference */}
        <div className="bg-[#f8faff] rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-100/80 shadow-xs">
          {/* Header */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-600 mb-2.5 block">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <span className="text-blue-600">{titleHighlight}</span>
            </h2>
          </div>

          {/* Desktop & Tablet: Horizontal 4-Step Flow */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8 items-start">
            {steps.map((item, idx) => {
              const IconComponent = PROCESS_ICONS[item.icon] || Lightbulb;
              const isLast = idx === steps.length - 1;

              return (
                <div key={item.step} className="flex flex-col group">
                  {/* Icon Circle + Number + Horizontal Connector */}
                  <div className="flex items-center w-full">
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="ml-3 text-base lg:text-lg font-black text-blue-600 tracking-tight shrink-0">
                      {item.step}
                    </span>

                    {/* Connector line between steps */}
                    {!isLast && (
                      <div className="flex-1 h-[2px] bg-slate-200 ml-4 mr-2" />
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5 pr-4">
                    <h3 className="text-lg lg:text-xl font-extrabold text-slate-950 mb-1.5 tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View: Vertical Connected Timeline */}
          <div className="flex flex-col md:hidden space-y-8 relative">
            {steps.map((item, idx) => {
              const IconComponent = PROCESS_ICONS[item.icon] || Lightbulb;
              const isLast = idx === steps.length - 1;

              return (
                <div key={item.step} className="flex gap-4 relative">
                  {/* Left Column: Icon Circle & Vertical Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    {!isLast && (
                      <div className="w-[2px] bg-slate-200 flex-1 my-2" />
                    )}
                  </div>

                  {/* Right Column: Number, Title & Description */}
                  <div className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-black text-blue-600">
                        {item.step}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-950 tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
