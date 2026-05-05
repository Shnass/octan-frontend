"use client"

import clsx from "clsx";
import Button from "./Button";

type HeaderButtonProps = {
    children: React.ReactNode, 
    onClick?: () => void, 
    disabled?: boolean,
    type?: "button" | "submit" | "reset",
    points?: number, 
} & React.ButtonHTMLAttributes<HTMLButtonElement> 
  & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function HeaderButton({ children, onClick, disabled=false, points=0 }: HeaderButtonProps) {
    return (
        <Button 
            className={
                clsx(`inline-flex shadow-lg/40 shadow-black items-center justify-center cursor-pointer relative bg-accent text-center rounded-4xl w-10 h-10`, 
                    disabled && "pointer-events-none opacity-50")
            }
            aria-disabled={disabled}
            onClick={()=>{
                if(onClick) onClick(); 
            }}
            tabIndex={disabled ? -1 : 0}
        >
            {children}
            {points>0 && 
                <span className="size-4 bg-red-500 absolute rounded-full text-sm/4 text-white text-center -top-2 -right-2">
                    {points}
                </span>
            }
        </Button>
    );
}
