"use client";

import {useState} from "react";
import AudioContext from "./AudioContext";
import { useAudioPlayer } from "react-use-audio-player";
import { Release } from "@/types/release";
import { Track } from "@/types/track";
import { TrackWithRelease } from "@/types/trackwithrelease";

function trackUrlModifier(src:string){
  if(src.indexOf("audio.octan.online") === -1){
    src = `https://audio.octan.online/${src}`;
  }

  return src;
}


export default function AudioContextProvider({ children, }: { children: React.ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<TrackWithRelease | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { stop, pause, load } = useAudioPlayer();

    const killPlayer = () => {
      setCurrentTrack(null);
      setIsPlaying(false);
      pause();
    }


    const playTrack = (release: Release, track: Track, src: string) => {
        src = trackUrlModifier(src);
        pause();
        setIsPlaying(true);
        play(src);
        setCurrentTrack({ ...track, release });
    }

    const play = (src: string) => {
        stop();
        load(src, { html5: true, autoplay: true, onend: () => {
          setIsPlaying(false) 
        }
        });
    }

    const fwd = (release: Release, track: Track) => {
      const tracks = release.tracklist.filter(t => t.url);
      const tid = tracks.findIndex(t => t.id === track.id);
      const nextTrack = (tid >= tracks.length - 1) ? tracks[0] : tracks[tid + 1]

      playTrack(release, nextTrack, nextTrack.url || "");

    }
    
    const bwd = (release: Release, track: Track) => {
      const tracks = release.tracklist.filter(t => t.url);
      const tid = tracks.findIndex(t => t.id === track.id);
      const prevTrack = (tid <= 0) ? tracks[tracks.length - 1] : tracks[tid - 1]

      playTrack(release, prevTrack, prevTrack.url || "");
    }

    const playButtonHandler = (release: Release, track: Track, src: string) => {

        src = trackUrlModifier(src)

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
      }

    return (
        <AudioContext.Provider value={{ currentTrack, isPlaying, playButtonHandler, play, pause, fwd, bwd, killPlayer }}>
            {children}
        </AudioContext.Provider>
    );
      
}


