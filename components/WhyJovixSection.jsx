"use client";

import React from "react";
import Image from "next/image";
import { Cpu, LifeBuoy, TrendingUp, Handshake, MapPin } from "lucide-react";
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
 * Features office workspace photography on the left, and headline, description,
 * and 2x2 benefits list with left-aligned icons on the right.
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

  return (
    <section
      id="about"
      aria-label="Why Choose Jovix"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Office Photograph */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[3/2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-100 group">
              <Image
                src={officeImage.src}
                alt={officeImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Floating Office Location Badge */}
              {officeImage.mapUrl && (
                <a
                  href={officeImage.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Jovix Office Location on Google Maps"
                  className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-10 flex items-center gap-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-lg hover:shadow-xl hover:bg-white transition-all group/badge"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm group-hover/badge:scale-105 transition-transform">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover/badge:text-blue-600 transition-colors">
                      {officeImage.badgeTitle || "Our Office"}
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500">
                      {officeImage.location || "GITA Engineering College, Bhubaneswar, Odisha"}
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Eyebrow, Main Heading, Description & 2x2 Benefits Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-2.5 block">
              {badge}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <br />
              {titlePart2} <span className="text-blue-600">{titleHighlight}</span>
            </h2>

            {description && (
              <p className="mt-4 text-sm sm:text-base font-medium text-slate-600 leading-relaxed max-w-lg mb-8 sm:mb-10">
                {description}
              </p>
            )}

            {/* 2x2 Benefits Grid with Icon on Left, Text on Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              {benefits.map((benefit) => {
                const IconComponent = BENEFIT_ICONS[benefit.icon] || Cpu;

                return (
                  <div key={benefit.id} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-slate-200/90 bg-white flex items-center justify-center text-slate-800 shadow-xs group-hover:border-blue-400 group-hover:text-blue-600 group-hover:bg-blue-50/50 transition-all duration-300 shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 leading-snug mt-0.5 whitespace-pre-line">
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
