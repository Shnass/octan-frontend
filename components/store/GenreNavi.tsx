import Link from "next/link";

export default function GenreNavi({genres}: {genres: string[]}) {
    return (
        <nav>
            <ul className="flex space-x-4 mb-4">
                {genres.map((genre) => {
                    const genreSlug = genre.toLowerCase().replace(/\s+/g, '-');
                    return (
                        <li key={genreSlug}>
                            <Link href={`/store/genre/${genreSlug}`} className="hover:underline">
                                {genre}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}