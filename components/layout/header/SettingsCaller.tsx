"use client"

import Image from "next/image";
import HeaderButton from "../../general/HeaderButton";

export default function HeaderSettings() {
    function toggleSettings(){

    }

    return (
        <div className="relative">
            <HeaderButton onClick={()=>toggleSettings()}>
                <Image src="/icon-settings.svg" alt="Cart" width={18} height={18} />
            </HeaderButton>
        </div>
    );
    
}