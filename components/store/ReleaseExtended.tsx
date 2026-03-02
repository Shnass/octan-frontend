import { Release } from "@/types/release";
import ReleaseImage from "./ReleaseImage";
import AddToCartButton from "./AddToCartButton";
import H1 from "../general/H1";
import H2 from "../general/H2";

export default function ReleaseExtended({item}: {item: Release}) {
  console.log(item);
  return (
    <div className="flex gap-8">
      <div className="w-[400]">
        <ReleaseImage src={item.cover} alt={item.name} width={400} height={400} />
      </div>
      <div className="grow">
        <H1>{item.artist}</H1>
        <H2>{item.name}</H2>

        <div className="flex gap-5 my-4">
          <div className="basis-120">
            <div className="mb-4">
              {item.label && <p>Label: {item.label}</p>}
              {item.country && <p>Country: {item.country}</p>}
              {item.catalog_id && <p>Catalog ID: {item.catalog_id}</p>}
              {item.media && <p>Media Condition: {item.media}</p>}
              {item.sleeve && <p>Sleeve Condition: {item.sleeve}</p>}
            </div>
            <p className="text-2xl font-extrabold my-4">${item.price}</p>
            <AddToCartButton item={item} />
          </div>
          <div className="grow">
            <H2>Tracklist:</H2>
            <ul>
              {item.tracklist.map((track, index) => (
                <li key={index}>{track.title}</li>
              ))}
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}
