/**
 * Seed Vercel KV with the current local data.
 *
 * Usage (run locally after adding KV env vars to .env.local):
 *   npm run seed:kv
 *
 * Reads data/projects.json and data/persons.json and writes them into
 * Vercel KV under the keys "jovix:projects" and "jovix:persons".
 */
import fs from "fs/promises";
import path from "path";
import { kv } from "@vercel/kv";

const root = process.cwd();

async function readLocal(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(path.join(root, "data", file), "utf8"));
  } catch {
    console.warn(`  (data/${file} not found — using ${fallback})`);
    return fallback;
  }
}

async function main() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    console.error(
      "KV env vars missing. Add KV_REST_API_URL and KV_REST_API_TOKEN to .env.local first."
    );
    process.exit(1);
  }

  const projects = await readLocal("projects.json", []);
  const persons = await readLocal("persons.json", {});

  await kv.set("jovix:projects", projects);
  await kv.set("jovix:persons", persons);

  console.log(
    `✅ Seeded Vercel KV with ${projects.length} projects and ` +
      `${Object.keys(persons).length} person record(s).`
  );
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
