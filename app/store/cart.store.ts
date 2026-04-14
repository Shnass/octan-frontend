import { Release } from "@/types/release";
import { persist, createJSONStorage } from 'zustand/middleware'
import { create } from "zustand";
import { Currency, currencies } from "@/types/currency";

interface CartState {
    items: Release[];
    addToCart: (release: Release) => void;
    removeFromCart: (releaseId: number) => void;
    isCartShown: boolean;
    toggleCart: () => void;
    clearCart: () => void;
    getSummary: () => { totalItems: number; totalPrice: Record<Currency, number> };
}

function totalPrice(cur:Currency, items:Release[]){
    return items.reduce((a:number,c:Release)=>a+Number(c.prices[cur]), 0)
}
function buildTotals(items: Release[]) {
  return Object.fromEntries(
    currencies.map(c => [c, totalPrice(c, items)])
  ) as Record<Currency, number>;
}

export const useCartStore = create<CartState>()(persist((set, get) => ({
    items: [],
    addToCart: (release: Release) => set((state) => ({
        items: [...state.items, release]
    })),
    isCartShown: false,
    toggleCart: ()=>set((state)=>({
        isCartShown: !state.isCartShown
    })),
    getSummary: () =>{
        const { items } = get();
        const qty = items.length;
        const price = buildTotals(items);
        return {
            totalItems: qty,
            totalPrice: price
        }
    },
    removeFromCart: (releaseId: number) => set((state) => ({
        items: state.items.filter(item => item.id !== releaseId)
    })),
    clearCart: () => set({items: []})
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
    }))