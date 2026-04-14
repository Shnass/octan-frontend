import { PaypalProvider } from "@/components/checkout/PayPalProvider";
import RequireNonEmptyCart from "@/components/checkout/RequireNonEmptyCart"

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RequireNonEmptyCart>
      <PaypalProvider>
          {children}
      </PaypalProvider>
    </RequireNonEmptyCart>
  )
}
