import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo. In production, replace with a real DB like Supabase, Prisma, or MongoDB.
type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message: string;
  submittedAt: string;
};

const leads: Lead[] = [];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, message } = body;

    // Validation
    if (!name?.trim()) return NextResponse.json({ error: "Name is required" }, { status: 400 });
    if (!email?.trim() || !validateEmail(email)) return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    if (!company?.trim()) return NextResponse.json({ error: "Company is required" }, { status: 400 });
    if (!teamSize) return NextResponse.json({ error: "Team size is required" }, { status: 400 });

    const lead: Lead = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      teamSize,
      message: message?.trim() || "",
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("New lead captured:", lead);

    return NextResponse.json(
      { success: true, message: "Thank you! Our team will reach out within 24 hours.", id: lead.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

export async function GET() {
  // In production: protect this with authentication
  return NextResponse.json({ count: leads.length, leads });
}
