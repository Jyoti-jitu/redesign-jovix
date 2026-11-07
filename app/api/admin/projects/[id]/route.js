import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { deleteProject, updateProject, validateProjectInput } from "@/lib/projectsStore";

export async function PATCH(request, { params }) {
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

  const { id } = await params;
  const updated = await updateProject(id, validation.data);
  if (!updated) {
    return NextResponse.json({ error: "Project not found." }, { status: 404 });
  }
  return NextResponse.json({ project: updated });
}

export async function DELETE(request, { params }) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const deleted = await deleteProject(id);
  if (!deleted) {
    return NextResponse.json({ error: "Project not found." }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
