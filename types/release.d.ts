import { Track } from './track';

export type Release = {
    id: number;
    name: string;
    artist: string;
    genre: string[];
    country: string;
    year: number;
    price: number;
    cover: string;
    label: string;
    catalog_id: string;
    sleeve: 'M' | 'NM' | 'VG+' | 'VG' | 'G+' | 'G' | 'Generic';
    media: 'M' | 'NM' | 'VG+' | 'VG' | 'G+' | 'G';
    releaseDate: string;
    formats: string[];
    description: string;
    tracklist: Track[];
}

export type ReleaseShort = {
    id: number;
    name: string;
    artist: string;
    price: number;
}