import { neon } from "@neondatabase/serverless";

// Create a connection using the database URL
const sql = neon(process.env.DATABASE_URL!);

async function testConnection() {
  try {
    // Execute a raw SQL query
    const result = await sql`SELECT 1`;
    console.log("Database connection successful:", result);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
export default testConnection;
