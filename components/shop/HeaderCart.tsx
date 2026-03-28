"use client"

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "../../app/store/cart.store";

export default function HeaderCart() {
    const items = useCartStore((state) => state.items);
    const isEmpty = items.length === 0;

    return (
        <div className="relative">
            <Link 
                href="/cart" 
                className={`block relative ${isEmpty ? "pointer-events-none opacity-50" : ""}`}
                aria-disabled={isEmpty}
                tabIndex={isEmpty ? -1 : 0}
                >
                    <Image src="/cart.svg" alt="Cart" width={32} height={32} />
                    
                    <span className="size-4 bg-red-500 absolute rounded-full text-sm/4 text-white text-center -top-2 -right-2">
                        {items.length}
                    </span>
            </Link>
        </div>
    );
    
}