"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LogOut,
  Loader2,
  ShieldCheck,
  FolderKanban,
  TrendingUp,
  ExternalLink,
  Users,
} from "lucide-react";

const navItems = [
  { label: "Project", href: "/admin", icon: FolderKanban },
  { label: "Split", href: "/admin/split", icon: Users },
  { label: "Analysis", href: "/admin/analysis", icon: TrendingUp },
];

export default function AdminLayout({
  title,
  subtitle,
  onLogout,
  loggingOut,
  children,
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 flex antialiased text-slate-900">
      {/* Sidebar (md+) */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 bg-slate-900 text-slate-300 fixed inset-y-0 left-0 z-40">
        <div className="flex items-center gap-2.5 px-5 h-16 border-b border-white/10">
          <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Jovix Admin</p>
            <p className="text-[11px] text-slate-400">Project console</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Admin navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/10 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View website
          </Link>
          <button
            type="button"
            onClick={onLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-red-300 hover:bg-red-500/10 transition-colors disabled:opacity-60"
          >
            {loggingOut ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <LogOut className="w-4 h-4" />
            )}
            Sign out
          </button>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex-1 flex flex-col min-w-0 md:pl-60">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="md:hidden flex items-center gap-2 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold">Jovix Admin</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg font-semibold tracking-tight text-slate-900 truncate">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xs text-slate-500 truncate hidden sm:block">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <nav
                className="md:hidden flex items-center gap-1"
                aria-label="Admin navigation"
              >
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                        active
                          ? "bg-slate-100 text-slate-900"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <button
                type="button"
                onClick={onLogout}
                disabled={loggingOut}
                className="md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors disabled:opacity-60"
              >
                {loggingOut ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <LogOut className="w-3.5 h-3.5" />
                )}
                Sign out
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
