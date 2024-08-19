import React from "react"

function Pagination({ currentPage, totalPages, onPageChange, onNext, onPrevious }) {
  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // اگر تعداد کل صفحات کمتر یا مساوی maxPagesToShow باشد، همه صفحات را نمایش می‌دهیم
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      // نمایش شماره‌های ابتدایی، فعلی و پایانی
      let startPage = currentPage - Math.floor(maxPagesToShow / 2)
      let endPage = currentPage + Math.floor(maxPagesToShow / 2)

      if (startPage <= 1) {
        startPage = 1
        endPage = maxPagesToShow
      }

      if (endPage >= totalPages) {
        endPage = totalPages
        startPage = totalPages - maxPagesToShow + 1
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      if (startPage > 1) {
        pageNumbers.unshift(1)
        if (startPage > 2) pageNumbers.splice(1, 0, "...")
      }

      if (endPage < totalPages) {
        pageNumbers.push(totalPages)
        if (endPage < totalPages - 1) pageNumbers.splice(pageNumbers.length - 1, 0, "...")
      }
    }

    return pageNumbers
  }

  return (
    <div className="pagination">
      <button onClick={onPrevious} disabled={currentPage === 1} className="pagination-button">
        قبلی
      </button>

      {renderPageNumbers().map((number, index) => (
        <button
          key={index}
          onClick={() => number !== "..." && onPageChange(number)}
          className={`pagination-button ${currentPage === number ? "active" : ""}`}
          disabled={number === "..."}
        >
          {number}
        </button>
      ))}

      <button onClick={onNext} disabled={currentPage === totalPages} className="pagination-button">
        بعدی
      </button>
    </div>
  )
}

export default Pagination
