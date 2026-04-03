// app/api/pay/test/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const secretKey = process.env.WAYFORPAY_SECRET_KEY_TEST!;
  const merchantAccount = process.env.WAYFORPAY_MERCHANT_ACCOUNT_TEST!;

  const signatureString = [
    merchantAccount,
    body.merchantDomainName,
    body.orderReference,
    body.orderDate,
    body.amount,
    body.currency,
    ...body.productName,
    ...body.productCount,
    ...body.productPrice,
  ].join(";");



  const merchantSignature = crypto
    .createHmac("md5", secretKey)
    .update(signatureString)
    .digest("hex");

  return NextResponse.json({
    merchantAccount,
    merchantSignature,
  });
}