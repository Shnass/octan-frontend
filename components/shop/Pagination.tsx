import Link from "next/link"

export default function Pagination({
    totalPages,
    currentPage
}: {totalPages:number, currentPage:number}) {
  return (
    <nav>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((p) => 
        p === currentPage ?
        <span key={p} className="px-1">
            {p}
        </span> :
        <Link href={`?page=${p}`} className="px-1" key={p}>{p}</Link>
      )}
    </nav>
  )
}
