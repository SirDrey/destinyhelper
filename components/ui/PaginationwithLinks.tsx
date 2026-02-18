import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

export const PaginationwithLinks = ({
  currentPage,
  totalPages,
  pageSize,
}: PaginationProps) => {
  const pages: (number | "ellipsis")[] = [];

  const addPage = (page: number | "ellipsis") => {
    pages.push(page);
  };

  const range = 1;

  addPage(1);

  if (currentPage - range > 2) {
    addPage("ellipsis");
  }

  for (
    let i = Math.max(2, currentPage - range);
    i <= Math.min(totalPages - 1, currentPage + range);
    i++
  ) {
    addPage(i);
  }

  if (currentPage + range < totalPages - 1) {
    addPage("ellipsis");
  }

  if (totalPages > 1) {
    addPage(totalPages);
  }

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/users?page=${currentPage - 1}&pageSize=${pageSize}`}
            />
          </PaginationItem>
        )}

        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <PaginationLink
                href={`/users?page=${page}&pageSize=${pageSize}`}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`/users?page=${currentPage + 1}&pageSize=${pageSize}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
