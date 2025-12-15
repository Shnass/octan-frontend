import { releases } from "@/data/releases";
import StoreItemsList from "@/components/store/StoreItemsList";

export default async function FilteredByGenre({params}: {params: Promise<{ slug: string }>;}) {
    const { slug } = await params;

    const releasesFiltered = releases.filter(release => {
        return release.genre.map(genre => genre.toLowerCase().replace(/\s+/g, '-')).includes(slug)
    })

    return (
        <>
            <h1>Genre: {slug}</h1>
            <StoreItemsList items={releasesFiltered} />
        </>
    )
}