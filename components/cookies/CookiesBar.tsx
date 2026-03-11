"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const acceptAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        analytics: true,
        marketing: true,
        functional: true,
      })
    )
    setVisible(false)
  }

  const rejectAll = () => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify({
        analytics: false,
        marketing: false,
        functional: false,
      })
    )
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 container bg-white rounded text-black p-4 flex justify-between text-lg max-w-screen-xl shadow-2xl">
      <p>
        We use <Link href="/cookies-policy" className="underline cursor-pointer">cookies</Link> to analyze traffic and improve the website.
      </p>

      <div className="flex gap-4">
        <button onClick={acceptAll} className="underline cursor-pointer">Accept</button>
        <button onClick={rejectAll} className="underline cursor-pointer">Reject</button>
      </div>
    </div>
  )
}