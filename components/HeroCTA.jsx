"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  PlayCircle,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import heroConfig from "@/config/hero.js";

/**
 * Maps icon string names to Lucide icon components
 */
const ICON_MAP = {
  "arrow-right": ArrowRight,
  "play-circle": PlayCircle,
  "external-link": ExternalLink,
  "chevron-right": ChevronRight,
  phone: Phone,
  mail: Mail,
  sparkles: Sparkles,
};

/**
 * Single CTA Button Component
 * Fully customized through props with support for hover transitions,
 * accessibility focus rings, responsive size presets, and smooth section scrolling.
 */
export function CTAButton({
  label = "Click Here",
  mobileLabel = null,
  href = "#",
  target = "_self",
  backgroundColor = "#1877F2",
  hoverBackgroundColor = "#0d65d9",
  textColor = "#ffffff",
  hoverTextColor = "#ffffff",
  borderColor = "transparent",
  hoverBorderColor = null,
  borderRadius = "8px",
  fontSize = "1rem",
  fontWeight = "600",
  paddingX = null,
  paddingY = null,
  width = "auto",
  height = null,
  icon = "arrow-right",
  showIcon = true,
  iconPlacement = "right",
  visible = true,
  size = "md", // 'sm' | 'md' | 'lg'
  iconClassName = "",
  className = "",
  style = {},
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (!visible) return null;

  const IconComponent = ICON_MAP[icon?.toLowerCase()] || ArrowRight;

  const currentBg = isHovered && hoverBackgroundColor ? hoverBackgroundColor : backgroundColor;
  const currentText = isHovered && hoverTextColor ? hoverTextColor : textColor;
  const currentBorder = isHovered && hoverBorderColor ? hoverBorderColor : borderColor;

  // Handle smooth scroll for in-page anchors like #contact or #work
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (href && href.startsWith("#") && href.length > 1) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }
  };

  // Preset measurements based on scale
  const sizePresets = {
    sm: {
      height: "38px",
      paddingX: "14px",
      paddingY: "8px",
      fontSize: "0.78rem",
      iconSize: "w-3.5 h-3.5",
    },
    md: {
      height: "44px",
      paddingX: "18px",
      paddingY: "10px",
      fontSize: "0.875rem",
      iconSize: "w-4 h-4",
    },
    lg: {
      height: "56px",
      paddingX: "26px",
      paddingY: "15px",
      fontSize: "1rem",
      iconSize: "w-5 h-5",
    },
  };

  const preset = sizePresets[size] || sizePresets.md;

  const dynamicStyles = {
    backgroundColor: currentBg,
    color: currentText,
    borderColor: currentBorder || "transparent",
    borderWidth: currentBorder && currentBorder !== "transparent" ? "1.5px" : "1px",
    borderStyle: "solid",
    borderRadius: borderRadius,
    fontSize: fontSize || preset.fontSize,
    fontWeight: fontWeight,
    paddingLeft: paddingX !== null ? paddingX : preset.paddingX,
    paddingRight: paddingX !== null ? paddingX : preset.paddingX,
    paddingTop: paddingY !== null ? paddingY : preset.paddingY,
    paddingBottom: paddingY !== null ? paddingY : preset.paddingY,
    width: width,
    height: height !== null ? height : preset.height,
    ...style,
  };

  const activeIconSize = iconClassName || preset.iconSize;

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={dynamicStyles}
      className={`inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 select-none ${className}`}
      aria-label={label}
    >
      {showIcon && iconPlacement === "left" && (
        <IconComponent
          className={`${activeIconSize} shrink-0 transition-transform duration-200`}
          aria-hidden="true"
        />
      )}
      <span className="truncate whitespace-nowrap">
        {mobileLabel ? (
          <>
            <span className="inline sm:hidden">{mobileLabel}</span>
            <span className="hidden sm:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </span>
      {showIcon && iconPlacement === "right" && (
        <IconComponent
          className={`${activeIconSize} shrink-0 transition-transform duration-200 ${
            isHovered ? "translate-x-0.5" : ""
          }`}
          aria-hidden="true"
        />
      )}
    </a>
  );
}

/**
 * HeroCTA Component
 * Renders both primary and secondary buttons based on configuration or passed props.
 */
export default function HeroCTA({
  config = heroConfig,
  className = "",
  buttonClassName = "",
  size = "md",
  orientation = "row", // 'row' or 'col'
}) {
  const { primaryButton, secondaryButton } = config;

  return (
    <div
      className={`flex ${
        orientation === "col" ? "flex-col items-stretch" : "flex-row items-center"
      } gap-2.5 sm:gap-4 ${className}`}
      role="group"
      aria-label="Call to action buttons"
    >
      {primaryButton?.visible && (
        <CTAButton
          {...primaryButton}
          size={size}
          className={`${buttonClassName}`}
        />
      )}

      {secondaryButton?.visible && (
        <CTAButton
          {...secondaryButton}
          size={size}
          className={`${buttonClassName}`}
        />
      )}
    </div>
  );
}
