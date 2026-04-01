"use client";

import { useCartStore } from "@/app/store/cart.store"
import { useRouter } from "next/navigation"

export default function RequireNonEmptyCart({ children }:{ children:React.ReactNode}){
  const router = useRouter()
  const isNotEmpty = useCartStore(state => state.items.length > 0)

  if (!isNotEmpty) {
    router.replace('/cart/')
    return null
  }

  return children
}