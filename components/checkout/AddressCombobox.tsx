import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'

export default function AddressCombobox() {
  return (
        
        <Combobox 
            value={initialValue} //userCity 
            as="div"
            className="w-80"
            onChange={onChange} //setUserCity
            onClose={onClose}> //setCity('')
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



  )
}
