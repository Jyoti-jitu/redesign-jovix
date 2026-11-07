"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react";

const inputClass =
  "w-full h-10 px-3.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!username.trim()) {
      setError("Enter your admin email.");
      return;
    }
    if (!password) {
      setError("Enter your password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
        return;
      }

      const data = await res.json().catch(() => ({}));
      setError(data.error || "Login failed. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-12 antialiased text-slate-900">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <p className="text-base font-semibold tracking-tight">Jovix Admin</p>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Project console
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <h1 className="text-lg font-semibold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500 mt-1 mb-6">
            Sign in to manage your projects.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="admin-username"
                className="block text-xs font-medium text-slate-600 mb-1.5"
              >
                Email
              </label>
              <input
                id="admin-username"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin@example.com"
                autoComplete="username"
                autoFocus
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-medium text-slate-600 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className={`${inputClass} pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="px-3.5 py-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : null}
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
