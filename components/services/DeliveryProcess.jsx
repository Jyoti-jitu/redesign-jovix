"use client";

import React from "react";
import { Lightbulb, FileText, Code2, Rocket, ShieldCheck, Clock } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture Audit",
    timeframe: "Days 1–3",
    description:
      "We dissect your existing workflows, customer touchpoints, and business objectives. We specify user personas, technical integrations (APIs, databases), and architectural milestones.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "UI/UX Blueprints & Prototyping",
    timeframe: "Week 1",
    description:
      "Before writing a line of backend code, we craft interactive, modern UI prototypes. You click through every screen, user journey, and state to ensure total alignment.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Agile Engineering & QA Testing",
    timeframe: "Weeks 2–4",
    description:
      "Full-stack development using Next.js 16, React 19, and secure databases. Every component is tested across mobile, tablet, and desktop for speed, accessibility, and zero bugs.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Deployment, Training & Scale",
    timeframe: "Launch Day +",
    description:
      "Seamless launch with zero downtime. We train your staff, connect domain records and SSL, set up automated daily backups, and provide dedicated 24/7 post-launch warranty.",
    icon: Rocket,
  },
];

export default function DeliveryProcess() {
  return (
    <section className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2.5 block">
            OUR DELIVERY FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How We Turn Your Idea Into <span className="text-blue-600">Production Reality</span>
          </h2>
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-600 font-normal">
            No endless delays or opaque communication. We work on fixed milestone sprints with weekly staging previews.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 text-blue-600 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-blue-50 text-blue-700">
                      {s.timeframe}
                    </span>
                  </div>

                  <span className="text-xl sm:text-2xl font-black text-slate-300 font-mono block mb-1">
                    {s.step}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-slate-950 tracking-tight mb-1.5 sm:mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
