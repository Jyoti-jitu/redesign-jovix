import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import {
  listProjects,
  addProject,
  validateProjectInput,
} from "@/lib/projectsStore";


export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const projects = await listProjects();
  return NextResponse.json({ projects });
}

export async function POST(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const validation = validateProjectInput(body);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const project = await addProject(validation.data);
  return NextResponse.json({ project }, { status: 201 });
}
