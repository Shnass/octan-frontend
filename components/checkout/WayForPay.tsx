"use client";

import Script from "next/script";
import { useCartStore } from "@/app/store/cart.store";
import Button from "@/components/general/Button";
import { useOrderStore } from "@/app/store/order.store";

export default function WayForPay() {

const cartState = useCartStore();
const orderState = useOrderStore();
const { writeOrderToDB } = orderState;

const { clearCart } = cartState;
const { totalPrice, totalItems } = cartState.getSummary();


const processOrder = async () => {
  await writeOrderToDB();
}

const pay = async () => {
  const order = {
    orderReference: "ORDER_" + Date.now(),
    orderDate: Math.floor(Date.now() / 1000),
    amount: totalPrice,
    currency: "UAH",
    productName: ["Vinyl Record"],
    productPrice: [500],
    productCount: [1],
    merchantDomainName: "localhost",
  };

  const res = await fetch("/api/payment", {
    method: "POST",
    body: JSON.stringify(order),
  });

  const { merchantAccount, merchantSignature } = await res.json();


  const wayforpay = new (window as any).Wayforpay();

  wayforpay.run(
    {
      ...order,
      merchantAccount,
      merchantSignature,
      authorizationType: "SimpleSignature",
      clientEmail: "test@email.com",
    },
    (success: any) => {
      console.log("WAYFORPAY SUCCESS", success);
      writeOrderToDB();

    },
    (error: any) => {
      console.error("WAYFORPAY ERROR", error);
    }
  );
};

  return (
    <>
      <Script
        src="https://secure.wayforpay.com/server/pay-widget.js"
        strategy="afterInteractive"
      />

      <Button onClick={pay}>Pay</Button>
    </>
  );
}