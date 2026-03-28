"use client"

import { useCurrencyStore } from "@/app/store/currency.store"
import { currencies, Currency, currencySigns } from "@/types/currency"

export default function CurrencySelect() {
  const currencyState = useCurrencyStore();
  const {currency, setCurrency} = currencyState;
  function handleClick(c:Currency){
    setCurrency(c);
  }
  return (
    <div className="-top-6 relative flex gap-1 ml-4">
        {currencies.map(c=><button 
            key={c} 
            onClick={()=>handleClick(c)}
            className={c===currency?'underline font-bold':''}
        >{currencySigns[c]}</button>)}
    </div>
  )
}
