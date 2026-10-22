/**
 * Jovix Hero Section Configuration
 * Centralized settings for the hero image and CTA buttons.
 * Each button property can be customized independently.
 */

export const heroConfig = {
  // Hero image specifications - Ultra-sharp high-resolution asset
  image: {
    src: "/images/jovix-hero.png",
    srcOriginal1x: "/images/jovix-hero-1x.png",
    alt: "Jovix — Digital Solutions for Real Businesses",
    width: 3966,
    height: 1586,
    aspectRatio: "1983 / 793",
    unoptimized: true, // Prevents lossy Next.js downsampling and compression artifacts
  },

  // Positioning reference based on the intrinsic dimensions (1983x793 or 1920x768)
  // The open space begins directly beneath the description on the left side
  positioning: {
    desktopLeft: "7.3%",
    desktopTop: "65.6%",
    gap: "24px",
  },

  // Primary Call-To-Action Button
  primaryButton: {
    visible: true,
    label: "Get a Free Consultation",
    mobileLabel: "Free Consultation",
    href: "#contact",
    target: "_self", // '_self' or '_blank'
    backgroundColor: "#1877F2", // Jovix solid royal blue
    hoverBackgroundColor: "#0d65d9",
    textColor: "#ffffff",
    hoverTextColor: "#ffffff",
    borderColor: "transparent",
    borderRadius: "10px",
    fontSize: "1rem", // 16px
    fontWeight: "600",
    paddingX: null,
    paddingY: null,
    width: "auto",
    height: null,
    icon: "arrow-right",
    showIcon: true,
    iconPlacement: "right",
  },

  // Secondary Call-To-Action Button
  secondaryButton: {
    visible: true,
    label: "View Our Work",
    mobileLabel: "View Work",
    href: "#work",
    target: "_self", // '_self' or '_blank'
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    hoverBackgroundColor: "#ffffff",
    textColor: "#111827", // Dark slate
    hoverTextColor: "#1877F2",
    borderColor: "#cbd5e1", // Subtle border
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "600",
    paddingX: null,
    paddingY: null,
    width: "auto",
    height: null,
    icon: "play-circle",
    showIcon: true,
    iconPlacement: "left",
  },

  // Mobile layout behavior:
  // When viewport is too small to display buttons overlaid without obscuring photo details,
  // move them cleanly immediately below the hero image.
  mobileBehavior: "below-image", // 'below-image' | 'overlay'
};

export default heroConfig;
