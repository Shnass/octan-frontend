import H2 from "@/components/general/H2"
import { Track } from "@/types/track"

export default function Tracklist({tracks}:{tracks:Track[]}) {
  return (
              <div className="grow">
                <H2>Tracklist:</H2>
                <ul>
                  {tracks.map((track, index) => (
                    <li key={index}>{track.title}</li>
                  ))}
                </ul>
              </div>
  )
}
