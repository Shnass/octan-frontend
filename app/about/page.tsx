import pool from "@/lib/db";
export default async function About() {
    const { rows } = await pool.query("SELECT * FROM records LIMIT 20");
    return (
        <>
            <h2>About Us</h2>

            <div>
            {rows.map((r) => (
                <div key={r.id}>
                <strong>{r.artist}</strong> – {r.name} ({r.year})
                </div>
            ))}
            </div>
        </>
    )
}



