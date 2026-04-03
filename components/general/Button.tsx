"use client"

import Link from "next/link";
import clsx from "clsx";

const buttonStyles = "px-4 py-2 bg-octanred text-white hover:bg-octanblack transition cursor-pointer";

type ButtonProps = {
    children: React.ReactNode, 
    onClick?: () => void, 
    href?: string, 
    disabled?: boolean,
    type?: "button" | "submit" | "reset" 
} & React.ButtonHTMLAttributes<HTMLButtonElement> 
  & React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Button({ children, onClick, disabled=false, href, ...props }: ButtonProps) {
    return (
        (href) ? <Link
            href={href}
            className={clsx(buttonStyles, { "opacity-50 cursor-not-allowed": disabled })}
            {...props}
        >
            {children}
        </Link> : <button
            className={clsx(buttonStyles, { "opacity-50 cursor-not-allowed": disabled })}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}
