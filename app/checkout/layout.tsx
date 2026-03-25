import { PaypalProvider } from "@/components/checkout/PayPalProvider";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PaypalProvider>
        {children}
    </PaypalProvider>
  )
}
