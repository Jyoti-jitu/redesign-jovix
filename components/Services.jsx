"use client";

import React from "react";
import { Layout, Code2, ShoppingBag, Gauge, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Layout,
    title: "UI/UX & Website Design",
    description:
      "Modern, brand-defining interfaces crafted for maximum visual engagement, effortless user journeys, and higher conversion rates.",
    tags: ["Design Systems", "Prototyping", "User Research"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Fast, resilient websites built on modern stacks like Next.js and React with clean, maintainable, production-ready code.",
    tags: ["Next.js", "React", "API Integrations"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "High-converting storefronts designed to streamline customer purchasing, minimize cart abandonment, and scale revenue.",
    tags: ["Shopify", "Custom Checkout", "Inventory Sync"],
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    description:
      "Engineered for sub-second load times, flawless Core Web Vitals, and search engine optimization that puts your business first.",
    tags: ["Speed Optimization", "Technical SEO", "Accessibility"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 sm:py-16 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            <span className="w-5 h-[2px] bg-blue-600" />
            <span>Our Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Web Solutions for Growing Companies
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            From strategic concept to final deployment, we build websites that do more than look good—they drive measurable business growth.
          </p>
        </div>

        {/* Services Grid: 2x2 on mobile (< md), 2 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-3 sm:p-8 bg-slate-50/70 hover:bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 sm:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xs sm:text-xl font-bold text-slate-900 mb-1 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-1 sm:line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="hidden sm:block text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="hidden sm:flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="sm:hidden pt-1.5 mt-1 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-bold text-blue-600">
                    <span>Details</span>
                    <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
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
