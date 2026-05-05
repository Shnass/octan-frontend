import H2 from "../general/H2"

export default function Spotify() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <H2>Check our Spotify playlist</H2>
        <p>We update it weekly on fridays with another 15 tracks that are on the records in our store</p>
      </div>
      <div className="w-full md:w-1/2">
        <iframe 
          data-testid="embed-iframe" className="rounded-xl" 
          src="https://open.spotify.com/embed/playlist/2rG4pnmVeIgUiQQaf8zr81?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  )
}
