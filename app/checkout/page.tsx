"use client";

import Script from "next/script";
import crypto from "crypto";
import { useCartStore } from "@/app/store/cart.store";

export default  function CheckoutPage() {

const cartState = useCartStore();
const { totalPrice, totalItems } = cartState.getSummary();

console.log(totalPrice,totalItems);

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

  console.log("FROM BACKEND", merchantAccount, merchantSignature);

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

      <button onClick={pay}>Оплатити</button>
    </>
  );
}