"use client";

import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

// to do: implement useQuery


type NPCity = {
    Ref: string,
    Description: string,
    AreaDescription: string
}
type NPDepartment = {
    Description: string,
    CityDescription: string,
    ShortAddress: string,
    Ref: string
}

type NPFetchArguments = {
    input: string,
    method: string,
    cityName?: string,
    cityRef?: string

}

async function getCities(
    input: string, 
    method: string = "getCities", 
    limit: number = 3, 
    callback: (x)=>void, 
    userCity: NPCity | null = null) {

    if(input.length<limit) {
        callback([]);
        return;
    }

    const bodyArgs:NPFetchArguments = {
        input: input,
        method: method
    }

    if(userCity!==null){
        bodyArgs.cityName = userCity.Description;
        bodyArgs.cityRef = userCity.Ref
    }
    
    const cities = await fetch("/api/np", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyArgs)
    })
    const citiesJSON = await cities.json();
    callback(citiesJSON.data);
}


export default function NP() {
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');
    const [userCity, setUserCity] = useState<NPCity | null>(null)
    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState('');
    const [userDepartment, setUserDepartment] = useState<NPDepartment | null>(null)

    const debounceCity = useDebounce(city, 300)
    const debounceDepartment = useDebounce(department, 300)

    useEffect(() => {
        getCities(debounceCity, 'getCities', 3, setCities);
    }, [debounceCity]);

    useEffect(() => {
        getCities(debounceDepartment, 'getWarehouses', 1, setDepartments, userCity)
    }, [debounceDepartment])

  return (
    <div>
        {/* <input type="text" className="border" id="NPCity" value={city} onChange={(e)=>setCity(e.target.value)} /> */}
        <input type="text" className="border" id="NPIndex" value={department} onChange={(e)=>setDepartment(e.target.value)} />

        
        
        <Combobox 
            value={userCity} 
            as="div"
            className="w-80"
            onChange={(v)=>{setUserCity(v);}} 
            onClose={() => setCity('')}>
            <ComboboxInput
                aria-label="Assignee"
                autoComplete="nope"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                displayValue={(city:NPCity) => city ? `${city.Description} - ${city.AreaDescription}` : ''}
                onChange={(e)=>{
                    setCity(e.target.value)
                }}
                className="w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

            
            <ComboboxOptions 
                anchor="bottom"
                data-open="true"
                className="mt-1 max-h-60 w-(--input-width) overflow-auto rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                {cities.map((city:NPCity) => (
                <ComboboxOption key={city.Ref} value={city}
                className={({ active }) =>
                    `cursor-pointer select-none py-2 px-3 transition ${
                        active ? "bg-blue-50 text-blue-900" : "text-gray-900"
                    }`
            }>
                    {city.Description} - {city.AreaDescription}
                </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>





        {/*
            cities.length>0 && <ul>
                {
                    cities.map((city:NPCity) => <li key={city.Ref} onClick={(e)=>{
                        setCity(city.Description);
                        setUserCity(city);
                        setCities([])
                    }}>
                        {city.Description} - {city.AreaDescription}
                    </li>)
                }
            </ul>
        */}
        {
            departments.length>0 && <ul>
                {
                    departments.map((department:NPDepartment) => <li key={department.Ref} onClick={(e)=>{
                        setDepartment(department.Description)
                        setUserDepartment(department);
                        setDepartments([])
                    }}>
                        {department.Description}
                    </li>)
                }
            </ul>
        }

    </div>
  )
}
