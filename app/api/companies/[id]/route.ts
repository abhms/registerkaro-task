import { NextResponse, type NextRequest } from "next/server";
import db from "@/db/drizzle";
import { companies } from "@/db/schema";
import { sql } from "drizzle-orm";

// Fetch a company by ID
export async function GET(request: NextRequest) {
  try {
    // Get the company ID from the URL (dynamic route segment)
    const url = new URL(request.url);
    const companyId = url.pathname.split("/").pop(); // Get the ID from the URL path

    if (!companyId) {
      return NextResponse.json(
        { error: "Company ID is required." },
        { status: 400 }
      );
    }

    // Query for the company by ID using sql template
    const company = await db
      .select()
      .from(companies)
      .where(sql`${companies.id} = ${companyId}`) // Use sql template for equality check
      .limit(1);

    // If the company is found, return it; otherwise, return a 404 error
    if (company.length === 0) {
      return NextResponse.json(
        { error: "Company not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: company[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching company by ID:", error);
    return NextResponse.json(
      { error: "Failed to fetch company." },
      { status: 500 }
    );
  }
}
