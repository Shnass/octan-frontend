"use client";

import AudioContext from "./AudioContext";
import ReleaseImage from "../shop/ReleaseImage";
import { useContext } from "react";
import Image from "next/image";

export default function GlobalAudioPlayer() {
  const audioContext = useContext(AudioContext);
  const { currentTrack, killPlayer, isPlaying, playButtonHandler, fwd, bwd } = audioContext;
  if (currentTrack === null) return null;

  function handlePlayer() {
    if (currentTrack !== null) {
      playButtonHandler(currentTrack.release, currentTrack, currentTrack.url === undefined ? "" : currentTrack.url);
    }
  }

  function closePlayer(){
    killPlayer();
  }

  return <div className="fixed bottom-10 right-10 bg-gray-800 text-white p-4 flex w-100 items-center gap-4 z-50 rounded-2xl align-middle">
    {currentTrack!==null && 
      <>
        <div className="w-[50px] h-[50px] relative">
          <div className="w-[50px] h-[50px] overflow-hidden rounded-lg">
            <ReleaseImage 
              src={currentTrack.release.cover} 
              alt={currentTrack.release.name} 
              width={50} 
              height={50} 
            />
          </div>
        </div>
        <div className="text-md leading-[1.1em] overflow-hidden">
          <small className="block whitespace-nowrap overflow-hidden text-ellipsis">{currentTrack.release.artist}</small>
          <span className="block whitespace-nowrap overflow-hidden text-ellipsis">{currentTrack.title}</span>
        </div>
        <div className="flex gap-2 ml-auto grow justify-end w-22 shrink-0">
          <button onClick={() => bwd(currentTrack.release, currentTrack)} className="cursor-pointer w-6 h-6 text-right">
            <Image src="/bwd.svg" alt="Previous" width={18} height={18} />
          </button>
          <button onClick={handlePlayer} className="w-6 h-6">
            {isPlaying ? 
              <Image src="/pause.svg" alt="Pause" width={18} height={18} /> :
              <Image src="/play.svg" alt="Play" width={18} height={18} />
            }
          </button>
          <button onClick={() => fwd(currentTrack.release, currentTrack)} className="cursor-pointer w-6 h-6 text-left">
            <Image src="/fwd.svg" alt="Next" width={18} height={18} />
          </button>
        </div>

        <button
          className="absolute -right-1 -top-1 bg-amber-700 rounded-2xl text-white w-5 h-5 text-sm/0.5"
          onClick={closePlayer}
        >
            x
        </button>

      </>
    }
  </div>
}