import { Geist, Geist_Mono, Julius_Sans_One } from "next/font/google";
import Header from "./Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const julius = Julius_Sans_One({
    variable: "--font-julis",
    subsets: ["latin"],
    weight: "400"
});

export default function Container({children, showBanner = false}: {children: React.ReactNode, showBanner?: boolean}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${julius.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100` }>
            <div className="max-w-screen-2xl mx-auto px-4">
                <Header />
            </div>
            {
                showBanner &&
                <div>BANNER<br/>BANNER<br/>BANNER<br/>BANNER<br/>BANNER<br/></div>
            }

            {children}
            </body>
        </html>
    )
}