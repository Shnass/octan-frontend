import { Geist, Geist_Mono, Julius_Sans_One, Contrail_One } from "next/font/google";
import Header from "./Header";
import Head from "next/head";

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

const contrail = Contrail_One({
    variable: "--font-contrail",
    subsets: ["latin"],
    weight: "400"
});

export default function Container({children, showBanner = false}: {children: React.ReactNode, showBanner?: boolean}) {
    return (
        <html lang="en" className="bg-bg">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body className={`${geistSans.variable} ${contrail.variable} ${julius.variable} ${geistMono.variable} antialiased` }>
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