import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env
// creates a sql connection string
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

// postgresql://neondb_owner:npg_7uOQeHIGB1ZA@ep-crimson-dream-a8elzw3w-pooler.eastus2.azure.neon.tech/neondb?sslmode=require