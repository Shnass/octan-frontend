"use client";

import { useOrderStore } from "@/app/store/order.store"
import { useRouter } from "next/navigation"

export default function RequirePersonalInfo({ children }:{ children:React.ReactNode}){
  const router = useRouter()
  const isComplete = useOrderStore(state => state.isPersonalDataComplete())

  if (!isComplete) {
    router.replace('/checkout/?stage=personal')
    return null
  }

  return children
}