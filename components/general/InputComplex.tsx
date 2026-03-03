import { UseFormRegisterReturn } from "react-hook-form"
import { inputStyles } from "@/styles/ui";
import clsx from 'clsx';

type InputComplexProps = {
    id: string;
    label: string;
    error?: string;
    errorShown?: boolean;
    type?: string;
    registration: UseFormRegisterReturn
}
export default function InputComplex({
    id,
    label,
    error,
    errorShown,
    registration,
    type = "text",
}: InputComplexProps) {

  const isCheckbox = type === "checkbox" || type === "radio";

  return (
    <div className={clsx("mb-8 flex gap-2 items-center relative", {"flex-row-reverse": isCheckbox})}>
        <label 
          htmlFor={id} 
          className={clsx({ "grow": isCheckbox, "w-40": !isCheckbox })}>
            {label}
        </label>
        <div className={clsx({"w-full": !isCheckbox})}>
          <input id={id} type={type} {...registration} className={clsx({ [inputStyles]: !isCheckbox })} />
        {errorShown && <div className={clsx("text-red-500 text-sm absolute", {"right-0": !isCheckbox})}>{error}</div>}
        </div>
    </div>
  )
}
