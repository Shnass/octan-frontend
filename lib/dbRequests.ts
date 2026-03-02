import pool from "@/lib/dbConnect";
const { rows } = await pool.query("SELECT * FROM records LIMIT 20");
