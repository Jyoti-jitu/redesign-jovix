import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { kv } from "@vercel/kv";

const DATA_DIR = path.join(process.cwd(), "data");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");

// Use Vercel KV when deployed (env vars present); otherwise local JSON files.
const useKv = Boolean(
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
);

async function readProjects() {
  if (useKv) {
    try {
      const data = await kv.get("jovix:projects");
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error("[projectsStore] KV read failed, falling back to file storage:", error.message);
      // Fall back to file storage if KV fails
    }
  }
  try {
    const raw = await fs.readFile(PROJECTS_FILE, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function writeProjects(projects) {
  if (useKv) {
    try {
      await kv.set("jovix:projects", projects);
      return;
    } catch (error) {
      console.error("[projectsStore] KV write failed, falling back to file storage:", error.message);
      // Fall back to file storage if KV fails
    }
  }
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2), "utf8");
}

/** Read all projects (newest first). Returns [] when none exist yet. */
export async function listProjects() {
  return readProjects();
}

/** Validate and normalize a project payload. Returns {ok, data|error}. */
export function validateProjectInput(input) {
  const name = typeof input?.name === "string" ? input.name.trim() : "";
  if (!name) return { ok: false, error: "Project name is required." };
  if (name.length > 200) {
    return { ok: false, error: "Project name must be 200 characters or fewer." };
  }

  const totalPrice = Number(input?.totalPrice);
  const advancePaid = Number(input?.advancePaid);

  if (!Number.isFinite(totalPrice) || totalPrice < 0) {
    return { ok: false, error: "Total price must be a valid non-negative number." };
  }
  if (!Number.isFinite(advancePaid) || advancePaid < 0) {
    return { ok: false, error: "Advance paid must be a valid non-negative number." };
  }
  if (advancePaid > totalPrice) {
    return { ok: false, error: "Advance paid cannot exceed the total price." };
  }

  return {
    ok: true,
    data: {
      name,
      totalPrice: Math.round(totalPrice * 100) / 100,
      advancePaid: Math.round(advancePaid * 100) / 100,
    },
  };
}

// Serialize writes to avoid lost updates when requests race.
let writeQueue = Promise.resolve();

/** Add a project and persist it. */
export async function addProject(input) {
  const task = writeQueue.then(async () => {
    const projects = await listProjects();
    const project = {
      id: crypto.randomUUID(),
      name: input.name,
      totalPrice: input.totalPrice,
      advancePaid: input.advancePaid,
      createdAt: new Date().toISOString(),
    };
    await writeProjects([project, ...projects]);
    return project;
  });
  writeQueue = task.catch(() => {});
  return task;
}

/** Update a project by id. Returns the updated project or null if not found. */
export async function updateProject(id, input) {
  const task = writeQueue.then(async () => {
    const projects = await listProjects();
    const index = projects.findIndex((p) => p.id === id);
    if (index === -1) return null;

    const updated = {
      ...projects[index],
      name: input.name,
      totalPrice: input.totalPrice,
      advancePaid: input.advancePaid,
      updatedAt: new Date().toISOString(),
    };
    projects[index] = updated;
    await writeProjects(projects);
    return updated;
  });
  writeQueue = task.catch(() => {});
  return task;
}

/** Remove a project by id. Returns true if something was deleted. */
export async function deleteProject(id) {
  const task = writeQueue.then(async () => {
    const projects = await listProjects();
    const next = projects.filter((p) => p.id !== id);
    if (next.length === projects.length) return false;
    await writeProjects(next);
    return true;
  });
  writeQueue = task.catch(() => {});
  return task;
}

/** Add a money-split entry to a project. Returns the updated project or null. */
export async function addProjectSplit(
  projectId,
  { personId, personName, amount, reason, personal }
) {
  const task = writeQueue.then(async () => {
    const projects = await listProjects();
    const index = projects.findIndex((p) => p.id === projectId);
    if (index === -1) return null;

    const project = projects[index];
    const split = {
      id: crypto.randomUUID(),
      personId,
      personName,
      amount: Math.round(amount * 100) / 100,
      reason:
        typeof reason === "string" && reason.trim() ? reason.trim() : null,
      personal: Boolean(personal),
      createdAt: new Date().toISOString(),
    };

    const updated = { ...project, splits: [...(project.splits || []), split] };
    projects[index] = updated;
    await writeProjects(projects);
    return updated;
  });
  writeQueue = task.catch(() => {});
  return task;
}

/** Remove a money-split entry. Returns the updated project or null. */
export async function deleteProjectSplit(projectId, splitId) {
  const task = writeQueue.then(async () => {
    const projects = await listProjects();
    const index = projects.findIndex((p) => p.id === projectId);
    if (index === -1) return null;

    const project = projects[index];
    const splits = (project.splits || []).filter((s) => s.id !== splitId);
    if (splits.length === (project.splits || []).length) return null;

    const updated = { ...project, splits };
    projects[index] = updated;
    await writeProjects(projects);
    return updated;
  });
  writeQueue = task.catch(() => {});
  return task;
}
