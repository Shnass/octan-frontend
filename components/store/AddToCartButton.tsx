"use client"

import Button from "../general/Button";
import { Release } from "../../types/release";
import { useCartStore } from "../../app/store/cart.store";

export default function AddToCartButton({ item }: { item: Release }) {
    const addToCart = useCartStore((state) => state.addToCart);

    function handleAddToCart(item: Release) {
        addToCart(item);
        console.log("Current cart items:",  useCartStore.getState().items);
    }

    return <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
}