"use client";

import React, { useState, useEffect, useRef } from "react";
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
 * Our Process Section with Fast Step-by-Step Reveal Animation
 * - Faster pace (~480ms per step)
 * - Initially reveals Step 1, then progressively unhides Step 2, 3, 4 one after another
 * - Once animation completes at Step 4, keeps all 4 steps permanently still and visible
 * - Never removes or resets the components
 */
export default function ProcessSection({ config = processConfig }) {
  const { badge, titlePart1, titleHighlight, steps } = config;
  const [revealedCount, setRevealedCount] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const sectionRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  // Trigger fast sequential reveal when section scrolls into viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const timers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;

          // Step 1: immediately revealed
          setRevealedCount(1);
          setActiveStep(0);

          // Step 2: reveal at 480ms
          timers.push(
            setTimeout(() => {
              setRevealedCount(2);
              setActiveStep(1);
            }, 480)
          );

          // Step 3: reveal at 960ms
          timers.push(
            setTimeout(() => {
              setRevealedCount(3);
              setActiveStep(2);
            }, 960)
          );

          // Step 4: reveal at 1440ms
          timers.push(
            setTimeout(() => {
              setRevealedCount(4);
              setActiveStep(3);
            }, 1440)
          );

          // Settle: keep all components permanently visible, still & calm at 1920ms
          timers.push(
            setTimeout(() => {
              setHasCompleted(true);
              setActiveStep(-1);
            }, 1920)
          );
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-label="Our Development Process"
      className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Soft Blue-Gray Enclosing Card */}
        <div className="bg-[#f8faff] rounded-2xl sm:rounded-3xl p-5 sm:p-12 lg:p-16 border border-slate-100/80 shadow-xs relative overflow-hidden">
          {/* Header */}
          <div className="max-w-2xl mb-8 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-blue-600 mb-1.5 sm:mb-2.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600" />
              <span>{badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <span className="text-blue-600">{titleHighlight}</span>
            </h2>
          </div>

          {/* Desktop & Tablet: Horizontal Connected 4-Step Animated Flow */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8 items-start">
            {steps.map((item, idx) => {
              const IconComponent = PROCESS_ICONS[item.icon] || Lightbulb;
              const isLast = idx === steps.length - 1;
              const isRevealed = hasCompleted || idx < revealedCount;
              const isActive = !hasCompleted && activeStep === idx;
              const isFilledLine = hasCompleted || idx < revealedCount - 1;

              return (
                <div
                  key={item.step}
                  className={`flex flex-col group p-3.5 rounded-2xl transition-all duration-400 ease-out ${
                    isRevealed
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-6 scale-95 pointer-events-none invisible"
                  } ${
                    isActive
                      ? "bg-white shadow-md border border-blue-100 -translate-y-1"
                      : "hover:bg-white/80"
                  }`}
                >
                  {/* Icon Circle + Number + Animated Horizontal Connector */}
                  <div className="flex items-center w-full">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg ring-4 ring-blue-500/25 scale-105"
                          : "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span
                      className={`ml-3 text-base lg:text-lg font-black tracking-tight shrink-0 transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-blue-600/90"
                      }`}
                    >
                      {item.step}
                    </span>

                    {/* Animated Connector Line */}
                    {!isLast && (
                      <div
                        className={`flex-1 h-1 bg-slate-200/90 rounded-full mx-3 overflow-hidden relative transition-opacity duration-300 ${
                          isFilledLine ? "opacity-100" : "opacity-40"
                        }`}
                      >
                        <div
                          className={`h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-400 ease-out ${
                            isFilledLine ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5 pr-2">
                    <h3
                      className={`text-lg lg:text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-slate-950"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View: Vertical Connected Sequential Timeline */}
          <div className="flex flex-col md:hidden space-y-3 relative">
            {steps.map((item, idx) => {
              const IconComponent = PROCESS_ICONS[item.icon] || Lightbulb;
              const isLast = idx === steps.length - 1;
              const isRevealed = hasCompleted || idx < revealedCount;
              const isActive = !hasCompleted && activeStep === idx;
              const isFilledLine = hasCompleted || idx < revealedCount - 1;

              return (
                <div
                  key={item.step}
                  className={`flex gap-3 relative rounded-xl border transition-all duration-400 ease-out ${
                    isRevealed
                      ? "opacity-100 translate-y-0 scale-100 max-h-48 p-3"
                      : "opacity-0 -translate-y-2 scale-95 pointer-events-none max-h-0 overflow-hidden py-0 border-transparent invisible"
                  } ${
                    isActive
                      ? "bg-white border-blue-200 shadow-sm"
                      : "bg-white/50 border-slate-100/90"
                  }`}
                >
                  {/* Left Column: Icon Circle & Animated Vertical Line */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-500/30 scale-105"
                          : "bg-blue-50 text-blue-600 border border-blue-100"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 stroke-[2]" />
                    </div>

                    {!isLast && (
                      <div
                        className={`w-1 bg-slate-200 flex-1 my-1.5 rounded-full overflow-hidden min-h-[30px] relative transition-opacity duration-300 ${
                          isFilledLine ? "opacity-100" : "opacity-40"
                        }`}
                      >
                        <div
                          className={`w-full bg-blue-600 rounded-full transition-all duration-400 ease-out ${
                            isFilledLine ? "h-full" : "h-0"
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column: Number, Title & Description */}
                  <div className="pb-1 flex-1">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-xs font-black text-blue-600">
                        {item.step}
                      </span>
                      <h3
                        className={`text-sm font-extrabold tracking-tight transition-colors ${
                          isActive ? "text-blue-600" : "text-slate-950"
                        }`}
                      >
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

