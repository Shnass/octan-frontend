"use client";
import H2 from "../general/H2"
import NP from "./NP"
import Link from "next/link"
import Button from "../general/Button"
import H3 from "../general/H3"
import InputComplex from "../general/InputComplex"
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Delivery() {
  const { register, formState: { errors } } = useForm();
  const [ isUa, setIsUa ] = useState<boolean | null>(null);
  const [ isNP, setIsNP ] = useState<boolean | null>(null);
  
  function toggleCountry(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value);
    setIsUa(e.target.value === 'y' ? true : false)
  }
  function toggleMethodUA(e:React.ChangeEvent<HTMLInputElement>){
    setIsNP(e.target.value === 'np' ? true : false)
  }

  return (
    <div>
        <H2>Delivery</H2>
        <H3>Where you are from</H3>

        <InputComplex 
          onChange={(e)=>toggleCountry(e)}
          type="radio" 
          label="Ukraine" 
          value="y"
          registration={register("isUkraine", { required: true })}
        />
        <InputComplex 
          onChange={(e)=>toggleCountry(e)}
          type="radio" 
          label="Elsewhere" 
          value="n"
          registration={register("isUkraine", { required: true })}
        />

        {isUa && (
          <>
          <hr/>
          <InputComplex 
            onChange={e=>toggleMethodUA(e)}
            label="Self-pickup" 
            type="radio" 
            value="selfPickup" 
            registration={register("deliveryType", { required: true })}
            />
          <InputComplex 
            onChange={e=>toggleMethodUA(e)}
            label="Nova Poshta" 
            type="radio" 
            value="np" 
            registration={register("deliveryType", { required: true })}
            />
          </>
        )}
        {isUa && isNP && <><hr/><NP /></>}

        <div className="flex justify-between items-center">
            <Link href="?stage=personal-data">Go Back</Link>
            <Button href="?stage=payment">Payment</Button>
        </div>        
    </div>
  )
}
