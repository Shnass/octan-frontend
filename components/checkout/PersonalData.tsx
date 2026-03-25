"use client";
import { useForm } from "react-hook-form";
import { useOrderStore } from "@/app/store/order.store";
import InputComplex from "../general/InputComplex";
import Button from "../general/Button";
import Link from "next/link";
import H2 from "../general/H2";
import { Person } from "@/types/person";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

import { useCartStore } from "@/app/store/cart.store";



export default function PersonalData() {
    
  const router = useRouter();

  const orderState = useOrderStore();
  const cartState = useCartStore();
  const { items, getSummary } = cartState;
  const { order, setOrderValue, writeOrderToDB} = orderState;
  const {totalPrice} = getSummary();
  
  const { name, lastName, email, phone } = order.buyer;
  const { register, handleSubmit, formState: { errors } } = useForm<Person>({
    defaultValues:{
        name, lastName, email, phone
    }
  });


  useEffect(()=>{
    console.log(order)
  },[order])

  const onSubmit = (data: Person) => {
    const buyer = data;
    setOrderValue('buyer',buyer);
    setOrderValue('items', items);
    setOrderValue('sum', totalPrice);
    //writeOrderToDB();
    router.push('/checkout?stage=shipping');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <H2>Personal Data</H2>
        <InputComplex 
            id={"name"}
            label={"First Name"}
            error={"First name is required"}
            registration={register("name", { required: true })}
            errorShown={!!errors.name}
        />
        <InputComplex 
            id={"lastName"}
            label={"Last Name"}
            error={"Last name is required"}
            registration={register("lastName", { required: true })}
            errorShown={!!errors.lastName}
        />
        <InputComplex 
            id={"email"}
            label={"Email"}
            registration={register("email", {
                required: "Email is required", 
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
            })}
            error={errors.email?.message as string}
            errorShown={!!errors.email}
        />
        <InputComplex 
            id={"phone"}
            label={"Phone"}
            registration={register("phone", { required: false, pattern: {
                value: /^\+?[0-9]\d{1,14}$/,
                message: "Invalid phone number"
            }})}
            error={errors.phone?.message as string}
            errorShown={!!errors.phone}
        />
        <InputComplex 
            id={"subscriptionOptIn"}
            label={"I want to receive the newsletter"}
            registration={register("subscriptionOptIn", { required: false })}
            type={"checkbox"}
        />
        <InputComplex 
            id={"termsOptIn"}
            label={"I have read and agree to the Terms and Conditions"}
            registration={register("termsOptIn", { required: true })}
            error={"You must agree to the terms and conditions"}
            errorShown={!!errors.termsOptIn}
            type={"checkbox"}
        />
        <div className="flex justify-between items-center">
            <Link href="/cart">Back to Cart</Link>
            <Button type="submit">Submit</Button>
        </div>
    </form>
  )
}
