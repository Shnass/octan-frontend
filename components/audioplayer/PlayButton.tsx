"use client"

import { useContext } from "react"
import AudioContext from "./AudioContext";
import { Track } from "@/types/track";
import { Release } from "@/types/release";
import Image from "next/image";

export default function PlayButton({ src, track, release }: { src: string, track: Track, release: Release }){
    const audioContext = useContext(AudioContext);
    const { currentTrack, isPlaying, playButtonHandler } = audioContext;

    function handleClick() {
        playButtonHandler(release, track, src);
    }

    return <button className="cursor-pointer w-4 h-4 inline-flex justify-center" onClick={handleClick}>
        {currentTrack !== null && currentTrack.id === track.id && isPlaying ? 
            <Image src="/pause-black.svg" width={20} height={20} alt="pause" />
        : <Image src="/play-black.svg" width={12} height={12} alt="play" />}
    </button>
}