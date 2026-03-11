import SearchClient from "../general/SearchClient";
import GenreNavi from "../store/GenreNavi";
import { genres } from "@/data/genres";
import HeaderCart from "../store/HeaderCart";
import Logo from "./Logo";
import Navi from "./Navi";

export default function Header() {
    return (
        <header className="py-10 relative w-full">
          <div className="flex justify-end">
            <Navi />
          </div>
          <div className="flex justify-between ">
            <Logo />
            <GenreNavi genres={genres} />
            <SearchClient />
            <HeaderCart />
          </div>
        </header>
    )
}