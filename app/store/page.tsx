import Filter from "@/components/store/Filter";
import GenreNavi from "@/components/store/GenreNavi";
import StoreItemsList from "@/components/store/StoreItemsList";
import { genres } from "@/data/genres";
import { releases } from "@/data/releases";

export default function StorePage() {
  return (
    <>
      <GenreNavi genres={genres} />
      {/*
      <div className="flex">
        <aside className="w-1/4">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <Filter />
        </aside>
        <main className="w-3/4">
          <h2 className="text-lg font-semibold mb-4">Store Items</h2>
          */}
          <StoreItemsList items={releases} />
          {/*  
        </main>
      </div>
      */}
    </>
  );
}
