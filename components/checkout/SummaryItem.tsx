import { Release } from "@/types/release";
import ReleaseImage from "../shop/ReleaseImage";
import Price from "../shop/Price";

export default function CartItem({ item }: { item: Release }) {
    return (
        <div className="flex gap-4 full pb-4 border-b-gray-100 border-b-2 mb-4">
            <div className="h-[60px] w-[60px] relative">
                <ReleaseImage src={item.cover} alt={item.name} width={60} height={60} />
            </div>
            <div className="grow">
                <h2>{item.artist} – {item.name} | <small>{item.label} - {item.catalog_id} ({item.year})</small></h2>
                <p className="text-sm text-gray-500">Media condition: {item.media}</p>
                <p className="text-sm text-gray-500">Sleeve condition: {item.sleeve}</p>
            </div>
            <div className="flex justify-end items-end gap-2 text-sm">
                <b><Price prices={item.prices} /></b>
            </div>
        </div>
    );
}