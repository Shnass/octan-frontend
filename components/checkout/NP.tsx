"use client";

import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { NPCity, NPDepartment, NPFetchArguments } from '@/types/np'
import AddressCombobox from "./AddressCombobox";
import InputComplex from "../general/InputComplex";

// to do: implement useQuery



async function getCities<T>(
    input: string, 
    method: string = "getCities", 
    limit: number = 3, 
    callback: (x:T[])=>void, 
    userCity?: NPCity) {

    if(input.length<limit) {
        callback([]);
        return;
    }

    const bodyArgs:NPFetchArguments = {
        input: input,
        method: method,
        Limit: 20
    }

    if(userCity && userCity.Description !== "") {
        bodyArgs.CityName = userCity.Description;
        bodyArgs.CityRef = userCity.Ref
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
    const initialCity: NPCity = {
        Ref: "00000000-0000-0000-0000-000000000000",
        Description: "",
        AreaDescription: ""
    }
    const initialDepartment: NPDepartment = {
        Description: "",
        CityDescription: "",
        ShortAddress: "",
        Ref: "00000000-0000-0000-0000-000000000000"
    }


    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');
    const [userCity, setUserCity] = useState(initialCity)
    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState('');
    const [userDepartment, setUserDepartment] = useState<NPDepartment>(initialDepartment)

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
        <InputComplex label="City">
        <AddressCombobox 
            value={userCity}
            onChange={(city:NPCity) => setUserCity(city as NPCity)}
            onClose={() => setCity('')}
            inpValue={(city:NPCity | null) => city?.Description ? `${city.Description} - ${'AreaDescription' in city ? city.AreaDescription : ''}${'CityDescription' in city ? city.CityDescription : ''}` : ''}
            setInputValue={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target
                setCity(value)
            }}
            list={cities}
            disabled={false}
        />
        </InputComplex>

        <InputComplex label="Department">
        <AddressCombobox 
            value={userDepartment}
            onChange={(department:NPDepartment) => setUserDepartment(department as NPDepartment)}
            onClose={() => setDepartment('')}
            inpValue={(department:NPDepartment | null) => department?.Description ? `${department.Description} - ${'CityDescription' in department ? department.CityDescription : ''}` : ''}
            setInputValue={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target
                setDepartment(value)
            }}
            list={departments}
            disabled={userCity===null || userCity.Description === ""}
        />
        </InputComplex>

    </div>
  )
}
