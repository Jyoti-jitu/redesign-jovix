"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FolderKanban,
  IndianRupee,
  Wallet,
  TrendingUp,
  Loader2,
} from "lucide-react";
import AdminLayout from "./AdminLayout";
import { adminPeople } from "@/lib/team";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

function monthLabel(date) {
  return date.toLocaleDateString("en-IN", { month: "short" });
}

export default function AnalysisDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const res = await fetch("/api/admin/projects");
        if (!active) return;
        if (res.status === 401) {
          router.replace("/admin/login");
          return;
        }
        if (!res.ok) throw new Error("Failed to load projects");
        const data = await res.json();
        setProjects(data.projects || []);
        setFetchError("");
      } catch {
        if (active) {
          setFetchError("Could not load data. Refresh the page to retry.");
        }
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch {
      // Ignore network errors; still navigate to login.
    } finally {
      router.replace("/admin/login");
    }
  }

  // ---- Computations ----
  const totalValue = projects.reduce((sum, p) => sum + p.totalPrice, 0);
  const totalAdvance = projects.reduce((sum, p) => sum + p.advancePaid, 0);
  const outstanding = totalValue - totalAdvance;

  const allSplits = projects.flatMap((p) =>
    (p.splits || []).map((s) => ({ ...s, projectName: p.name }))
  );
  const splitTotal = allSplits.reduce((sum, s) => sum + s.amount, 0);
  const splitCoverage =
    totalAdvance > 0 ? Math.round((splitTotal / totalAdvance) * 100) : 0;

  const byPerson = adminPeople.map((person) => {
    const items = allSplits.filter(
      (s) => s.personId === person.id && !s.personal
    );
    return {
      ...person,
      amount: items.reduce((sum, s) => sum + s.amount, 0),
      count: items.length,
    };
  });
  const maxPersonAmount = Math.max(1, ...byPerson.map((p) => p.amount));

  const topProjects = [...projects]
    .sort((a, b) => b.totalPrice - a.totalPrice)
    .slice(0, 5);
  const maxTopValue = Math.max(1, ...topProjects.map((p) => p.totalPrice));

  // Last 6 months activity
  const now = new Date();
  const months = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const entries = projects.filter((p) => {
      const c = new Date(p.createdAt);
      return `${c.getFullYear()}-${c.getMonth()}` === key;
    });
    return {
      key,
      label: monthLabel(d),
      count: entries.length,
      value: entries.reduce((sum, p) => sum + p.totalPrice, 0),
    };
  });
  const maxMonthCount = Math.max(1, ...months.map((m) => m.count));

  return (
    <AdminLayout
      title="Analysis"
      subtitle="Insights across all your projects."
      onLogout={handleLogout}
      loggingOut={loggingOut}
    >
        <div className="mb-6">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">
            Analysis
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Insights across all your projects.
          </p>
        </div>

        {fetchError && (
          <div className="mb-4 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
            {fetchError}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-6 h-6 animate-spin text-slate-300" />
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 flex flex-col items-center py-20 px-6 text-center">
            <FolderKanban className="w-8 h-8 text-slate-300 mb-3" />
            <p className="text-sm font-medium text-slate-600">No data yet</p>
            <p className="text-xs text-slate-400 mt-1">
              Add projects first to see analysis.
            </p>
          </div>
        ) : (
          <>
            {/* KPI cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {[
                {
                  label: "Projects",
                  value: String(projects.length),
                  icon: FolderKanban,
                },
                {
                  label: "Total value",
                  value: inr.format(totalValue),
                  icon: IndianRupee,
                },
                {
                  label: "Advance received",
                  value: inr.format(totalAdvance),
                  icon: Wallet,
                },
                {
                  label: "Outstanding",
                  value: inr.format(outstanding),
                  icon: TrendingUp,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl border border-slate-200 px-4 py-3.5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </p>
                    <stat.icon className="w-4 h-4 text-slate-300" />
                  </div>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900 truncate">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Split overview strip */}
            <div className="bg-white rounded-xl border border-slate-200 px-4 py-3.5 mb-6 flex flex-wrap items-center gap-x-8 gap-y-2">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Money split
                </p>
                <p className="mt-0.5 text-lg font-semibold tabular-nums text-slate-900">
                  {inr.format(splitTotal)}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Split coverage of advance
                </p>
                <p className="mt-0.5 text-lg font-semibold tabular-nums text-slate-900">
                  {splitCoverage}%
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  Split entries
                </p>
                <p className="mt-0.5 text-lg font-semibold tabular-nums text-slate-900">
                  {allSplits.length}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <section className="bg-white rounded-xl border border-slate-200 p-5">
                <h2 className="text-sm font-semibold text-slate-900">
                  Split by person
                </h2>
                <div className="h-px bg-slate-100 my-4" />
                <div className="space-y-4">
                  {byPerson.map((person) => (
                    <div key={person.id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-800">
                          {person.name}
                        </span>
                        <span className="text-sm tabular-nums font-semibold text-slate-900">
                          {inr.format(person.amount)}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-slate-900 transition-all"
                          style={{
                            width: `${Math.round(
                              (person.amount / maxPersonAmount) * 100
                            )}%`,
                          }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {person.count} {person.count === 1 ? "entry" : "entries"} ·{" "}
                        {splitTotal > 0
                          ? Math.round((person.amount / splitTotal) * 100)
                          : 0}
                        % of split
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-xl border border-slate-200 p-5">
                <h2 className="text-sm font-semibold text-slate-900">
                  Top projects by value
                </h2>
                <div className="h-px bg-slate-100 my-4" />
                <div className="space-y-3.5">
                  {topProjects.map((project) => (
                    <div key={project.id}>
                      <div className="flex items-center justify-between gap-3 mb-1.5">
                        <span className="text-sm font-medium text-slate-800 truncate">
                          {project.name}
                        </span>
                        <span className="text-sm tabular-nums font-semibold text-slate-900">
                          {inr.format(project.totalPrice)}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue-600 transition-all"
                          style={{
                            width: `${Math.round(
                              (project.totalPrice / maxTopValue) * 100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            {/* Monthly activity */}
            <section className="bg-white rounded-xl border border-slate-200 p-5 mb-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Project activity — last 6 months
              </h2>
              <div className="h-px bg-slate-100 my-4" />
              <div className="flex items-end gap-3 h-36">
                {months.map((month) => (
                  <div
                    key={month.key}
                    className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                  >
                    <div className="flex-1 w-full flex items-end justify-center">
                      <div
                        className="w-full max-w-[42px] rounded-t-md bg-slate-900"
                        style={{
                          height: `${Math.max(
                            8,
                            Math.round((month.count / maxMonthCount) * 100)
                          )}%`,
                        }}
                        title={`${month.count} project${
                          month.count === 1 ? "" : "s"
                        } in ${month.label}`}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-xs tabular-nums font-semibold text-slate-900">
                        {month.count}
                      </p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wide">
                        {month.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Full breakdown table */}
            <section className="bg-white rounded-xl border border-slate-200">
              <div className="px-5 pt-5 pb-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  All projects breakdown
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wider text-slate-400 border-y border-slate-100">
                      <th className="px-5 py-2.5 font-medium">Project</th>
                      <th className="px-3 py-2.5 font-medium text-right">Total</th>
                      <th className="px-3 py-2.5 font-medium text-right">Advance</th>
                      <th className="px-3 py-2.5 font-medium text-right">Balance</th>
                      <th className="px-3 py-2.5 font-medium text-right">Split</th>
                      <th className="px-3 py-2.5 font-medium text-right">Cost</th>
                      <th className="px-5 py-2.5 font-medium text-right">Split share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {projects.map((project) => {
                      const split = (project.splits || []).reduce(
                        (sum, s) => sum + s.amount,
                        0
                      );
                      const share =
                        splitTotal > 0 ? Math.round((split / splitTotal) * 100) : 0;
                      const costTotal = (project.splits || [])
                        .filter((s) => s.personal)
                        .reduce((sum, s) => sum + s.amount, 0);
                      return (
                        <tr
                          key={project.id}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="px-5 py-3.5">
                            <p className="text-sm font-medium text-slate-800">
                              {project.name}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {formatDate(project.createdAt)}
                            </p>
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-slate-600 text-right whitespace-nowrap">
                            {inr.format(project.totalPrice)}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-emerald-600 font-medium text-right whitespace-nowrap">
                            {inr.format(project.advancePaid)}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-slate-900 font-semibold text-right whitespace-nowrap">
                            {inr.format(project.totalPrice - project.advancePaid)}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-slate-900 text-right whitespace-nowrap">
                            {inr.format(split)}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-amber-700 font-medium text-right whitespace-nowrap">
                            {inr.format(costTotal)}
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <span className="inline-flex items-center gap-1.5 justify-end">
                              <span className="text-xs tabular-nums font-semibold text-slate-500">
                                {share}%
                              </span>
                              <span className="w-14 h-1.5 rounded-full bg-slate-100 overflow-hidden inline-block">
                                <span
                                  className="block h-full rounded-full bg-slate-400"
                                  style={{ width: `${share}%` }}
                                />
                              </span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </AdminLayout>
  );
}
