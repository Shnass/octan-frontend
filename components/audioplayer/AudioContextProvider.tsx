"use client";

import {useState} from "react";
import AudioContext from "./AudioContext";
import { useAudioPlayer } from "react-use-audio-player";
import { Release } from "@/types/release";
import { Track } from "@/types/track";
import { TrackWithRelease } from "@/types/trackwithrelease";


export default function AudioContextProvider({ children, }: { children: React.ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<TrackWithRelease | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { stop, pause, load } = useAudioPlayer();

    const play = (src: string) => {
        stop();
        load(src, { html5: true, autoplay: true });
    }

    const playButtonHandler = (release: Release, track: Track, src: string) => {
        if (currentTrack?.id === track.id) {
          if(isPlaying){
            pause();
          } else {
            play(src);
          }     
          setIsPlaying(prev => !prev);
          return;
        };
        setIsPlaying(true);
        play(src);
        setCurrentTrack({ ...track, release });
        console.log(track.id);
      }

    return (
        <AudioContext.Provider value={{ currentTrack, isPlaying, playButtonHandler, play, pause }}>
            {children}
        </AudioContext.Provider>
    );
      
}


