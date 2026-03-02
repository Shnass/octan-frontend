import { Release } from "@/types/release";
import { persist, createJSONStorage } from 'zustand/middleware'
import { create } from "zustand";

interface CartState {
    items: Release[];
    addToCart: (release: Release) => void;
    removeFromCart: (releaseId: number) => void;
    clearCart: () => void;
    getSummary: () => { totalItems: number; totalPrice: number };
}

export const useCartStore = create<CartState>()(persist((set, get) => ({
    items: [],
    addToCart: (release: Release) => set((state) => ({
        items: [...state.items, release]
    })),
    getSummary: () =>{
        const { items } = get();
        const qty = items.length;
        const price = items.reduce((a:number,c:Release)=>a+Number(c.price), 0)
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