'use client'

import { useState } from "react";
import HeaderCart from "./HeaderCart";
import UserArea from "./UserArea";
import Navi from "./Navi";

export default function HeaderNavi(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <nav className="flex gap-3 items-center">
          <button onClick={toggleMenu} >Toggle Navi</button>
          {isMenuOpen && <Navi />}
          {/*
          <div className="ml-auto flex gap-3">
            <HeaderCart />
            <UserArea />
          </div>
          */}
        </nav>
    )
}