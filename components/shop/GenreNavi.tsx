"use client"

import Link from "next/link";
import { useRef, useEffect } from "react"

export default function GenreNavi({genres, currentGenre}: {genres: string[], currentGenre?: string}) {
    const runnerRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{

    },[])
    const handlenMouseOver = (e:HTMLElement) => { 
        if(runnerRef.current){
            runnerRef.current.style.left = e.offsetLeft+'px'
            runnerRef.current.style.width = e.offsetWidth+'px'
        }
    }
    return (
        <nav className="self-center border-b-8 pb-4 uppercase text-xl relative">
            <ul className="flex space-x-4">
                {genres.map((genre) => {
                    const genreSlug = genre.toLowerCase().replace(/\s+/g, '-');
                    return (
                        <li key={genreSlug}>
                            <Link href={`/shop/genre/${genreSlug}`} onMouseEnter={(e)=>handlenMouseOver(e.currentTarget)} className={`hover:underline ${currentGenre === genreSlug ? "text-red-500" : ""}`}>
                                {genre}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <span className="absolute h-2 w-12 l-0 transition-all  delay-500 -bottom-2 bg-green-400" ref={runnerRef}></span>
        </nav>
    );
}