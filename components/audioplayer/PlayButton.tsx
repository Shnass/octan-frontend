"use client"

import React from "react"
import { playTrack, pauseTrack } from "./AudioController"

export default function PlayButton({ src }: { src: string }){
    const [isPlaying, setIsPlaying] = React.useState(false);

    function handleClick() {
        if (isPlaying) {
            pauseTrack();
            setIsPlaying(false);
        } else {
            playTrack(src);
            setIsPlaying(true);
        }
    }

    return <button className="cursor-pointer" onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
}