import { Records } from "@/types/records";
import StoreItemCard from "./StoreItemCard";

export default function StoreItemsList({ items }: { items: Records }) {
  return (
    <>
      <div className="flex wrap-normal">
      {items.map((item) => <StoreItemCard key={item.id} item={item} />)}
      </div>
    </>
  );
}