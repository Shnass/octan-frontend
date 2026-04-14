"use client"

import Image from "next/image";
import { useCartStore } from "../../app/store/cart.store";
import HeaderButton from "../general/HeaderButton";

export default function HeaderCart() {
    const items = useCartStore((state) => state.items);
    const {toggleCart} = useCartStore();
    const isEmpty = items.length === 0;

    return (
        <div className="relative">
            <HeaderButton onClick={()=>toggleCart()} disabled={isEmpty} points={items.length}>
                <Image src="/cart.svg" alt="Cart" width={18} height={18} />
            </HeaderButton>
        </div>
    );
    
}