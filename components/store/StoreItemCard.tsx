import { Release } from "@/types/release";
import PlayButton from "../audioplayer/PlayButton";
import ReleaseImage from "./ReleaseImage";
import Link from "next/link";

export default function StoreItemCard({ item }: { item: Release }) {
    return (
        <div className="w-1/5 p-3">
            <Link href={`/shop/release/${item.id}`}>
                <ReleaseImage src={item.cover} alt={item.name} width={300} height={300} />
            </Link>
            <h3>{item.artist} - {item.name}</h3>
            <span>${item.price}</span>
            <div className="mt-2">
            {item.tracklist.slice(0,5).map((track, index) => (
                track.url && <PlayButton key={index} src={`https://audio.octan.online/${track.url}`} track={track} release={item}/>
            ))}
            </div>
        </div>
    )
}