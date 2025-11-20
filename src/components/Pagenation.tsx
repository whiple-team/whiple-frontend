import { useSearchParams } from "react-router-dom";
import ArrowLeft from "../assets/Arrowleft.svg";
import ArrowRight from "../assets/ArrowRight.svg";

export interface Whiskey {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
}

interface PaginationProps {
  data: Whiskey[];
}

function getPageNumbers(currentPage: number, totalPages: number) {
  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) pages.push(i);

  if (end < totalPages - 1) pages.push("...");

  pages.push(totalPages);

  return pages;
}

export default function Pagination({data}:PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setSearchParams({ page: String(p) });
  };

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <div className="w-full flex items-center gap-3 justify-center py-4">
      
      {/* 이전 */}
      <button className="flex flex-row items-center gap-2"
        onClick={() => goPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={ArrowLeft} className="w-4 h-4" />
        <span>Previous</span>
      </button>

      {/* 숫자 + ... */}
      <div className="flex gap-2">
        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={idx} className="px-2 text-gray-400">
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => goPage(p)}
              className={`w-6 h-6 rounded flex items-center justify-center ${
                p === currentPage
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      {/* 다음 */}
      <button className="flex flex-row items-center gap-2"
        onClick={() => goPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <img src={ArrowRight} className="w-4 h-4" />
      </button>
    </div>
  );
}