"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import StoreItemsList from "@/components/store/StoreItemsList"
import { Release } from "@/types/release"

export default function SearchClient({
    initialReleases,
    initialQuery
}:{initialReleases: Release[], initialQuery: string}) {
    const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState(initialQuery)

  function submitSearch() {
    const params = new URLSearchParams(searchParams.toString())

    if (query) params.set("q", query)
    else params.delete("q")

    router.push(`/shop/search?${params.toString()}`)
  }

  return (
    <>
      {/* search UI */}
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={submitSearch}>Search</button>

      {/* results */}
      <StoreItemsList items={initialReleases} />
    </>
  )
}
