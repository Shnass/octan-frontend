import React from 'react'
import listRecords from "@/db/records";
import { Release } from "@/types/release";
import StoreItemsList from "@/components/shop/StoreItemsList";

export default async function GenreBlock({title, slug}:{title:string, slug:string}) {
  const fetchPlaceholder : {releases: Release[], pages: number} = { releases: [], pages: 0 }
  const items = await listRecords({genre:slug, perPage:10}) ?? fetchPlaceholder;
  const { releases } = items;
  return (
    <StoreItemsList 
        items={releases} 
        showPagination={false}
        title={title}
        styles='mb-20'
    />
  )
}
