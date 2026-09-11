import clsx from "clsx";
import React, { useEffect, useState } from "react";

const Pagination = ({ items, setItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pagesCount = Math.ceil(items.length / itemsPerPage);

  const changePageHandler = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = items.slice(startIndex, endIndex);

    setItems(paginatedItems);
  }, [currentPage]);

  return (
    <div className="pagination bg-zinc-50/40 " dir="rtl">
      <button
        disabled={currentPage === 1}
        onClick={() => changePageHandler(currentPage - 1)}
        className={clsx("pagination-prev-button", {
          "pages-ended active-tab": currentPage === 1,
        })}
      >
        قبلی
      </button>
      <button
        disabled={currentPage === pagesCount}
        onClick={() => changePageHandler(currentPage + 1)}
        className={clsx("pagination-next-button", {
          "pages-ended active-tab": currentPage === pagesCount,
        })}
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
