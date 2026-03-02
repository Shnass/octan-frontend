import Link from "next/link";

export default function GenreNavi({genres, currentGenre}: {genres: string[], currentGenre?: string}) {
    return (
        <nav>
            <ul className="flex space-x-4 mb-4">
                {genres.map((genre) => {
                    const genreSlug = genre.toLowerCase().replace(/\s+/g, '-');
                    console.log("GenreNavi - genreSlug:", genreSlug, "currentGenre:", currentGenre, "isCurrent:", currentGenre === genreSlug);
                    return (
                        <li key={genreSlug}>
                            <Link href={`/shop/genre/${genreSlug}`} className={`hover:underline ${currentGenre === genreSlug ? "text-red-500" : ""}`}>
                                {genre}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}