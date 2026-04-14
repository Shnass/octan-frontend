import Link from 'next/link';
import Image from 'next/image';

export default function SocialLinks() {
  return (
    <div className="flex gap-3 justify-center my-2">
        <Link href="https://t.me/octankyiv">telegram</Link>
        <Link href="https://www.instagram.com/octan.kyiv/">instagram</Link>
        <Link href="https://open.spotify.com/playlist/2rG4pnmVeIgUiQQaf8zr81">spotify</Link>
        <Link href="https://www.discogs.com/seller/octan.kyiv/profile">discogs</Link>
    </div>
  )
}
