import React from "react";

const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={i === currentPage ? "active" : ""}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <ul>
        {currentPage > 1 && (
          <li className="prev" onClick={() => onPageChange(currentPage - 1)}>
            &lt; Prev
          </li>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <li className="next" onClick={() => onPageChange(currentPage + 1)}>
            Next &gt;
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
