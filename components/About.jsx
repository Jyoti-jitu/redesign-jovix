"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Users, Target, ShieldCheck } from "lucide-react";

const STATS = [
  { value: "150+", label: "Websites Launched", detail: "Across 20+ industries" },
  { value: "99.8%", label: "Client Satisfaction", detail: "Based on post-launch surveys" },
  { value: "3.5x", label: "Average Conversion Lift", detail: "Measured after 90 days" },
  { value: "10+", label: "Years Experience", detail: "Design and engineering" },
];

const VALUES = [
  {
    icon: Target,
    title: "Strategy First",
    description: "Every pixel and line of code is tied directly to your business conversion goals.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "You work directly with senior designers and engineers, without layers of account managers.",
  },
  {
    icon: ShieldCheck,
    title: "Production-Grade Quality",
    description: "Built for speed, accessibility, and high performance that endures for years.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              <span className="w-5 h-[2px] bg-blue-600" />
              <span>About Jovix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              We Craft High-Impact Websites for Ambitious Businesses
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Jovix was founded with a straightforward conviction: great businesses deserve websites that match the quality of their services. We combine aesthetic precision with engineering discipline to turn your website into your company's most reliable revenue driver.
            </p>

            <div className="mt-8 space-y-4">
              {VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{val.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{val.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stats Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {STATS.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center flex flex-col justify-center hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-900">{stat.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 shrink-0 flex items-center justify-center shadow-md">
                    <Image
                      src="/images/jovix-symbol.png"
                      alt="Jovix Official Emblem"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wide uppercase text-white">
                      The Jovix Guarantee
                    </h4>
                    <span className="text-[10px] text-blue-300 uppercase tracking-wider font-semibold block">
                      Technology for a Brighter Tomorrow
                    </span>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0" />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every project comes with transparent milestone pricing, full code ownership, and 30 days of post-launch hypercare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
