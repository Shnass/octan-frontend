"use client"

import Button from "../general/Button";
import { Release } from "../../types/release";
import { useCartStore } from "../../app/store/cart.store";

export default function AddToCartButton({ item }: { item: Release }) {
    const cartState = useCartStore();
    const { addToCart, items } = cartState;
    const isInCart = items.some(cartItem => cartItem.id === item.id);


    function handleAddToCart(item: Release) {
        addToCart(item);
    }

    return <Button disabled={isInCart} onClick={() => handleAddToCart(item)}>Add to Cart</Button>
}