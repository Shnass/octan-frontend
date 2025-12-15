"use client";

import { useAudioPlayer } from "react-use-audio-player";
import { registerPlayer } from "./AudioController";

export default function GlobalAudioPlayer() {
  const { load, stop, pause } = useAudioPlayer();

  registerPlayer({
  play: (src) => {
    stop();
    load(src, { html5: true, autoplay: true });
  },
  pause});

  return <>P</>; // or UI
}