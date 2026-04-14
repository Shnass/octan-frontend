import SearchClient from "../general/SearchClient";
import GenreNavi from "../shop/GenreNavi";
import { genres } from "@/data/genres";
import HeaderCart from "../cart/HeaderCart";
import Logo from "./Logo";
import Navi from "./Navi";
import { Suspense } from "react"
import CurrencySelect from "../settings/CurrencySelect";
import HeaderSearch from "./header/SearchCaller";
import HeaderSettings from "./header/SettingsCaller";
import HeaderNavi from "./header/HeaderNavi";
import HeaderAsideControls from "./header/HeaderAsideControls";
    
export default function Header() {
    return (
      <header>

          <HeaderNavi>
            <Logo />
            <GenreNavi genres={genres} />
            <Navi />
            {/*
              <Suspense fallback={<div>Loading...</div>}>
                <SearchClient />
              </Suspense>
            */}
            {/*
              <div className="flex justify-end">
                <CurrencySelect />
              </div>
            */}
          </HeaderNavi>
          <HeaderAsideControls>
            <HeaderSettings />
            <HeaderSearch />
            <HeaderCart />
          </HeaderAsideControls>
      </header> 
    )
}