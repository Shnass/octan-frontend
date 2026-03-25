import { NextResponse } from "next/server";
import { capturePaypalOrder } from "@/lib/paypal";

export async function POST(req: Request) {
  try {
    const { orderId } = await req.json();

    const captureData = await capturePaypalOrder(orderId);

    const status = captureData.status;

    if (status !== "COMPLETED") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    // ✅ mark order as paid in DB
    // ✅ remove items from inventory
    // ✅ trigger Discogs removal (perfect place for your case)

    return NextResponse.json({ success: true, data: captureData });
  } catch (e) {
    return NextResponse.json({ error: "Capture failed" }, { status: 500 });
  }
}