import { Releases } from "@/types/releases";
import StoreItemCard from "./StoreItemCard";
import Pagination from "./Pagination";
import { Release } from "@/types/release";

type StoreItemsListProps = { items: Releases, 
    pages?: number, 
    currentPage?: number,
    showPagination?: boolean,
    perRow?: number 
  }

export default function StoreItemsList(
  { items, pages=1, currentPage=1, showPagination = true, perRow = 5 } : StoreItemsListProps) {
  return (
    <>
      <div className="flex wrap-normal flex-wrap -mx-3 w-full">
        {items.map((item:Release) => <StoreItemCard key={item.id} item={item} perRow={perRow}/>)}
      </div>
      {(showPagination && pages>1) && <Pagination totalPages={pages} currentPage={currentPage} />}
    </>
  );
}