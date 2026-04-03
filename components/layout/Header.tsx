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
      <header className="mb-12">
        <div className="py-6 relative w-full">
          <div className="flex justify-end">
            <Navi />
            <CurrencySelect />
          </div>
          <div className="flex justify-between ">
            <Logo />
            <Suspense fallback={<div>Loading...</div>}>
              <SearchClient />
            </Suspense>
            <HeaderCart />
          </div>
        </div>
        <GenreNavi genres={genres} />
      </header> 
    )
}