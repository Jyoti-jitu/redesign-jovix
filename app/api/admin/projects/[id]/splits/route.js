import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { adminPeople } from "@/lib/team";
import { listProjects, addProjectSplit } from "@/lib/projectsStore";

export async function POST(request, { params }) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const isCost = body?.personal === true;
  const person = !isCost
    ? adminPeople.find((p) => p.id === body?.personId)
    : null;
  if (!isCost && !person) {
    return NextResponse.json({ error: "Select a person." }, { status: 400 });
  }

  const amount = Number(body?.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: "Enter a valid amount." }, { status: 400 });
  }

  const reason = typeof body?.reason === "string" ? body.reason.trim() : "";
  if (reason.length > 200) {
    return NextResponse.json(
      { error: "Reason must be 200 characters or fewer." },
      { status: 400 }
    );
  }

  const personal = body?.personal === true;

  const { id } = await params;
  const projects = await listProjects();
  const existing = projects.find((p) => p.id === id);
  if (!existing) {
    return NextResponse.json({ error: "Project not found." }, { status: 404 });
  }
  if (amount > existing.totalPrice) {
    return NextResponse.json(
      { error: "Amount cannot exceed the project total price." },
      { status: 400 }
    );
  }

  const project = await addProjectSplit(id, {
    personId: person ? person.id : null,
    personName: person ? person.name : null,
    amount,
    reason: reason || null,
    personal: isCost,
  });
  return NextResponse.json({ project }, { status: 201 });
}
