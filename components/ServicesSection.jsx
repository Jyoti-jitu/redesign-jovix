"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { servicesConfig } from "@/config/landingContent";

/**
 * Our Services Section
 * When the user scrolls past the top text and reaches the service cards catalog,
 * all components smoothly elevate upwards from bottom to top with a slow, elegant stagger.
 */
export default function ServicesSection({ config = servicesConfig }) {
  const { badge, titlePart1, titleHighlight, description, viewAllLink, services } = config;
  const [isCatalogVisible, setIsCatalogVisible] = useState(false);
  const cardsGridRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = cardsGridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Trigger when the user scrolls to the cards catalog and keep still once revealed
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setIsCatalogVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      aria-label="Our Services and Capabilities"
      className="w-full bg-white py-10 sm:py-20 lg:py-24 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Layout: 2-column on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          {/* Left Column: Badge + Main Heading */}
          <div className="max-w-xl">
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-1.5 sm:mb-2 block">
              {badge}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {titlePart1} <br className="hidden sm:inline" />
              <span className="text-blue-600">{titleHighlight}</span>
            </h2>
          </div>

          {/* Right Column: Description + View All Services Link */}
          <div className="max-w-md lg:text-left flex flex-col items-start gap-2.5 sm:gap-3.5">
            <p className="text-xs sm:text-base font-medium text-slate-700 leading-relaxed">
              {description}
            </p>
            <a
              href={viewAllLink.href}
              className="inline-flex items-center gap-1.5 text-xs sm:text-base font-bold text-blue-600 hover:text-blue-700 transition-colors group"
            >
              <span>{viewAllLink.label}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 4 Service Cards Grid: Elevates up comfortably when user reaches the catalog */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`h-full transform transition-all duration-700 ease-out ${
                isCatalogVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-16 scale-[0.97]"
              }`}
              style={{
                transitionDelay: isCatalogVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
