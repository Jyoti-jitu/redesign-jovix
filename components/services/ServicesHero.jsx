"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { servicesPageHero } from "@/config/servicesContent";
import CountUp from "@/components/CountUp";

export default function ServicesHero() {
  const { badge, titlePart1, titleHighlight, subtitle, stats } = servicesPageHero;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-white pt-6 pb-10 sm:pt-16 sm:pb-24 border-b border-slate-100 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-100/40 via-sky-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-bold">Services &amp; Delivered Projects</span>
        </nav>

        {/* Hero Header Content */}
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] sm:text-sm font-bold tracking-wide uppercase mb-3.5 sm:mb-6 shadow-xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] mb-3.5 sm:mb-6">
            {titlePart1} <span className="text-blue-600">{titleHighlight}</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal mb-5 sm:mb-8">
            {subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-14">
            <a
              href="#delivered-projects"
              onClick={(e) => scrollToSection(e, "#delivered-projects")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-base shadow-sm hover:shadow-md transition-all group"
            >
              <span>Delivered Projects</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#demo-projects"
              onClick={(e) => scrollToSection(e, "#demo-projects")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-base shadow-xs transition-all group"
            >
              <span>Test Demo Projects</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-base border border-slate-300 shadow-xs hover:border-slate-400 transition-all group"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Trust & Stats Grid: 4 stats in 1 single line on mobile screen */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-6 pt-4 sm:pt-8 border-t border-slate-200/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-1.5 xs:p-2.5 sm:p-5 rounded-lg sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-200 hover:shadow-sm transition-all flex flex-col items-center justify-center text-center"
            >
              <div className="text-base xs:text-lg sm:text-3xl lg:text-4xl font-black tracking-tight text-blue-600 leading-none mb-1">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[8px] xs:text-[9.5px] sm:text-xs md:text-sm font-bold text-slate-600 leading-tight">
                {stat.label === "Interactive Prototype Demos" ? (
                  <>
                    <span className="sm:hidden">Interactive Demos</span>
                    <span className="hidden sm:inline">Interactive Prototype Demos</span>
                  </>
                ) : (
                  stat.label
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
