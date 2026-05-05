import { Release } from "@/types/release";
import ReleaseImage from "../ReleaseImage";
import AddToCartButton from "../AddToCartButton";
import H0 from "../../general/H0";
import H1 from "../../general/H1";
import AssociatedReleases from "./AssociatedReleases"
import listRecords from "@/db/records";
import SocialShare from "../../general/SocialShare"
import PlayButton from "../../audioplayer/PlayButton";
import Price from "../Price";
import Tracklist from "./Tracklist";
import Section from "@/components/general/Section";
import ReleaseMeta from "./ReleaseMeta";
import ReleaseDescription from "./ReleaseDescription";


export default async function ReleaseExtended({item}: {item: Release}) {
  const [byArtist,byLabel] = await Promise.all([listRecords({artist: item.artist, perPage: 3}), listRecords({label: item.label, perPage: 3})]);

  return (
    <div className="flex gap-12 relative">
      <div className="grow sticky top-0 self-start">
        <ReleaseImage src={item.cover} alt={item.name} width={400} height={400} />

        <div>

        {item.tracklist !== null && item.tracklist.map((track, index) => (
            track.url && <PlayButton key={index} src={`https://audio.octan.online/${track.url}`} track={track} release={item}/>
        ))}
        </div>
      </div>
      <div className="w-1/2">
        <H0>{item.artist}</H0>
        <H1>{item.name}</H1>

        <div className="flex flex-wrap gap-1.5">
          {item.genre.map((g,i)=><span className="text-xs bg-blue-500 rounded-3xl text-white px-2 py-0.5" key={i}>{g.name}</span>)}
        </div>

        
          <Section>
              <ReleaseMeta item={item}/>
              <p className="text-2xl font-extrabold my-4"><Price prices={item.prices} /></p>
              {item.status === 'sold' ? 'Out of Stock' : <AddToCartButton item={item} />} 
          </Section>

          {item.tracklist !== null && <Section><Tracklist tracks={item.tracklist} /></Section>}

          {item.description && item.description!=="INSUFFICIENT_DATA" &&
            <Section>
              <ReleaseDescription text={item.description} />
            </Section>
          }

        <Section><SocialShare title={`${item.artist} – ${item.name}`} /></Section>

        {byArtist?.releases?.length > 1 ?
          <AssociatedReleases 
            items={byArtist.releases.filter(release => release.id !== item.id)} 
            header="More by"
            query={item.artist}
          />
          : null}

        {byLabel?.releases?.length > 1 ?
          <AssociatedReleases 
            items={byLabel.releases.filter(release => release.id !== item.id)}
            header="More on"
            query={item.label}
          />
        : null}  
      </div>
    </div>
  )
}
