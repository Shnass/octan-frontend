import { NextResponse } from "next/server";
import { createPaypalOrder } from "@/lib/paypal";

export async function POST(req: Request) {


  try {
    const { cartId } = await req.json();

    // 🔐 IMPORTANT: calculate on server
    const {amount, currency} = await calculateCartTotal(cartId);
    const order = await createPaypalOrder(amount.toFixed(2), currency);
    //return ;
    return NextResponse.json({id: order.id});
  } catch (e) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}

// mock example
async function calculateCartTotal(cartId: string) {
  // fetch from DB instead
  return {amount: 0.99, currency: 'USD'};
}