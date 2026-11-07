import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { deleteProjectSplit } from "@/lib/projectsStore";

export async function DELETE(request, { params }) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id, splitId } = await params;
  const project = await deleteProjectSplit(id, splitId);
  if (!project) {
    return NextResponse.json(
      { error: "Split or project not found." },
      { status: 404 }
    );
  }
  return NextResponse.json({ project });
}
