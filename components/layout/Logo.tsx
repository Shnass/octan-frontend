import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
        <Link href="/">
            <Image src="/logo-long.svg" alt="Octan Logo" width={81} height={20} />
        </Link>
    )
}