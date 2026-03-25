import { Release } from "@/types/release";
import { Order } from "@/types/order";
import { persist, createJSONStorage } from 'zustand/middleware'
import { create } from "zustand";
import createOrder from "@/db/orders";

interface OrderState {
    order: Order;
    setOrderValue: <K extends keyof Order>(key: K, value: Order[K]) => void;
    writeOrderToDB: () => void;
    processStock: (items: Release[]) => void;
}

export const useOrderStore = create<OrderState>()(persist((set, get) => ({
    order: {
        items: [],
        address: '',
        buyer: {},
        shipping: {
            name:'pickup',
            cost:0
        },
        payment: 'iban',
        status: 'pending',
        sum: 0       
    },
    setOrderValue: (key, value) =>
        set((state) => ({
        order: {
            ...state.order,
            [key]: value,
        }
    })),
    writeOrderToDB: () => {
        const {order} = get()
        createOrder(order);
    },
    processStock: () => {
        const {order} = get();
        if(order !== null){
            console.log(order.items)
        }
    }
}), {
    name: 'order-storage',
    storage: createJSONStorage(() => localStorage),
}))