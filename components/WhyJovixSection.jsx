"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Cpu, LifeBuoy, TrendingUp, Handshake } from "lucide-react";
import { whyJovixConfig } from "@/config/landingContent";

/**
 * Maps icon name strings to Lucide components
 */
const BENEFIT_ICONS = {
  Cpu: Cpu,
  LifeBuoy: LifeBuoy,
  TrendingUp: TrendingUp,
  Handshake: Handshake,
};

/**
 * Why Jovix Section
 * Features a slower, highly noticeable scroll-triggered entrance animation:
 * - Office photograph slides in smoothly from the left (slower 1500ms duration)
 * - Heading, copy, and benefit grid glide in smoothly from the right
 * - Staggered benefit cards elevate smoothly into place
 */
export default function WhyJovixSection({ config = whyJovixConfig }) {
  const {
    badge,
    titlePart1,
    titlePart2,
    titleHighlight,
    description,
    officeImage,
    benefits,
  } = config;

  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Trigger once when the content is properly scrolled into view
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      aria-label="Why Choose Jovix"
      className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Office Photograph — comes slowly from left to right */}
          <div
            className={`lg:col-span-6 transform transition-all duration-[1500ms] ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20 sm:-translate-x-32 lg:-translate-x-40 pointer-events-none"
            }`}
          >
            <div className="relative w-full aspect-[3/2] rounded-xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-100 group">
              <Image
                src={officeImage.src}
                alt={officeImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column: Text & Benefits — comes slowly from right to left */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transform transition-all duration-[1500ms] ease-out delay-150 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20 sm:translate-x-32 lg:translate-x-40 pointer-events-none"
            }`}
          >
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2.5 block">
              {badge}
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <br className="hidden sm:inline" />
              {titlePart2} <span className="text-blue-600">{titleHighlight}</span>
            </h2>

            {description && (
              <p className="mt-2.5 sm:mt-4 text-xs sm:text-base font-medium text-slate-600 leading-relaxed max-w-lg mb-6 sm:mb-10">
                {description}
              </p>
            )}

            {/* 2x2 Benefits Grid with Icon on Left, Text on Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-7">
              {benefits.map((benefit, idx) => {
                const IconComponent = BENEFIT_ICONS[benefit.icon] || Cpu;

                return (
                  <div
                    key={benefit.id}
                    style={{
                      transitionDelay: isVisible ? `${350 + idx * 120}ms` : "0ms",
                    }}
                    className={`flex items-start gap-3 sm:gap-4 group transform transition-all duration-[1200ms] ease-out ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-slate-200/90 bg-white flex items-center justify-center text-slate-800 shadow-xs group-hover:border-blue-400 group-hover:text-blue-600 group-hover:bg-blue-50/50 transition-all duration-300 shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xs sm:text-base font-bold text-slate-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm font-medium text-slate-500 leading-snug mt-0.5 whitespace-pre-line">
                        {benefit.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
