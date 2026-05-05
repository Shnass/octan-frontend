import { Releases } from "@/types/releases";
import StoreItemCard from "./StoreItemCard";
import Pagination from "./Pagination";
import { Release } from "@/types/release";
import H0 from "../general/H0";
import clsx from "clsx";

type StoreItemsListProps = { items: Releases, 
    pages?: number, 
    currentPage?: number,
    showPagination?: boolean,
    perRow?: number,
    title?: string | null
    styles?: string
  }

export default function StoreItemsList(
  { items, pages=1, currentPage=1, showPagination = true, perRow = 5, title=null, styles='' } : StoreItemsListProps) {
  return (
    <>
      {title !== null && <H0>{title}</H0>}
      <div className={clsx(`flex wrap-normal flex-wrap -mx-3 w-full`, styles)}>
        {items.map((item:Release) => <StoreItemCard key={item.id} item={item} perRow={perRow}/>)}
      </div>
      {(showPagination && pages>1) && <Pagination totalPages={pages} currentPage={currentPage} />}
    </>
  );
}