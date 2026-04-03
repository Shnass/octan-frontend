import StoreItemsList from "@/components/shop/StoreItemsList";
import listRecords from "@/db/records";
import { Release } from "@/types/release";

export default async function Home() {
  const fetchPlaceholder : {releases: Release[], pages: number} = { releases: [], pages: 0 }

  const items = await listRecords({}) ?? fetchPlaceholder;
  const { releases } = items;
  return (
    <>
      <StoreItemsList items={releases} showPagination={false}/>
    </>
  );
}
