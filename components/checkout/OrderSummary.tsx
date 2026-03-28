"use client";

import H2 from "../general/H2"
import { useCartStore } from "@/app/store/cart.store";
import { Release } from "@/types/release";
import SummaryItem from "./SummaryItem";
import Price from "../shop/Price";


export default function OrderSummary() {
    const cartState = useCartStore();
    const { totalPrice, totalItems } = cartState.getSummary();
    const items: Release[] = cartState.items;

  return (
    <div>
        <H2>Order Summary</H2>
        {items.map((item, index: number) =><SummaryItem item={item} key={index}/>)}
        <div className="justify-between flex mt-2">
            <span className="text-md text-gray-500">Total Items</span>
            <span className="text-md text-gray-500">{totalItems}</span>
        </div>
        <div className="justify-between flex mt-1">
            <span className="text-md text-gray-500">Total price</span>
            <span className="text-md text-gray-500">
                <Price prices={totalPrice} />
            </span>
        </div>
    </div>
  )
}
