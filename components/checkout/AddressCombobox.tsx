import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { inputStyles } from "@/styles/ui";

type AddressComboboxProps<T> = {
    value: T | null,
    onChange: (city:T) => void,
    onClose: () => void,
    inpValue: (city:T) => string,
    setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
    list: T[]
    disabled?: boolean
}

export default function AddressCombobox<T>({value, onChange, onClose, inpValue, setInputValue, list, disabled}: AddressComboboxProps<T>) {

function changeHandler<T>(value:T, onChange:(x:T)=>void, onClose:()=>void) {
  onChange(value);
  onClose();
}

  return (
        
        <Combobox 
            value={value}
            as="div"
            className="max-w-80 w-full"
            onChange={(arg) => changeHandler(arg, onChange, onClose)} 
            onClose={onClose}> 
            <ComboboxInput
                aria-label="Assignee"
                autoComplete="nope"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                displayValue={inpValue} 
                onChange={setInputValue} 
                className={inputStyles}
                disabled={disabled}
            />

            
            <ComboboxOptions 
                anchor="bottom"
                data-open="true"
                className="mt-1 max-h-60 w-(--input-width) overflow-auto rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                {list.map((item:T, idx) => (
                <ComboboxOption key={idx} value={item}
                className={({ focus }) =>
                    `cursor-pointer select-none py-2 px-3 transition ${
                        focus ? "bg-blue-50 text-blue-900" : "text-gray-900"
                    }`
            }>
                    {inpValue(item as T)}
                </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>



  )
}
