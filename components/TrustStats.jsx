"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { trustConfig } from "@/config/landingContent";

/**
 * Trust Statistics Section
 * Positioned directly after the hero section.
 * Features high-contrast, razor-sharp typography and crisp credibility metrics.
 */
export default function TrustStats({ config = trustConfig }) {
  const { headline, avatars, stats, floatingCard } = config;

  return (
    <section
      id="trust"
      aria-label="Credibility and Milestones"
      className="w-full bg-white border-b border-slate-200/80 py-6 sm:py-14 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Client Trust + Floating Badge */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 pb-5 sm:pb-10 border-b border-slate-200/70">
          {/* Avatars + Headline */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="flex -space-x-2 overflow-hidden shrink-0">
              {avatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-full ring-2 ring-white overflow-hidden bg-slate-100 shadow-sm"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] sm:text-sm font-bold text-slate-900 leading-snug tracking-tight">
              {headline}
            </p>
          </div>

          {/* Floating-style Information Card on the Right */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-full bg-white border border-slate-300 shadow-xs self-start md:self-auto hover:border-blue-400 transition-colors">
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
            </div>
            <span className="text-[11px] sm:text-sm font-bold text-slate-900 tracking-tight">
              {floatingCard.text}
            </span>
          </div>
        </div>

        {/* Bottom Metrics Row: 4 stats with subtle vertical separators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-5 sm:pt-10 gap-y-5 sm:gap-y-10">
          {stats.map((stat, idx) => {
            const isLastInRow = idx === stats.length - 1;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center px-3 sm:px-4 ${
                  !isLastInRow ? "lg:border-r lg:border-slate-200" : ""
                } ${!isEven ? "border-r border-slate-200 lg:border-r-0" : ""}`}
              >
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-none mb-1 sm:mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
