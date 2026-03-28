import SearchClient from "../general/SearchClient";
import GenreNavi from "../shop/GenreNavi";
import { genres } from "@/data/genres";
import HeaderCart from "../shop/HeaderCart";
import Logo from "./Logo";
import Navi from "./Navi";
import { Suspense } from "react"
import CurrencySelect from "../settings/CurrencySelect";
    

export default function Header() {
    return (
        <header className="py-10 relative w-full">
          <div className="flex justify-end">
            <Navi />
            <CurrencySelect />
          </div>
          <div className="flex justify-between ">
            <Logo />
            <GenreNavi genres={genres} />
            <Suspense fallback={<div>Loading...</div>}>
              <SearchClient />
            </Suspense>
            <HeaderCart />
          </div>
        </header>
    )
}