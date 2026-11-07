import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { adminPeople } from "@/lib/team";
import {
  getPersons,
  updatePerson,
  addPersonProject,
  removePersonProject,
} from "@/lib/personsStore";

export async function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const persons = await getPersons();
  return NextResponse.json({ persons });
}

export async function PATCH(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const person = adminPeople.find((p) => p.id === body?.personId);
  if (!person) {
    return NextResponse.json({ error: "Select a person." }, { status: 400 });
  }

  // Assign a project to a person
  if (typeof body?.addProject === "string" && body.addProject) {
    const persons = await addPersonProject(person.id, body.addProject);
    if (!persons) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 400 }
      );
    }
    return NextResponse.json({ persons });
  }

  // Remove a project from a person
  if (typeof body?.removeProject === "string" && body.removeProject) {
    const persons = await removePersonProject(person.id, body.removeProject);
    return NextResponse.json({ persons });
  }

  // Update development cost
  const developmentCost = Number(body?.developmentCost);
  if (!Number.isFinite(developmentCost) || developmentCost < 0) {
    return NextResponse.json(
      { error: "Enter a valid development cost." },
      { status: 400 }
    );
  }

  const persons = await updatePerson(person.id, developmentCost);
  return NextResponse.json({ persons });
}
