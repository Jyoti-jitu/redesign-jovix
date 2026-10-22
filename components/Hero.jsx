"use client";

import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/HeroCTA";
import heroConfig from "@/config/hero.js";

/**
 * Hero Section
 *
 * Full uncropped image across all breakpoints.
 * Buttons overlay inside at proportional coordinates (left: 7.3%, top: 65.6%).
 */
export default function Hero({ config = heroConfig }) {
  const { image, positioning, primaryButton, secondaryButton } = config;

  return (
    <section
      id="hero"
      aria-label="Jovix Hero — Digital Solutions for Real Businesses"
      className="relative w-full bg-white select-none overflow-hidden"
    >
      <div className="relative w-full max-w-[1920px] mx-auto">
        <div className="relative w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={true}
            unoptimized={image.unoptimized !== undefined ? image.unoptimized : true}
            quality={100}
            sizes="100vw"
            className="w-full h-auto block"
          />

          {/* 
            CTA Buttons — overlaid at the same proportional position on ALL screens.
            left: 7.3%, top: 65.6% scales with the image naturally.
          */}
          <div
            className="absolute z-10 flex items-center"
            style={{
              left: positioning.desktopLeft,
              top: positioning.desktopTop,
            }}
          >
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-5">
              {primaryButton?.visible && (
                <CTAButton
                  {...primaryButton}
                  size="sm"
                  iconClassName="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 lg:w-4.5 lg:h-4.5"
                  className="!h-6.5 !text-[9.5px] xs:!text-[10px] !font-bold !px-2.5 !py-0.5 !gap-1 !rounded-md !shadow-none sm:!h-8 sm:!text-[11px] sm:!px-3.5 sm:!py-1.5 sm:!rounded-lg md:!h-10 md:!text-xs md:!px-4 md:!py-2 lg:!h-14 lg:!text-base lg:!px-7 lg:!py-4 lg:!gap-2.5 lg:!rounded-xl lg:!shadow-md"
                />
              )}
              {secondaryButton?.visible && (
                <CTAButton
                  {...secondaryButton}
                  size="sm"
                  iconClassName="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 lg:w-4.5 lg:h-4.5"
                  className="!h-6.5 !text-[9.5px] xs:!text-[10px] !font-bold !px-2.5 !py-0.5 !gap-1 !rounded-md !shadow-none sm:!h-8 sm:!text-[11px] sm:!px-3.5 sm:!py-1.5 sm:!rounded-lg md:!h-10 md:!text-xs md:!px-4 md:!py-2 lg:!h-14 lg:!text-base lg:!px-6 lg:!py-4 lg:!gap-2.5 lg:!rounded-xl lg:!shadow-sm"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
