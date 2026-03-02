"use client";

import { Track } from "@/types/track";
import { TrackWithRelease } from "@/types/trackwithrelease";
import { Release } from "@/types/release";
import { createContext } from "react";

type AudioContextType = {
  currentTrack: TrackWithRelease | null;
  isPlaying: boolean;
  playButtonHandler: (release: Release, track: Track, src: string) => void;
  play: (src: string) => void;
  pause: () => void;
}

const AudioContext = createContext<AudioContextType>({
  currentTrack: null,
  isPlaying: false,
  playButtonHandler: () => {},
  play: () => {},
  pause: () => {},
});

export default AudioContext;