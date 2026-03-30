import { Release } from "@/types/release";
import { Order } from "@/types/order";
import { persist, createJSONStorage } from 'zustand/middleware'
import { create } from "zustand";
import createOrder from "@/db/orders";
import { Person } from "@/types/person";

interface OrderState {
    order: Order;
    buyer: Person;
    setOrderValue: <K extends keyof Order>(key: K, value: Order[K]) => void;
    writeOrderToDB: () => void;
    processStock: (items: Release[]) => void;
    isPersonalDataComplete: () => boolean;
    isDeliveryDataComplete: () => void;
}

export const useOrderStore = create<OrderState>()(persist((set, get) => ({
    order: {
        items: [],
        address: '',
        country:'',
        buyer: {},
        shipping: {
            name:'pickup',
            cost:0
        },
        payment: 'iban',
        status: 'pending',
        sum: 0       
    },
    buyer:{},
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
    },
    isPersonalDataComplete: () => {
        const {order} = get();
        const {buyer} = order;

        return Boolean(
            buyer.email?.trim() &&
            buyer.name?.trim() &&
            buyer.lastName?.trim() &&
            buyer.termsOptIn
        )
    },
    isDeliveryDataComplete: () => {
        console.log('kek')
    }
}), {
    name: 'order-storage',
    partialize: (state) => ({ buyer: state.order.buyer }),
    storage: createJSONStorage(() => localStorage),
}))