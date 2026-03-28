import pool from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function getRates() {
  const { rows } = await pool.query(`
    SELECT uah, usd, gbp
    FROM currency_rates
    WHERE id = 1
  `);

  return NextResponse.json(rows[0], {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}