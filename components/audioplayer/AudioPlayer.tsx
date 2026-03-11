"use client";

import AudioContext from "./AudioContext";
import ReleaseImage from "../store/ReleaseImage";
import { useContext } from "react";
import Image from "next/image";

export default function GlobalAudioPlayer() {
  const audioContext = useContext(AudioContext);
  const { currentTrack, isPlaying, playButtonHandler, fwd, bwd } = audioContext;
  if (currentTrack === null) return null;

  function handlePlayer() {
    if (currentTrack !== null) {

      console.log(currentTrack)

      playButtonHandler(currentTrack.release, currentTrack, currentTrack.url === undefined ? "" : currentTrack.url);
    }
  }

  return <div className="fixed bottom-10 right-10 bg-gray-800 text-white p-4 flex items-center gap-4 z-50 rounded-3xl align-middle">
    {currentTrack!==null && 
      <>
        <div className="w-[50px] h-[50px] relative">
          <div className="w-[50px] h-[50px] overflow-hidden rounded-full animate-spin [animation-duration:3s]">
            <ReleaseImage 
              src={currentTrack.release.cover} 
              alt={currentTrack.release.name} 
              width={50} 
              height={50} 
            />
          </div>
          <button onClick={handlePlayer} className="absolute top-1/2 p-0 w-[32px] h-[32px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 rounded-full p-2 transition-opacity">
            {isPlaying ? 
              <Image src="/pause.svg" alt="Pause" width={32} height={32} /> :
              <Image src="/play.svg" alt="Play" width={32} height={32} />
            }
          </button>
        </div>
        <p>
          <small>{currentTrack.release.artist}</small><br/>
          {currentTrack.title}</p>
        <div className="flex gap-2">
          <button onClick={() => bwd(currentTrack.release, currentTrack)} className="cursor-pointer">
            <Image src="/bwd.svg" alt="Previous" width={24} height={24} />
          </button>
          <button onClick={() => fwd(currentTrack.release, currentTrack)} className="cursor-pointer">
            <Image src="/fwd.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      </>
    }
  </div>
}