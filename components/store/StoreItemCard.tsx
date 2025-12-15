import { Record } from "@/types/record";
import Image from "next/image";
import PlayButton from "../audioplayer/PlayButton";

export default function StoreItemCard({ item }: { item: Record }) {
    
    return (
        <div className="w-1/3 border p-3">
            <h3>{item.name}</h3>
            <Image src={item.coverImage} alt={item.name} width={200} height={200} />
            <p>{item.description}</p>
            <span>Price: ${item.price}</span>
            {item.tracklist.map((track, index) => (
                <div key={index}>
                    <span>{track.title} {track.duration && `- ${track.duration}`}</span>
                    {track.preview && <PlayButton src={track.preview || ''} />}
                </div>
            ))}
        </div>
    )
}