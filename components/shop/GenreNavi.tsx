import Link from "next/link";
import NaviSection from "../layout/header/NaviSection";
export default function GenreNavi({genres, currentGenre}: {genres: string[], currentGenre?: string}) {
    return (
        <NaviSection>
            {genres.map((genre) => {
                const genreSlug = genre.toLowerCase().replace(/\s+/g, '-');
                return (
                    <li key={genreSlug}>
                        <Link href={`/shop/genre/${genreSlug}`} className={`hover:underline ${currentGenre === genreSlug ? "text-red-500" : ""}`}>
                            {genre}
                        </Link>
                    </li>
                )
            })}
        </NaviSection>
    );
}