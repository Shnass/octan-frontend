import Link from "next/link";
import NaviSection from "./header/NaviSection";

export default function Navi() {
    return (
        <NaviSection>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
        </NaviSection>        
    )    
}