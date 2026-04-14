import { Release } from "@/types/release";
import PlayButton from "../audioplayer/PlayButton";
import ReleaseImage from "./ReleaseImage";
import Link from "next/link";
import Price from "./Price";

export default function StoreItemCard({ item, perRow }: { item: Release, perRow: number }) {

const widthMap = `w-1/${perRow}`;

    return (
        <div className={`${widthMap} p-2`}>
            <Link href={`/shop/release/${item.id}`} className="relative">
                <ReleaseImage src={item.cover} alt={item.name} width={300} height={300} />
                <div className="flex justify-between absolute bottom-0 left-0 bg-[greenyellow] p-2 w-full font-bold">
                    <Price prices={item.prices} />
                    <div className="ml-auto">
                    {item.tracklist.slice(0,5).map((track, index) => (
                        track.url && <PlayButton key={index} src={`https://audio.octan.online/${track.url}`} track={track} release={item}/>
                    ))}
                </div>
            </div>

            </Link>
            {item.status === 'sold' ? 'Out of Stock' : ''} 
            <h3 className="text-sm [font-variant-caps:all-small-caps] mb">
                <b>
                    {item.artist}
                </b>
            </h3>
            <h4 className="text-lg/6 line-clamp-2 h-11 mb-3">{item.name}</h4>
        </div>
    )
}