import { NextResponse, type NextRequest } from "next/server";
import db from "@/db/drizzle";
import { companies } from "@/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, description, directorname } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    const newCompany = await db.insert(companies).values({
      name,
      description: description || null,
      directorname: directorname || null,
    });

    return NextResponse.json(
      { success: true, data: newCompany },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data into companies:", error);
    return NextResponse.json(
      { error: "Failed to insert data." },
      { status: 500 }
    );
  }
}
