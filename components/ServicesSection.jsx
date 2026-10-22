"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { servicesConfig } from "@/config/landingContent";

/**
 * Our Services Section
 * Follows the reference design with razor-sharp typography and high contrast.
 */
export default function ServicesSection({ config = servicesConfig }) {
  const { badge, titlePart1, titleHighlight, description, viewAllLink, services } = config;

  return (
    <section
      id="services"
      aria-label="Our Services and Capabilities"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Layout: 2-column on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14">
          {/* Left Column: Badge + Main Heading */}
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-2.5 block">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <br className="hidden sm:inline" />
              <span className="text-blue-600">{titleHighlight}</span>
            </h2>
          </div>

          {/* Right Column: Description + View All Services Link */}
          <div className="max-w-md lg:text-left flex flex-col items-start gap-4">
            <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
              {description}
            </p>
            <a
              href={viewAllLink.href}
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              <span>{viewAllLink.label}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 4 Service Cards Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
