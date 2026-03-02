import listRecords from "@/db/records"
import SearchClient from "./SearchClient"

type PageProps = {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function Page({ searchParams }: PageProps) {
    const params = await searchParams

  const records = await listRecords({
    search: params.q,
  })

  return (
    <SearchClient
      initialRecords={records}
      initialQuery={params.q ?? ""}
    />
  )
}