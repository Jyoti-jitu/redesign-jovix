"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { clientTestimonials } from "@/config/servicesContent";

export default function ServicesTestimonials() {
  return (
    <section className="w-full bg-slate-50/60 py-10 sm:py-20 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2.5 block">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Trusted by Business Owners <span className="text-blue-600">Across India</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-600 font-normal">
            Hear directly from doctors, enterprise founders, and industrial leaders who partnered with Jovix to transform their operations and customer reach.
          </p>
        </div>

        {/* Testimonials 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {clientTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating & Highlight */}
                <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                    {t.highlight}
                  </span>
                </div>

                <p className="text-xs sm:text-base text-slate-700 leading-relaxed italic mb-4 sm:mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 sm:pt-5 border-t border-slate-100">
                <div className="font-extrabold text-slate-950 text-xs sm:text-base">
                  {t.author}
                </div>
                <div className="text-[11px] sm:text-xs text-blue-600 font-semibold">{t.role}</div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
