import { Release } from "@/types/release";
import ReleaseImage from "./ReleaseImage";
import AddToCartButton from "./AddToCartButton";
import H1 from "../general/H1";
import H2 from "../general/H2";
import Link from "next/link";
import listRecords from "@/db/records";
import StoreItemsList from "./StoreItemsList";
import SocialShare from "../general/SocialShare"
import PlayButton from "../audioplayer/PlayButton";
import Price from "./Price";


export default async function ReleaseExtended({item}: {item: Release}) {
  const byArtist = await listRecords({artist: item.artist, perPage: 4});
  const byLabel = await listRecords({label: item.label, perPage: 4});

  return (
    <div className="flex gap-12">
      <div className="grow">
        <ReleaseImage src={item.cover} alt={item.name} width={400} height={400} />

        <div>
        {item.tracklist.map((track, index) => (
            track.url && <PlayButton key={index} src={`https://audio.octan.online/${track.url}`} track={track} release={item}/>
        ))}
        </div>
      </div>
      <div className="w-1/2">
        <H1>{item.artist}</H1>
        <H2>{item.name}</H2>

        <div className="flex flex-wrap gap-1.5">
          {item.genre.map((g,i)=><span className="text-xs bg-blue-500 rounded-3xl text-white px-2 py-0.5" key={i}>{g.name}</span>)}
        </div>

        <div className="flex gap-5 my-4 flex-wrap">
          <div className="basis-120">
            <div className="mb-4">
              {item.label && <p><b>Label:</b> {item.label}</p>}
              {item.country && <p><b>Country:</b> {item.country}</p>}
              {item.catalog_id && <p><b>Catalog ID:</b> {item.catalog_id}</p>}
              {item.media && <p><b>Media Condition:</b> {item.media}</p>}
              {item.sleeve && <p><b>Sleeve Condition:</b> {item.sleeve}</p>}
            </div>
            <p className="text-2xl font-extrabold my-4"><Price prices={item.prices} /></p>
            {item.status === 'sold' ? 'Out of Stock' : <AddToCartButton item={item} />} 
          </div>
          <div className="grow">
            <H2>Tracklist:</H2>
            <ul>
              {item.tracklist.map((track, index) => (
                <li key={index}>{track.title}</li>
              ))}
            </ul>
          </div>
          {item.description && 
            <div className="w-full" dangerouslySetInnerHTML={{__html: item.description}}>
              
            </div>
          }
        </div>

        <SocialShare title={`${item.artist} – ${item.name}`} />



        {byArtist !== null && byArtist !== undefined && byArtist.releases.length > 1 ?
        <div>
          <H2>More by&nbsp; 
            <Link
              href={`/shop/search/?q=${item.artist.toLowerCase().replace(/\s+/g, '+')}`} 
              className="text-red-500 hover:underline">
              {item.artist}
            </Link>
          </H2>

          <StoreItemsList items={byArtist.releases.filter(release => release.id !== item.id)} currentPage={1} pages={byArtist.pages}/>
          </div>
          : null}

        {byLabel !== null && byLabel !== undefined && byLabel.releases.length > 1 ?
        <div>
          <H2>More on&nbsp;
            <Link
              href={`/shop/search/?q=${item.label.toLowerCase().replace(/\s+/g, '+')}`}
              className="text-red-500 hover:underline">
              {item.label}
            </Link>
          </H2>

          <StoreItemsList items={byLabel.releases.filter(release => release.id !== item.id)} currentPage={1} pages={byLabel.pages}/>
          </div>
        : null}  
      </div>




      



    </div>
  )
}
