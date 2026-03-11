import StorePage from "@/components/store/StorePage";

type PageProps = {
  searchParams: { page?: number | undefined; q?: string | undefined }
}

export default async function Store({searchParams} : PageProps) {
    return <StorePage searchParams={searchParams} />
}
