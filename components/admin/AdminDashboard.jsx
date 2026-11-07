"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Pencil,
  Trash2,
  Users,
  FolderKanban,
  Loader2,
  CheckCircle2,
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

const inputClass =
  "w-full h-10 px-3.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition";

export default function AdminDashboard() {
  const router = useRouter();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [name, setName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [advancePaid, setAdvancePaid] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState("");

  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [expandedSplitId, setExpandedSplitId] = useState(null);
  const [splitPersonId, setSplitPersonId] = useState("jitu");
  const [splitAmount, setSplitAmount] = useState("");
  const [splitReason, setSplitReason] = useState("");
  const [splitPersonal, setSplitPersonal] = useState(false);
  const [splitSubmitting, setSplitSubmitting] = useState(false);
  const [splitError, setSplitError] = useState("");
  const [splitDeletingId, setSplitDeletingId] = useState(null);
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
          setFetchError("Could not load projects. Refresh the page to retry.");
        }
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [router]);

  async function handleSubmitProject(event) {
    event.preventDefault();
    setFormError("");
    setSuccess("");

    if (!name.trim()) {
      setFormError("Project name is required.");
      return;
    }
    const total = Number(totalPrice);
    const adv = Number(advancePaid);
    if (!Number.isFinite(total) || total < 0) {
      setFormError("Enter a valid total price.");
      return;
    }
    if (!Number.isFinite(adv) || adv < 0) {
      setFormError("Enter a valid advance amount.");
      return;
    }
    if (adv > total) {
      setFormError("Advance paid cannot exceed the total price.");
      return;
    }

    const isEditing = Boolean(editingId);
    const url = isEditing
      ? `/api/admin/projects/${editingId}`
      : "/api/admin/projects";
    const method = isEditing ? "PATCH" : "POST";

    setSubmitting(true);
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          totalPrice: total,
          advancePaid: adv,
        }),
      });

      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFormError(
          data.error || (isEditing ? "Failed to save changes." : "Failed to add project.")
        );
        return;
      }

      if (isEditing) {
        setProjects((prev) =>
          prev.map((p) => (p.id === editingId ? data.project : p))
        );
        setSuccess(`“${data.project.name}” updated.`);
      } else {
        setProjects((prev) => [data.project, ...prev]);
        setSuccess(`“${data.project.name}” added.`);
      }

      setEditingId(null);
      setName("");
      setTotalPrice("");
      setAdvancePaid("");
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleStartEdit(project) {
    setFormError("");
    setSuccess("");
    setEditingId(project.id);
    setName(project.name);
    setTotalPrice(String(project.totalPrice));
    setAdvancePaid(String(project.advancePaid));
  }

  function handleCancelEdit() {
    setEditingId(null);
    setFormError("");
    setName("");
    setTotalPrice("");
    setAdvancePaid("");
  }

  async function handleAddSplit(projectId) {
    setSplitError("");

    const amount = Number(splitAmount);
    if (!Number.isFinite(amount) || amount <= 0) {
      setSplitError("Enter a valid amount.");
      return;
    }

    setSplitSubmitting(true);
    try {
      const res = await fetch(`/api/admin/projects/${projectId}/splits`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personId: splitPersonId,
          amount,
          reason: splitReason.trim(),
          personal: splitPersonal,
        }),
      });

      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSplitError(data.error || "Failed to add split.");
        return;
      }

      setProjects((prev) =>
        prev.map((p) => (p.id === projectId ? data.project : p))
      );
      setSplitAmount("");
      setSplitReason("");
      setSplitPersonal(false);
    } catch {
      setSplitError("Network error. Please try again.");
    } finally {
      setSplitSubmitting(false);
    }
  }

  async function handleDeleteSplit(projectId, splitId) {
    setSplitDeletingId(splitId);
    try {
      const res = await fetch(
        `/api/admin/projects/${projectId}/splits/${splitId}`,
        { method: "DELETE" }
      );

      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        setSplitError("Failed to delete split.");
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data.project) {
        setProjects((prev) =>
          prev.map((p) => (p.id === projectId ? data.project : p))
        );
      }
    } catch {
      setSplitError("Network error while deleting.");
    } finally {
      setSplitDeletingId(null);
    }
  }

  async function handleDelete(id) {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: "DELETE",
      });
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        setFetchError("Failed to delete the project.");
        return;
      }
      setProjects((prev) => prev.filter((p) => p.id !== id));
      setConfirmDeleteId(null);
    } catch {
      setFetchError("Network error while deleting.");
    } finally {
      setDeletingId(null);
    }
  }

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

  const totalValue = projects.reduce((sum, p) => sum + p.totalPrice, 0);
  const totalAdvance = projects.reduce((sum, p) => sum + p.advancePaid, 0);
  const outstanding = totalValue - totalAdvance;

  return (
    <AdminLayout
      title="Projects"
      subtitle="Track project value and advance payments."
      onLogout={handleLogout}
      loggingOut={loggingOut}
    >
        {/* Page heading */}
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Projects
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Track project value and advance payments.
            </p>
          </div>
          {success && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {success}
            </div>
          )}
        </div>

        {/* Success banner (mobile) */}
        {success && (
          <div className="sm:hidden mb-4 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            {success}
          </div>
        )}
        {fetchError && (
          <div className="mb-4 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
            {fetchError}
          </div>
        )}

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Projects", value: String(projects.length) },
            { label: "Total value", value: inr.format(totalValue) },
            { label: "Advance received", value: inr.format(totalAdvance) },
            { label: "Outstanding", value: inr.format(outstanding) },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-slate-200 px-4 py-3.5"
            >
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900 truncate">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          <section className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                {editingId ? "Edit project" : "Add project"}
              </h2>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  disabled={submitting}
                  className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
            <div className="h-px bg-slate-100 my-4" />

            <form onSubmit={handleSubmitProject} className="space-y-4">
              <div>
                <label
                  htmlFor="project-name"
                  className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Project name
                </label>
                <input
                  id="project-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. MedixCare ERP"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="total-price"
                  className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Total price (₹)
                </label>
                <input
                  id="total-price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={totalPrice}
                  onChange={(e) => setTotalPrice(e.target.value)}
                  placeholder="0.00"
                  className={`${inputClass} tabular-nums`}
                />
              </div>

              <div>
                <label
                  htmlFor="advance-paid"
                  className="block text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  Advance paid (₹)
                </label>
                <input
                  id="advance-paid"
                  type="number"
                  min="0"
                  step="0.01"
                  value={advancePaid}
                  onChange={(e) => setAdvancePaid(e.target.value)}
                  placeholder="0.00"
                  className={`${inputClass} tabular-nums`}
                />
              </div>

              {formError && (
                <div className="px-3.5 py-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {formError}
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
                {submitting
                  ? editingId
                    ? "Saving…"
                    : "Adding…"
                  : editingId
                    ? "Save changes"
                    : "Add project"}
              </button>
            </form>
          </section>
          <section className="bg-white rounded-xl border border-slate-200">
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <h2 className="text-sm font-semibold text-slate-900">All projects</h2>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-2.5 py-0.5">
                {projects.length}
              </span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-5 h-5 animate-spin text-slate-300" />
              </div>
            ) : projects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <FolderKanban className="w-8 h-8 text-slate-300 mb-3" />
                <p className="text-sm font-medium text-slate-600">No projects yet</p>
                <p className="text-xs text-slate-400 mt-1">
                  Add your first project to get started.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wider text-slate-400 border-y border-slate-100">
                      <th className="px-5 py-2.5 font-medium">Project</th>
                      <th className="px-3 py-2.5 font-medium text-right">Total price</th>
                      <th className="px-3 py-2.5 font-medium text-right">Advance paid</th>
                      <th className="px-3 py-2.5 font-medium text-right">Balance due</th>
                      <th className="px-3 py-2.5 font-medium text-right">Project cost</th>
                      <th className="px-5 py-2.5 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {projects.map((project) => {
                      const balance = project.totalPrice - project.advancePaid;
                      const deleting = deletingId === project.id;
                      const confirming = confirmDeleteId === project.id;
                      const costTotal = (project.splits || [])
                        .filter((s) => s.personal)
                        .reduce((sum, s) => sum + s.amount, 0);
                      const splitTotal = (project.splits || []).reduce(
                        (sum, s) => sum + s.amount,
                        0
                      );
                      return (
                        <React.Fragment key={project.id}>
                          <tr
                            className={`group transition-colors ${
                            editingId === project.id
                              ? "bg-blue-50/50"
                              : "hover:bg-slate-50/70"
                          }`}
                        >
                          <td className="px-5 py-3.5">
                            <p className="text-sm font-medium text-slate-800">
                              {project.name}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {project.updatedAt
                                ? `Updated ${formatDate(project.updatedAt)}`
                                : `Added ${formatDate(project.createdAt)}`}
                            </p>
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-slate-600 text-right whitespace-nowrap">
                            {inr.format(project.totalPrice)}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-emerald-600 font-medium text-right whitespace-nowrap">
                            {inr.format(project.advancePaid)}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-slate-900 font-semibold text-right whitespace-nowrap">
                            {inr.format(balance)}
                          </td>
                          <td className="px-3 py-3.5 text-sm tabular-nums text-amber-700 font-medium text-right whitespace-nowrap">
                            {inr.format(costTotal)}
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            {confirming ? (
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleDelete(project.id)}
                                  disabled={deleting}
                                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-600 text-white text-[11px] font-medium hover:bg-red-500 transition-colors disabled:opacity-60"
                                >
                                  {deleting ? (
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                  ) : (
                                    <CheckCircle2 className="w-3 h-3" />
                                  )}
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteId(null)}
                                  disabled={deleting}
                                  className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium hover:bg-slate-200 transition-colors disabled:opacity-60"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setExpandedSplitId(
                                      expandedSplitId === project.id ? null : project.id
                                    )
                                  }
                                  disabled={deleting}
                                  className={`inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all disabled:opacity-60 ${
                                    expandedSplitId === project.id
                                      ? "opacity-100 text-slate-900 bg-slate-100"
                                      : "text-slate-300 opacity-0 group-hover:opacity-100 hover:text-slate-900 hover:bg-slate-100 focus:opacity-100"
                                  }`}
                                  aria-label={`Split money for ${project.name}`}
                                  title="Split money"
                                >
                                  <Users className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleStartEdit(project)}
                                  disabled={deleting}
                                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-300 opacity-0 group-hover:opacity-100 hover:text-blue-600 hover:bg-blue-50 focus:opacity-100 transition-all disabled:opacity-60"
                                  aria-label={`Edit ${project.name}`}
                                  title="Edit project"
                                >
                                  <Pencil className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteId(project.id)}
                                  disabled={deleting}
                                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-slate-300 opacity-0 group-hover:opacity-100 hover:text-red-600 hover:bg-red-50 focus:opacity-100 transition-all disabled:opacity-60"
                                  aria-label={`Delete ${project.name}`}
                                  title="Delete project"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                            </td>
                          </tr>

                          {expandedSplitId === project.id && (
                            <tr className="bg-slate-50/60">
                              <td colSpan={5} className="px-6 pb-5 pt-1">
                                <div className="rounded-xl border border-slate-200 bg-white p-4">
                                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                                    <div>
                                      <p className="text-xs font-semibold text-slate-900">
                                        Money split
                                      </p>
                                      <p className="text-[11px] text-slate-400 mt-0.5">
                                        {splitTotal > 0
                                          ? `Total split: ${inr.format(splitTotal)}`
                                          : "No splits recorded yet"}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                    <select
                                      value={splitPersonId}
                                      onChange={(e) => setSplitPersonId(e.target.value)}
                                      className="h-9 px-3 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                    >
                                      {adminPeople.map((person) => (
                                        <option key={person.id} value={person.id}>
                                          {person.name}
                                        </option>
                                      ))}
                                    </select>
                                    <input
                                      type="number"
                                      min="0"
                                      step="0.01"
                                      value={splitAmount}
                                      onChange={(e) => setSplitAmount(e.target.value)}
                                      placeholder="Amount (₹)"
                                      className="h-9 w-full sm:w-40 px-3 rounded-lg border border-slate-300 bg-white text-sm tabular-nums text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => handleAddSplit(project.id)}
                                      disabled={splitSubmitting}
                                      className="inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                      {splitSubmitting ? (
                                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                      ) : (
                                        <Plus className="w-3.5 h-3.5" />
                                      )}
                                      Add
                                    </button>
                                  </div>

                                  <input
                                    type="text"
                                    value={splitReason}
                                    onChange={(e) => setSplitReason(e.target.value)}
                                    placeholder="Reason (optional) — e.g. domain purchase, hosting"
                                    className="h-9 w-full mb-4 px-3 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                                  />

                                  <label className="flex items-center gap-2 mb-4 text-xs text-slate-600 cursor-pointer select-none">
                                    <input
                                      type="checkbox"
                                      checked={splitPersonal}
                                      onChange={(e) => setSplitPersonal(e.target.checked)}
                                      className="w-3.5 h-3.5 rounded border-slate-300 text-slate-900 focus:ring-blue-500"
                                    />
                                    Project cost (doesn&apos;t count to the person)
                                  </label>

                                  {splitError && (
                                    <div className="mb-3 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                                      {splitError}
                                    </div>
                                  )}

                                  {splitTotal > 0 ? (
                                    <ul className="divide-y divide-slate-100 border-t border-slate-100">
                                      {(project.splits || []).map((split) => (
                                        <li
                                          key={split.id}
                                          className="flex items-center justify-between py-2.5"
                                        >
                                          <div className="flex items-center gap-2.5 min-w-0">
                                            <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-[11px] font-bold uppercase shrink-0">
                                              {split.personName.slice(0, 1)}
                                            </span>
                                            <span className="min-w-0">
                                              <span className="block text-sm font-medium text-slate-800">
                                                {split.personName}
                                              </span>
                                              {split.personal && (
                                                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[9px] font-semibold uppercase tracking-wide border border-amber-200 mt-0.5">
                                                  Project cost
                                                </span>
                                              )}
                                              {split.reason && (
                                                <span className="block text-[11px] text-slate-400 truncate">
                                                  {split.reason}
                                                </span>
                                              )}
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-3">
                                            <span className="text-sm tabular-nums font-semibold text-slate-900">
                                              {inr.format(split.amount)}
                                            </span>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                handleDeleteSplit(project.id, split.id)
                                              }
                                              disabled={splitDeletingId === split.id}
                                              className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-slate-300 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                                              aria-label={`Remove ${split.personName} split`}
                                              title="Remove split"
                                            >
                                              {splitDeletingId === split.id ? (
                                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                              ) : (
                                                <Trash2 className="w-3.5 h-3.5" />
                                              )}
                                            </button>
                                          </div>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-xs text-slate-400">
                                      No splits recorded yet. Add the first amount above.
                                    </p>
                                  )}
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-slate-400">© 2026 Jovix. Admin console.</p>
          <p className="text-xs text-slate-400">
            Data stored in{" "}
            <code className="text-slate-500">data/projects.json</code>
          </p>
        </div>
      </AdminLayout>
  );
}
