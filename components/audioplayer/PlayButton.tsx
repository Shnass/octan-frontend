"use client"

import { useContext } from "react"
import AudioContext from "./AudioContext";
import { Track } from "@/types/track";
import { Release } from "@/types/release";

export default function PlayButton({ src, track, release }: { src: string, track: Track, release: Release }){
    const audioContext = useContext(AudioContext);
    const { currentTrack, isPlaying, playButtonHandler } = audioContext;

    function handleClick() {
        playButtonHandler(release, track, src);
    }

    return <button className="cursor-pointer" onClick={handleClick}>
        {currentTrack !== null && currentTrack.id === track.id && isPlaying ? "⏸" : "▶"}
    </button>
}