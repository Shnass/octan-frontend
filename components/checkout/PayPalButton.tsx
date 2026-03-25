"use client";

import { PayPalButtons } from "@paypal/react-paypal-js";

export function PaypalButton({ cartId }: { cartId: string }) {
  return (
    <PayPalButtons
      createOrder={async () => {
        const res = await fetch("/api/paypal/create-order", {
          method: "POST",
          body: JSON.stringify({ cartId }),
        });

        const data = await res.json();

        console.log(data);

        return data.id;
      }}
      onApprove={async (data) => {
        await fetch("/api/paypal/capture-order", {
          method: "POST",
          body: JSON.stringify({ orderId: data.orderID }),
        });

        // redirect or show success
        window.location.href = "/success";
      }}
      onError={(err) => {
        console.error(err);
      }}
    />
  );
}