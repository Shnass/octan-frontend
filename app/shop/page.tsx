import StorePage from "@/components/store/StorePage";

type PageProps = {
  params: { slug: string }
  searchParams: { page?: number | undefined }
}

export default async function Store({searchParams, params} : PageProps) {
    return <StorePage searchParams={searchParams} />
}
