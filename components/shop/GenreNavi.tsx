import Link from "next/link";

export default function GenreNavi({genres, currentGenre}: {genres: string[], currentGenre?: string}) {
    return (
        <nav className="self-center ml-8">
            <ul className="flex space-x-4">
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
            </ul>
        </nav>
    );
}