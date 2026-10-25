"use client";

import React, { useEffect, useState, useRef } from "react";

function parseStatValue(value) {
  if (typeof value === "number") {
    return { prefix: "", target: value, suffix: "", isNumeric: true };
  }
  const str = String(value ?? "").trim();
  const match = str.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: str, isNumeric: false };
  }
  return {
    prefix: match[1] || "",
    target: parseFloat(match[2]),
    suffix: match[3] || "",
    isNumeric: true,
  };
}

export default function CountUp({
  value,
  duration = 2400,
  className = "",
}) {
  const { prefix, target, suffix, isNumeric } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;

    const el = elementRef.current;
    if (!el) return;

    let animFrameId = null;

    const startCounting = () => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easeOutSine for steady, visible counting increments
        const easeProgress = Math.sin((progress * Math.PI) / 2);
        const current = target * easeProgress;

        setDisplayValue(Math.floor(current));

        if (progress < 1) {
          animFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(target);
        }
      };

      animFrameId = requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0] && entries[0].isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            observer.disconnect();
            startCounting();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
        if (animFrameId) cancelAnimationFrame(animFrameId);
      };
    } else {
      startCounting();
      return () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
      };
    }
  }, [target, duration, isNumeric]);

  if (!isNumeric) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={String(value)}
      suppressHydrationWarning
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
