import Link from "next/link";

export default function Navi() {
    return (
        <ul className="flex gap-3">
            <li><Link href="/store">Store</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
        </ul>        
    )    
}