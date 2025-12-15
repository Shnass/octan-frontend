import HeaderNavi from "./HeaderNavi";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between py-10 relative w-full">
        <h1 className="">
          <Image src="/octan-logo.svg" alt="Octan Logo" width={40} height={40} />
        </h1>
        <HeaderNavi />
      </header>
    )
}