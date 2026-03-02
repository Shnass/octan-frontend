import Link from "next/link";

export default function Navi() {
    return (
        <ul className="flex gap-3 uppercase text-sm relative -top-5 font-roboto">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
        </ul>        
    )    
}