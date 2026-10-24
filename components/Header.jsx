"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isServicesPage = pathname === "/services";

  // Monitor scroll for subtle shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);

    // If clicking Contact on any page
    if (href === "#contact") {
      e.preventDefault();
      const el = document.querySelector("#contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // If on homepage and clicking Home
    if (pathname === "/" && (href === "/" || href === "#hero")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If on homepage and clicking About
    if (pathname === "/" && href === "/#about") {
      e.preventDefault();
      const el = document.querySelector("#about") || document.querySelector("#why-jovix");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // If on /services and clicking Services
    if (isServicesPage && href === "/services") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If on /demo-projects and clicking Demo Projects
    if (pathname === "/demo-projects" && href === "/demo-projects") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If on /announcements and clicking Announcements
    if (pathname === "/announcements" && href === "/announcements") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Demos", href: "/demo-projects" },
    { name: "Announcements", href: "/announcements" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 border-b ${
        scrolled ? "border-slate-200 shadow-sm" : "border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20">
          {/* Jovix Brand Logo & Wordmark */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
              aria-label="Jovix Home"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-200/80 bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/images/jovix-symbol.png"
                  alt="Jovix Logo"
                  width={40}
                  height={40}
                  priority
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
                    JOVIX
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                </div>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold hidden lg:block mt-0.5">
                  Technology for a Brighter Tomorrow
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-1.5"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                (item.href === "/services" && isServicesPage) ||
                (item.href === "/demo-projects" && (pathname === "/demo-projects" || pathname.startsWith("/demo-projects/"))) ||
                (item.href === "/announcements" && pathname === "/announcements") ||
                (item.href === "/" && pathname === "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? "text-blue-600 bg-blue-50/70"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => {
                const el = document.querySelector("#contact");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2.5 pb-5 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive =
                (item.href === "/services" && isServicesPage) ||
                (item.href === "/demo-projects" && (pathname === "/demo-projects" || pathname.startsWith("/demo-projects/"))) ||
                (item.href === "/announcements" && pathname === "/announcements") ||
                (item.href === "/" && pathname === "/");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-bold"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2.5 border-t border-slate-100">
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  const el = document.querySelector("#contact");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                <span>Get a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
