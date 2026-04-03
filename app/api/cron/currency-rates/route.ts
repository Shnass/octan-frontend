import pool from "@/lib/dbConnect";

export async function GET(req: Request) {
  if (req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const res = await fetch(`https://api.exchangerate.host/live?access_key=${process.env.EXCHANGERATE_API_KEY}&source=EUR`);
    const data = await res.json();

    if (!data?.quotes) {
        throw new Error("Invalid exchange rate response");
    }

    const UAH = data.quotes.EURUAH.toFixed(2);
    const USD = data.quotes.EURUSD.toFixed(2);
    const GBP = data.quotes.EURGBP.toFixed(2);


  // save to DB
    await pool.query(`
        UPDATE currency_rates
        SET uah = $1, usd = $2, gbp = $3
        WHERE id = 1
    `, [UAH, USD, GBP]);

  return Response.json({ ok: true });  
} catch (err) {
  console.error(err);
  return new Response("Failed", { status: 500 });
}

  
}