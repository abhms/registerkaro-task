import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);

// Create Drizzle ORM db instance
const db = drizzle(sql, { schema });

async function createCompaniesTableIfNotExist() {
  try {
    // Check if the companies table exists
    const result = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'companies'
      );
    `;
    const tableExists = result[0].exists;

    if (!tableExists) {
      console.log("Companies table does not exist. Creating it...");

      // Create companies table if it doesn't exist
      await sql`
        CREATE TABLE companies (
          id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
          name TEXT NOT NULL,
          description TEXT,
          directorname TEXT
        );
      `;
      console.log("Companies table created successfully.");
    } else {
      console.log("Companies table already exists.");
    }

    // Ensure the directorname column exists
    const columnCheckResult = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'companies' AND column_name = 'directorname'
    `;

    if (columnCheckResult.length === 0) {
      console.log("Adding directorname column...");
      // Add the directorname column if it does not exist
      await sql`
        ALTER TABLE companies 
        ADD COLUMN directorname TEXT;
      `;
      console.log("directorname column added successfully.");
    }
  } catch (error) {
    console.error("Error checking or creating companies table:", error);
  }
}

// Run the setup function before the app starts processing requests
createCompaniesTableIfNotExist();

export default db;
