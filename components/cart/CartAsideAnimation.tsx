"use client";

import { useCartStore } from "@/app/store/cart.store";
import { motion, AnimatePresence } from "framer-motion";
import { ReactElement } from "react";

export default function CartAsideAnimation({children}:{children:ReactElement}) {
    const cartState = useCartStore();
    const {toggleCart, isCartShown } = cartState;
    return (
        <AnimatePresence>{isCartShown && 
            <>
                <motion.div
                    className="bg-black w-full h-full fixed inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    onClick={()=>toggleCart()}
                />
               <motion.div
                    className="fixed right-0 top-0 bg-white w-120 h-full p-8 flex flex-col"
                    initial={{ translateX: `calc(100% + 20px)` }}
                    animate={{ translateX: 0 }}
                    exit={{ translateX: `calc(100% + 20px)` }}
                    transition={{
                        type: "tween",
                        ease: "easeInOut",
                        duration: 0.3,
                    }}>
                    {children}
                </motion.div>
        </>
        }
        </AnimatePresence>
  )
}
