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
  fwd: (release: Release, track: Track) => void;
  bwd: (release: Release, track: Track) => void;
  pause: () => void;
}

const AudioContext = createContext<AudioContextType>({
  currentTrack: null,
  isPlaying: false,
  playButtonHandler: () => {},
  play: () => {},
  fwd: () => {},
  bwd: () => {},
  pause: () => {},
});

export default AudioContext;