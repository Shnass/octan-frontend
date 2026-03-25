"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import Image from "next/image"

export default function SearchClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState("")
  
  function submitSearch() {
    const params = new URLSearchParams(searchParams.toString())
    if (query) params.set("q", query)
      else params.delete("q")
    router.push(`/shop/search?${params.toString()}`)
  }
  
  return (
    <form onSubmit={(e) => {e.preventDefault(); submitSearch();}} className="flex items-center border mr-6 px-2 rounded ml-auto">
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">
        <Image src="/search.svg" alt="Search" width={24} height={24} />
      </button>
    </form>
  )
}
