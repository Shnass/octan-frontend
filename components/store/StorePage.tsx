import GenreNavi from "./GenreNavi";
import StoreItemsList from "./StoreItemsList";
import { genres } from "@/data/genres";
import listRecords from "@/db/records";

export default async function StorePage(
    {searchParams={}, routeParams={}}:
    {
      searchParams?: {page?:number},
      routeParams?: {slug?:string}
    }
) {
  const queryParams = searchParams;
  const {slug} = routeParams;
  const currentPage = Number(queryParams?.page || 1)

  const queryResult = await listRecords({page:currentPage, genre: slug});
  if(!queryResult) return <div>Error loading records</div>;

  const { releases, pages } = queryResult;
  return (
    <>
      <GenreNavi genres={genres} />
      <StoreItemsList items={releases} currentPage={currentPage} pages={pages}/>
    </>
  );
}
