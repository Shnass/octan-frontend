"use client";

import { Release } from "@/types/release";
import { useCartStore } from "@/app/store/cart.store";
import CartItem from "@/components/cart/CartItem";
import EmptyCart from "@/components/cart/EmptyCart";
import Button from "@/components/general/Button";
import Link from "next/link";

export default function CartPage() {
    const cartState = useCartStore();
    const { totalPrice, totalItems } = cartState.getSummary();
    const items: Release[] = cartState.items;
    return <>{
        items.length === 0 
        ? <EmptyCart /> 
        : (
            <>
                {items.map((item, index: number) =><CartItem item={item} key={index}/>)}
                <div className="justify-end flex">
                    <span className="text-xl font-bold text-right">
                        Total: ${totalPrice.toFixed(2)} 
                        <small className="font-normal">/ {totalItems} items</small>
                    </span>
                </div>
                <div className="flex justify-between items-baseline mt-4">
                    <Link href="/shop" className="text-blue-500 hover:underline">
                        Continue Shopping
                    </Link>
                    <Button href="/checkout">Proceed to Checkout</Button>
                </div>    
            </>
        )  
    }
    </>;
}