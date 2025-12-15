// app/components/GlobalAudioShell.tsx
"use client";

import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "./AudioPlayer";

export default function GlobalAudioShell() {
  return (
    <AudioPlayerProvider>
      <AudioPlayer />
    </AudioPlayerProvider>
  );
}