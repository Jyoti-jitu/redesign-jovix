"use client";

import React from "react";
import Image from "next/image";
import {
  Monitor,
  Layers,
  Settings,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
} from "lucide-react";

/**
 * Maps icon name strings to Lucide icon components
 */
const ICON_MAP = {
  Monitor: Monitor,
  Layers: Layers,
  Settings: Settings,
  ChartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
};

/**
 * Individual Service Card Component
 * Faithfully matches the reference design with top-anchored photography,
 * overlapping white icon badge, high-contrast crisp typography, and subtle interactive states.
 */
export default function ServiceCard({ service }) {
  const { title, description, image, imageAlt, icon, link } = service;
  const IconComponent = ICON_MAP[icon] || Monitor;

  return (
    <div className="group flex flex-col h-full bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden">
      {/* Top Photography Area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Content Area with Boundary-Overlapping Icon Badge */}
      <div className="relative flex-1 flex flex-col pt-6 pb-4 px-4 sm:pt-8 sm:pb-6 sm:px-6 bg-white">
        {/* Floating Icon Badge overlapping image & content boundary */}
        <div className="absolute -top-5 left-4 sm:-top-6 sm:left-6 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-900 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300">
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-extrabold text-slate-950 mb-1.5 sm:mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description - High contrast & medium weight for sharp readability */}
        <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed mb-4 sm:mb-6 flex-1">
          {description}
        </p>

        {/* CTA Link */}
        <a
          href={link.href}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mt-auto group/link"
        >
          <span>{link.label}</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
