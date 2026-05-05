"use client"
import { useCurrencyStore } from "@/app/store/currency.store"
import { Prices } from "@/types/prices";
import { currencySigns } from "@/types/currency";

export default function Price({prices}:{prices:Prices}) {
  const currencyState = useCurrencyStore();
  const {currency} = currencyState;
  console.log(currency);
  return (
    <span>
      {currencySigns[currency]}{prices[currency]}
    </span>
  )
}
