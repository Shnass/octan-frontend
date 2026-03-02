import { Track } from "./track";
import { Release } from "./release";

export type TrackWithRelease = Track & { release: Release };