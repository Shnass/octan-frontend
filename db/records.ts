import pool from "@/lib/dbConnect";
import { type QueryResult } from "pg";
import { ReleaseFetched } from "@/types/release";
import setCurrencies from "@/services/setCurrencies"; 

type ListRecordsParams = {
  genre?: string | null;
  page?: number;
  perPage?: number;
  artist?: string | null;
  label?: string | null;
  query?: string | null;
};

type QueryReleaseResponse = ReleaseFetched & { pages: number };

const perPageDefault = 20;

// --- shared query parts ---
const tracklistQuery = `
  json_agg(
    json_build_object(
      'id', t.id,
      'title', t.name,
      'duration', t.duration,
      'bpm', t.bpm,
      'url', t.preview
    )
    ORDER BY t.id
  ) AS tracklist
`;

const baseSelect = `
  SELECT DISTINCT ON (r.name, r.catalog_id)
    CEILING(COUNT(*) OVER () / $PER_PAGE$) AS pages,
    r.id, r.name, r.artist, r.year, r.cover, r.price, r.status,
    ${tracklistQuery}
  FROM records r
  LEFT JOIN tracks t ON t.record_id = r.id
`;

const groupOrder = `
  GROUP BY r.id, r.name, r.artist, r.year
  ORDER BY r.name, r.catalog_id DESC, r.year ASC, r.id DESC
  LIMIT $LIMIT$ OFFSET $OFFSET$
`;

// --- main function ---
export default async function listRecords(params: ListRecordsParams) {
  const {
    genre,
    query: search,
    page = 1,
    perPage = perPageDefault,
    artist,
    label,
  } = params;

  const offset = (page - 1) * perPage;

  const values: (string | number)[] = [];
  const conditions: string[] = [];

  // --- dynamic filters ---
  if (genre) {
    values.push(genre);
    conditions.push(`g.slug = $${values.length}`);
  }

  if (artist) {
    values.push(`%${artist}%`);
    conditions.push(`r.artist ILIKE $${values.length}`);
  }

  if (label) {
    values.push(`%${label}%`);
    conditions.push(`r.label ILIKE $${values.length}`);
  }

  if (search) {
    values.push(`%${search}%`);
    const idx = values.length;
    conditions.push(`(
      r.name ILIKE $${idx} OR
      r.label ILIKE $${idx} OR
      r.artist ILIKE $${idx} OR
      r.catalog_id ILIKE $${idx}
    )`);
  }

  // --- conditional joins ---
  let joins = "";
  if (genre) {
    joins = `
      JOIN record_genres rg ON rg.record_id = r.id
      JOIN genres g ON g.id = rg.genre_id
    `;
  }

  // --- WHERE clause ---
  const where = conditions.length
    ? `WHERE ${conditions.join(" AND ")}`
    : "";

  // --- final query ---
  const query = `
    ${baseSelect.replace("$PER_PAGE$", perPage.toString())}
    ${joins}
    ${where}
    ${groupOrder
      .replace("$LIMIT$", `$${values.length + 1}`)
      .replace("$OFFSET$", `$${values.length + 2}`)}
  `;

  values.push(perPage, offset);

  const result: QueryResult = await pool.query(query, values);

  const { rows }: { rows: QueryReleaseResponse[] } = result;

  const pages = rows[0]?.pages || 1;
  const releasesFetched = rows.map(({ pages, ...rest }) => rest);
  const releases = await Promise.all(
    releasesFetched.map((r) => setCurrencies(r))
  );

  return { releases, pages };
}

export async function getRecord(id: number){
  const result = await pool.query(`
    SELECT 
      r.*,
      g.genre,
      t.tracklist

    FROM records r

    LEFT JOIN LATERAL (
      SELECT json_agg(
        json_build_object(
          'name', g.name,
          'slug', g.slug
        )
      ) AS genre
      FROM record_genres rg
      JOIN genres g ON g.id = rg.genre_id
      WHERE rg.record_id = r.id
    ) g ON true

    LEFT JOIN LATERAL (
      SELECT json_agg(
        json_build_object(
            'id', t.id,
            'title', t.name,
            'duration', t.duration,
            'bpm', t.bpm,
            'url', t.preview
        )
        ORDER BY t.id
      ) AS tracklist
      FROM tracks t
      WHERE t.record_id = r.id
    ) t ON true

    WHERE r.id = $1;`, [id]);
  const { rows } = result; 
  return rows;    
}