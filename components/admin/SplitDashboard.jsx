"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Wallet,
  Plus,
  Trash2,
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

const fieldClass =
  "w-full h-10 px-3.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition";

export default function SplitDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  const [projectId, setProjectId] = useState("");
  const [personId, setPersonId] = useState("jitu");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [splitType, setSplitType] = useState("person");
  const [linkProjectToPerson, setLinkProjectToPerson] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const [resProjects, resPersons] = await Promise.all([
          fetch("/api/admin/projects"),
          fetch("/api/admin/persons"),
        ]);
        if (!active) return;
        if (resProjects.status === 401 || resPersons.status === 401) {
          router.replace("/admin/login");
          return;
        }
        if (!resProjects.ok || !resPersons.ok) {
          throw new Error("Failed to load data");
        }
        const projectsData = await resProjects.json();
        const personsData = await resPersons.json();
        setProjects(projectsData.projects || []);
        setPersons(personsData.persons || []);
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
  const allSplits = projects
    .flatMap((p) =>
      (p.splits || []).map((s) => ({
        ...s,
        projectId: p.id,
        projectName: p.name,
      }))
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const splitTotal = allSplits.reduce((sum, s) => sum + s.amount, 0);

  const personalSplits = allSplits.filter((s) => s.personal);
  const personalTotal = personalSplits.reduce((sum, s) => sum + s.amount, 0);

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

  const linkedCount = persons.find((p) => p.id === personId)?.projects.length ?? 0;

  async function handleAddSplit(event) {
    event.preventDefault();
    setError("");
    setNotice("");

    if (!projectId) {
      setError("Select a project.");
      return;
    }
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0) {
      setError("Enter a valid amount.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`/api/admin/projects/${projectId}/splits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personId: splitType === "cost" ? null : personId,
          amount: amt,
          reason: reason.trim(),
          personal: splitType === "cost",
        }),
      });

      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Failed to add split.");
        return;
      }

      setProjects((prev) =>
        prev.map((p) => (p.id === projectId ? data.project : p))
      );
      setAmount("");
      setReason("");

      // Optionally link the selected project to the selected person.
      let linked = false;
      if (linkProjectToPerson && splitType === "person") {
        try {
          const linkRes = await fetch("/api/admin/persons", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ personId, addProject: projectId }),
          });
          if (linkRes.status === 401) {
            router.replace("/admin/login");
            return;
          }
          const linkData = await linkRes.json().catch(() => ({}));
          if (linkRes.ok && linkData.persons) {
            setPersons(linkData.persons);
            linked = true;
          }
        } catch {
          // Project assignment is an enhancement; ignore errors here.
        }
      }

      if (splitType === "cost") {
        setNotice("Added to project cost.");
      } else {
        const personName = adminPeople.find((p) => p.id === personId)?.name || "";
        setNotice(
          linked
            ? `Split added · project linked to ${personName}`
            : "Split added."
        );
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeleteSplit(pid, sid) {
    setDeletingId(sid);
    try {
      const res = await fetch(`/api/admin/projects/${pid}/splits/${sid}`, {
        method: "DELETE",
      });

      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        setError("Failed to delete split.");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data.project) {
        setProjects((prev) =>
          prev.map((p) => (p.id === pid ? data.project : p))
        );
      }
    } catch {
      setError("Network error while deleting.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <AdminLayout
      title="Split"
      subtitle="Manage how project money is split between Jitu and Jay."
      onLogout={handleLogout}
      loggingOut={loggingOut}
    >
      {fetchError && (
        <div className="mb-6 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {fetchError}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-6 h-6 animate-spin text-slate-300" />
        </div>
      ) : (
        <>
          {/* KPI cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {[
              {
                label: "Total split",
                value: inr.format(splitTotal),
                icon: Wallet,
              },
              {
                label: "Jitu total",
                value: inr.format(byPerson[0].amount),
                icon: Users,
              },
              {
                label: "Jay total",
                value: inr.format(byPerson[1].amount),
                icon: Users,
              },
              {
                label: "Project cost",
                value: inr.format(personalTotal),
                icon: Users,
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

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
            <section className="bg-white rounded-xl border border-slate-200 p-5">
              <h2 className="text-sm font-semibold text-slate-900">Add split</h2>
              <div className="h-px bg-slate-100 my-4" />

              {projects.length === 0 ? (
                <p className="text-xs text-slate-400">
                  No projects yet. Create a project first.
                </p>
              ) : (
                <form onSubmit={handleAddSplit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="split-project"
                      className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Project
                    </label>
                    <select
                      id="split-project"
                      value={projectId}
                      onChange={(e) => setProjectId(e.target.value)}
                      className={fieldClass}
                    >
                      <option value="">Select a project…</option>
                      {projects.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Type selector */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSplitType("person")}
                      className={`h-9 rounded-lg text-xs font-semibold transition-colors ${
                        splitType === "person"
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      To person
                    </button>
                    <button
                      type="button"
                      onClick={() => setSplitType("cost")}
                      className={`h-9 rounded-lg text-xs font-semibold transition-colors ${
                        splitType === "cost"
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      Project cost
                    </button>
                  </div>

                  {splitType === "person" && (
                    <>
                      <div>
                        <label
                          htmlFor="split-person"
                      className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Person
                    </label>
                    <select
                      id="split-person"
                      value={personId}
                      onChange={(e) => setPersonId(e.target.value)}
                      className={fieldClass}
                    >
                      {adminPeople.map((person) => (
                        <option key={person.id} value={person.id}>
                          {person.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <p className="text-[11px] text-slate-400 -mt-2 mb-2">
                    Linked projects: {linkedCount}
                  </p>

                  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={linkProjectToPerson}
                      onChange={(e) => setLinkProjectToPerson(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-blue-500"
                    />
                    Add project to person
                  </label>
                    </>
                  )}

                  <div>
                    <label
                      htmlFor="split-amount"
                      className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Amount (₹)
                    </label>
                    <input
                      id="split-amount"
                      type="number"
                      min="0"
                      step="0.01"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className={`${fieldClass} tabular-nums`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="split-reason"
                      className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5"
                    >
                      Reason (optional)
                    </label>
                    <input
                      id="split-reason"
                      type="text"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="e.g. domain purchase, hosting, payment"
                      className={fieldClass}
                    />
                  </div>

                  {error && (
                    <div className="px-3.5 py-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {error}
                    </div>
                  )}

                  {notice && (
                    <div className="px-3.5 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                      {notice}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                    {submitting ? "Adding…" : "Add split"}
                  </button>
                </form>
              )}
            </section>
            <section className="bg-white rounded-xl border border-slate-200">
              <div className="flex items-center justify-between px-5 pt-5 pb-4">
                <h2 className="text-sm font-semibold text-slate-900">
                  All splits
                </h2>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-2.5 py-0.5">
                  {allSplits.length}
                </span>
              </div>

              {allSplits.length === 0 ? (
                <div className="flex flex-col items-center py-16 px-6 text-center">
                  <Users className="w-8 h-8 text-slate-300 mb-3" />
                  <p className="text-sm font-medium text-slate-600">
                    No splits recorded
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Add your first split using the form.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[560px]">
                    <thead>
                      <tr className="text-[11px] uppercase tracking-wider text-slate-400 border-y border-slate-100">
                        <th className="px-5 py-2.5 font-medium">Project</th>
                        <th className="px-3 py-2.5 font-medium">Person</th>
                        <th className="px-3 py-2.5 font-medium text-right">Amount</th>
                        <th className="px-3 py-2.5 font-medium hidden md:table-cell">
                          Date
                        </th>
                        <th className="px-5 py-2.5 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {allSplits.map((split) => (
                        <tr
                          key={split.id}
                          className="hover:bg-slate-50/70 transition-colors"
                        >
                          <td className="px-5 py-3.5">
                            <p className="text-sm font-medium text-slate-800">
                              {split.projectName}
                            </p>
                            {split.reason && (
                              <p className="text-[11px] text-slate-400 mt-0.5">
                                {split.reason}
                              </p>
                            )}
                          </td>
                          <td className="px-3 py-3.5">
                            {split.personName ? (
                              <span className="inline-flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[10px] font-bold uppercase">
                                  {split.personName.slice(0, 1)}
                                </span>
                                <span className="text-sm text-slate-700">
                                  {split.personName}
                                </span>
                              </span>
                            ) : (
                              <span className="text-sm text-slate-500">
                                — Cost entry
                              </span>
                            )}
                            {split.personal && (
                              <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-semibold uppercase tracking-wide border border-amber-200">
                                Project cost
                              </span>
                            )}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums font-semibold text-slate-900 text-right whitespace-nowrap">
                            {inr.format(split.amount)}
                          </td>
                          <td className="px-3 py-3.5 text-xs text-slate-500 hidden md:table-cell whitespace-nowrap">
                            {formatDate(split.createdAt)}
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <button
                              type="button"
                              onClick={() => handleDeleteSplit(split.projectId, split.id)}
                              disabled={deletingId === split.id}
                              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-300 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                              aria-label={`Remove ${split.personName} split`}
                              title="Remove split"
                            >
                              {deletingId === split.id ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Trash2 className="w-4 h-4" />
                              )}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
