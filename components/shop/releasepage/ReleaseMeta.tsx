import { Release } from '@/types/release'

export default function ReleaseMeta(
    {item}:{item:Release}
) {
  return (
    <>
        {item.label && <p><b>Label:</b> {item.label}</p>}
        {item.country && <p><b>Country:</b> {item.country}</p>}
        {item.catalog_id && <p><b>Catalog ID:</b> {item.catalog_id}</p>}
        {item.media && <p><b>Media Condition:</b> {item.media}</p>}
        {item.sleeve && <p><b>Sleeve Condition:</b> {item.sleeve}</p>}
    </>
    
  )
}
