import NP from "@/components/checkout/NP";
import WayForPay from "@/components/checkout/WayForPay";
import PersonalData from "@/components/checkout/PersonalData";


export default function CheckoutPage() {
  return (
    <div>

      <PersonalData />

      <NP />
      <WayForPay />
    </div>
  )
}
