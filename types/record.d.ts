import { Track } from './track';

export type Record = {
    id: number;
    name: string;
    artists: string[];
    genre: string[];
    price: number;
    coverImage: string;
    label: string;
    releaseDate: string;
    formats: string[];
    description: string;
    tracklist: Track[];
}