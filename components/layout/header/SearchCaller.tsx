"use client"

import Image from "next/image";
import HeaderButton from "../../general/HeaderButton";

export default function HeaderSearch() {
    function toggleSearch(){

    }

    return (
        <div className="relative">
            <HeaderButton onClick={()=>toggleSearch()}>
                <Image src="/icon-search.svg" alt="Cart" width={18} height={18} />
            </HeaderButton>
        </div>
    );
    
}