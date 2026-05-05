import React from 'react'
import Link from 'next/link'
import H2 from '@/components/general/H2'
import StoreItemsList from '../StoreItemsList'
import { Release } from '@/types/release'

type ARProps = {
    items: Release[],
    header: string,
    query: string
}

export default function AssociatedReleases({items, header, query}:ARProps) {
  return (
    <div>
          <H2>{header}&nbsp;
            <Link
              href={`/shop/search/?q=${query.toLowerCase().replace(/\s+/g, '+')}`}
              className="text-red-500 hover:underline">
              {query}
            </Link>
          </H2>

          <StoreItemsList 
            items={items} 
            currentPage={1} 
            perRow={3} 
            showPagination={false}/>
          </div>
  )
}
