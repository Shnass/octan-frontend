import { UseFormRegisterReturn } from "react-hook-form"
import { inputStyles } from "@/styles/ui";
import clsx from 'clsx';

type InputComplexProps = {
    label: string;
    id?: string;
    error?: string;
    errorShown?: boolean;
    value?: string;
    type?: string;
    registration?: UseFormRegisterReturn;
    children?: React.ReactNode;
}  & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputComplex({
    id,
    label,
    error,
    value,
    errorShown,
    registration,
    children,
    type = "text",
    ...rest
}: InputComplexProps) {

  const isCheckbox = type === "checkbox" || type === "radio";
  if(isCheckbox && !id && registration){
    id=`${registration.name}-${value}`
  }

  return (
    <div className={clsx("mb-6 flex gap-2 items-center relative", {"flex-row-reverse": isCheckbox})}>
        <label 
          htmlFor={id} 
          className={clsx({ "grow": isCheckbox, "w-40": !isCheckbox })}>
            {label}
        </label>
        <div className={clsx({"w-full": !isCheckbox})}>
          {children ? children : <input id={id} type={type} {...registration} value={value} className={clsx({ [inputStyles]: !isCheckbox })} {...rest}/>}
        {errorShown && <div className={clsx("text-red-500 text-sm absolute", {"right-0": !isCheckbox})}>{error}</div>}
        </div>
    </div>
  )
}
