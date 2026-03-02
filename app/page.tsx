import GenreNavi from "@/components/store/GenreNavi";
import StoreItemsList from "@/components/store/StoreItemsList";
import { genres } from "@/data/genres";
import listRecords from "@/db/records";
import { Release } from "@/types/release";

export default async function Home() {
  const fetchPlaceholder : {releases: Release[], pages: number} = { releases: [], pages: 0 }

  const items = await listRecords({}) ?? fetchPlaceholder;
  const { releases } = items;
  return (
    <>
      <GenreNavi genres={genres} />
      <StoreItemsList items={releases} showPagination={false}/>
    </>
  );
}
