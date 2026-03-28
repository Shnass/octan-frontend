import { persist, createJSONStorage } from 'zustand/middleware'
import { create } from "zustand";
import { Currency } from '@/types/currency';

interface CurrencyState {
    currency: Currency;
    setCurrency: (c:Currency)=>void
}

export const useCurrencyStore = create<CurrencyState>()(persist((set, get) => ({
    currency: 'eur',
    setCurrency: (v) => {
        set({currency:v})
    }
}), {
    name: 'currency-storage',
    storage: createJSONStorage(() => localStorage),
}))