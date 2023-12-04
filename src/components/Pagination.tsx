import React from "react";
import { usePagination, DOTS } from "../hooks/usePagination";
import left from '../images/icons/left.svg';
import right from '../images/icons/right.svg';

interface PaginationProps {
  onPageChange: (arg0: number) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (paginationRange) {
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  }

  const onNext = () => {
    if (paginationRange) {
      onPageChange(currentPage + 1 > paginationRange.length ? currentPage : currentPage + 1);
    }
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1 === 0 ? currentPage : currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <ul
      className="pagination-container w-[350px] lg:fit lg:flex flex-row justify-center lg:justify-start"
    >
      {/* Left navigation arrow */}
      <li
        className="pagination-item"
        onClick={onPrevious}
      >
        <img src={left} alt="left" className="arrow" />
      </li>
      {paginationRange && paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            className={`pagination-item ${currentPage === pageNumber ? "text-[#D33F3F] font-black" : "text-[#272728] font-normal"}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className="pagination-item"
        onClick={onNext}
      >
        <img src={right} alt="right" className="arrow" />
      </li>
    </ul>
  );
};

export default Pagination;