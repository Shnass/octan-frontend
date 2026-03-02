import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
        <h1 className="">
            <Link href="/">
            <Image src="/octan-logo.png" alt="Octan Logo" width={128} height={32} />
            </Link>
        </h1>
    )
}