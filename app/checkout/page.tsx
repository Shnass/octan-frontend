import WayForPay from "@/components/checkout/WayForPay";
import PersonalData from "@/components/checkout/PersonalData";
import Delivery from "@/components/checkout/Delivery";
import OrderSummary from "@/components/checkout/OrderSummary";

type PageProps = {
  searchParams: Promise<{
    stage?: string
  }>
}


export default async function CheckoutPage({searchParams}: PageProps) {
  const params = await searchParams
  const stage = params.stage ?? "personal-data";

  return (
    <div className="flex gap-12">
      <div className="w-2/5">
        {stage === "personal-data" && <PersonalData />}
        {stage === "shipping" && <Delivery />}
        {stage === "payment" && <WayForPay />}
      </div>
      <div className="w-3/5">
        <OrderSummary />
      </div>
    </div>
  )
}
