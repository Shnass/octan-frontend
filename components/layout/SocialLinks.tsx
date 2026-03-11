import Link from 'next/link';
import Image from 'next/image';

export default function SocialLinks() {
  return (
    <div className="flex gap-3 justify-center my-2">
        <Link href="https://t.me/octankyiv">
            <Image src="/tg.svg" width={32} height={32} alt="telegram" />
        </Link>
        <Link href="https://www.instagram.com/octan.kyiv/">
            <Image src="/ig.svg" width={32} height={32} alt="instagram"/>
        </Link>
    </div>
  )
}
