import { NextResponse, type NextRequest } from "next/server";
import db from "@/db/drizzle";  // Assuming this is your initialized DB instance
import { companies } from "@/db/schema";  // Import the 'companies' schema

// Fetch all companies from the 'companies' table
export async function GET(request: NextRequest) {
  try {
    console.log(request)
    // Query all companies
    const allCompanies = await db.select().from(companies);

    // Return the companies data
    return NextResponse.json({ success: true, data: allCompanies }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from companies:", error);
    return NextResponse.json({ error: "Failed to fetch data." }, { status: 500 });
  }
}
