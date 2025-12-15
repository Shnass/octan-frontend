import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Container({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100` }>
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="min-h-screen font-sans dark:bg-black flex flex-col">
                {children}
                </div>
            </div>
            </body>
        </html>
    )
}