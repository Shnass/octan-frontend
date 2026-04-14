type PaginationItem = number | "...";
import Link from "next/link";

function getPagination(
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): PaginationItem[] {
  const totalNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const left = Math.max(currentPage - siblingCount, 1);
  const right = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = left > 2;
  const showRightDots = right < totalPages - 1;

  const pages: PaginationItem[] = [1];

  if (showLeftDots) pages.push("...");

  const start = showLeftDots ? left : 2;
  const end = showRightDots ? right : totalPages - 1;

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (showRightDots) pages.push("...");

  pages.push(totalPages);

  return pages;
}

export default function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const pages = getPagination(currentPage, totalPages);

  return (
    <nav className="flex gap-1">
      {pages.map((p, i) => {
        if (p === "...") {
          return (
            <span key={`dots-${i}`} className="px-2">
              ...
            </span>
          );
        }

        if (p === currentPage) {
          return (
            <span key={p} className="px-2 font-bold underline">
              {p}
            </span>
          );
        }

        return (
          <Link key={p} href={`?page=${p}`} className="px-2">
            {p}
          </Link>
        );
      })}
    </nav>
  );
}