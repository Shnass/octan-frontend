import StoreItemsList from "./StoreItemsList";
import listRecords from "@/db/records";

export default async function StorePage(
    {searchParams={}, routeParams={}}:
    {
      searchParams?: {page?:number, q?:string},
      routeParams?: {slug?:string}
    }
) {
  const queryParams = await searchParams;
  const {slug} = await routeParams;
  const currentPage = Number(queryParams?.page || 1)
  const query = queryParams?.q || "";

  
  const queryResult = await listRecords({page:currentPage, genre: slug, query});
  if(!queryResult) return <div>Error loading records</div>;

  const { releases, pages } = queryResult;
  return (
    <>
      <StoreItemsList items={releases} currentPage={currentPage} pages={pages}/>
    </>
  );
}
