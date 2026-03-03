"use client";

import AudioContext from "./AudioContext";
import ReleaseImage from "../store/ReleaseImage";
import { useContext } from "react";

export default function GlobalAudioPlayer() {
  const audioContext = useContext(AudioContext);
  const { currentTrack, isPlaying, playButtonHandler, play, pause } = audioContext;
  if (currentTrack === null) return null;

  return <div className="fixed bottom-10 right-10 bg-gray-800 text-white p-4 flex items-center gap-4 z-50 rounded-3xl align-middle">
    {currentTrack!==null && 
      <>
        <div className="w-[50px] h-[50px] overflow-hidden rounded-full animate-spin [animation-duration:2.5s]">
          <ReleaseImage 
            src={currentTrack.release.cover} 
            alt={currentTrack.release.name} 
            width={50} 
            height={50} 
          />
        </div>
        <p>
          <small>{currentTrack.release.artist}</small><br/>
          {currentTrack.title}</p>
      </>
    }
  </div>
}