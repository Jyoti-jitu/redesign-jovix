import fs from "fs/promises";
import path from "path";
import { kv } from "@vercel/kv";
import { adminPeople } from "@/lib/team";
import { listProjects } from "@/lib/projectsStore";

const DATA_DIR = path.join(process.cwd(), "data");
const PERSONS_FILE = path.join(DATA_DIR, "persons.json");

// Use Vercel KV when deployed (env vars present); otherwise local JSON files.
const useKv = Boolean(
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
);

async function readPersons() {
  if (useKv) {
    const data = await kv.get("jovix:persons");
    return data && typeof data === "object" ? data : {};
  }
  try {
    const raw = await fs.readFile(PERSONS_FILE, "utf8");
    const data = JSON.parse(raw);
    return data && typeof data === "object" ? data : {};
  } catch (error) {
    if (error.code === "ENOENT") return {};
    throw error;
  }
}

async function writePersons(data) {
  if (useKv) {
    await kv.set("jovix:persons", data);
    return;
  }
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(PERSONS_FILE, JSON.stringify(data, null, 2), "utf8");
}

/** Merge team members with stored per-person metadata (projects, development cost). */
export async function getPersons() {
  const stored = await readPersons();
  return adminPeople.map((person) => ({
    ...person,
    developmentCost:
      typeof stored[person.id]?.developmentCost === "number"
        ? stored[person.id].developmentCost
        : 0,
    projects: Array.isArray(stored[person.id]?.projects)
      ? stored[person.id].projects
      : [],
  }));
}

// Serialize writes to avoid lost updates when requests race.
let writeQueue = Promise.resolve();

/** Update a person's development cost. Returns the fresh persons list. */
export async function updatePerson(personId, developmentCost) {
  const task = writeQueue.then(async () => {
    const stored = await readPersons();
    const next = {
      ...stored,
      [personId]: {
        ...(stored[personId] || {}),
        developmentCost: Math.round(Number(developmentCost) * 100) / 100,
      },
    };
    await writePersons(next);
    return getPersons();
  });
  writeQueue = task.catch(() => {});
  return task;
}

/** Assign a project to a person. Returns the fresh persons list or null. */
export async function addPersonProject(personId, projectId) {
  const task = writeQueue.then(async () => {
    const [stored, projects] = await Promise.all([readPersons(), listProjects()]);
    if (!projects.some((p) => p.id === projectId)) return null;

    const current = Array.isArray(stored[personId]?.projects)
      ? stored[personId].projects
      : [];
    if (current.includes(projectId)) return getPersons();

    const next = {
      ...stored,
      [personId]: {
        ...(stored[personId] || {}),
        projects: [...current, projectId],
      },
    };
    await writePersons(next);
    return getPersons();
  });
  writeQueue = task.catch(() => {});
  return task;
}

/** Remove a project from a person. Returns the fresh persons list. */
export async function removePersonProject(personId, projectId) {
  const task = writeQueue.then(async () => {
    const stored = await readPersons();
    const current = Array.isArray(stored[personId]?.projects)
      ? stored[personId].projects
      : [];
    const next = {
      ...stored,
      [personId]: {
        ...(stored[personId] || {}),
        projects: current.filter((id) => id !== projectId),
      },
    };
    await writePersons(next);
    return getPersons();
  });
  writeQueue = task.catch(() => {});
  return task;
}

