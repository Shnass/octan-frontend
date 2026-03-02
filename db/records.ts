import pool from "@/lib/dbConnect";
import { type QueryResult, type QueryResultRow } from "pg";
import { Release } from "@/types/release";


type ListRecordsParams = {
  genre?: string | null;
  search?: string | null;
  page?: number;
  perPage?: number;
};
type QueryReleaseResponse = Release & {pages:number};

const generalQuery = `r.id, r.name, r.artist, r.year, r.cover, r.price`;
const perPageDefault = 20;

const tracklistQuery = `json_agg(
      json_build_object(
        'id', t.id,
        'title', t.name,
        'duration', t.duration,
        'bpm', t.bpm,
        'url', t.preview
      )
      ORDER BY t.id
    ) AS tracklist`;




export default async function listRecords(params: ListRecordsParams) {
    const { genre, search, page = 1, perPage = perPageDefault } = params;
    const offset = (page - 1) * perPage;
    const totalPagesQuery = `
      CEILING(COUNT(*) OVER () / ${perPage}) AS pages
    `;
    let result: QueryResult | null = null;

    if(genre) {
        result = await pool.query(`SELECT ${totalPagesQuery}, ${generalQuery}, 
        ${tracklistQuery}
        FROM records r
        JOIN record_genres rg ON rg.record_id = r.id
        JOIN genres g ON g.id = rg.genre_id
        LEFT JOIN tracks t ON t.record_id = r.id
        WHERE g.slug = $1
        GROUP BY r.id, r.name, r.artist, r.year
        ORDER BY r.year DESC
        LIMIT $2 OFFSET $3;`, [genre, perPage, offset]);
    }

    if(search) {

      console.log('Searching for:', search);

        result = await pool.query(`SELECT ${totalPagesQuery}, ${generalQuery}, 
        ${tracklistQuery}
        FROM records r
        LEFT JOIN tracks t ON t.record_id = r.id
        WHERE r.name ILIKE $1
          OR r.label ILIKE $1
          OR r.artist ILIKE $1
          OR r.catalog_id ILIKE $1
        GROUP BY r.id, r.name, r.year
        ORDER BY r.year DESC
        LIMIT $2 OFFSET $3;`, [`%${search}%`, perPage, offset]);
    }

    if(!genre && !search){
      result = await pool.query(
          `SELECT 
          ${totalPagesQuery}, 
          ${generalQuery}, 
          ${tracklistQuery}
          FROM records r
          LEFT JOIN tracks t ON t.record_id = r.id
          GROUP BY r.id, r.name, r.artist, r.year
          ORDER BY r.year DESC
          LIMIT $1 OFFSET $2;`, [perPage, offset]);
    }

    if(result !== null){
      const { rows } : {rows: QueryReleaseResponse[]} = result; 
      const pages = rows[0]?.pages || 1;
      const releases:Release[] = rows.map(({pages, ...rest}) => rest);
      return { releases, pages };
    }

}

export async function getRecord(id: number){
        const result = await pool.query(`SELECT ${generalQuery}, r.label, r.sleeve, r.media, r.country, r.catalog_id, r.description,
        ${tracklistQuery}
        FROM records r
        LEFT JOIN tracks t ON t.record_id = r.id
        WHERE r.id = $1
        GROUP BY r.id;`, [id]);
            const { rows } = result; 
        return rows;    
}