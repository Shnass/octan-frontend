"use client";

import { Release } from "@/types/release";
import { useCartStore } from "@/app/store/cart.store";
import CartItem from "@/components/cart/CartItem";
import EmptyCart from "@/components/cart/EmptyCart";
import Button from "@/components/general/Button";
import Link from "next/link";
import Price from "@/components/shop/Price";
import H2 from "../general/H2";
import CartAsideAnimation from "./CartAsideAnimation";

export default function CartAside() {
    const cartState = useCartStore();
    const { totalPrice, totalItems } = cartState.getSummary();
    const items: Release[] = cartState.items;

    return (
        <CartAsideAnimation>
            <>
                <H2>Your Cart</H2>
                {items.length === 0 ? <EmptyCart /> : (<>
                    <div className="grow">
                        {items.map((item, index: number) =><CartItem item={item} key={index}/>)}
                        <div className="justify-between flex text-xl">
                            <span>
                                Total for <b>{totalItems}</b> items:
                            </span>
                            <span className="font-bold">
                                <Price prices={totalPrice}/>
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-baseline mt-4">
                        <Link href="/shop" className="text-blue-500 hover:underline">
                            Continue Shopping
                        </Link>
                        <Button href="/checkout">Proceed to Checkout</Button>
                    </div>    
            </>)}
        </>
    </CartAsideAnimation>
  )
}
