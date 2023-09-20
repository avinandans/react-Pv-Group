import React from 'react'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'

const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
    const handlePageChange = (pageNumber) => {
      return onPageChange(pageNumber);
    };
    

    return (
      <ul className={`pagination justify-content-center ${className}`}>
        <li className='page-item'>
            <button className='page-link' disabled={currentPage === 1} onClick={currentPage !== 1 ? () => handlePageChange(currentPage-1) : () => handlePageChange(currentPage)}>
              <BsArrowLeft/>
            </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <li key={pageNumber}  className={currentPage === pageNumber ? "page-item active":"page-item"} onClick={() => handlePageChange(pageNumber)}>
            <button className="page-link">{pageNumber}</button>
        </li>
        ))}
        <li className='page-item'>
            <button className='page-link' disabled={currentPage === totalPages} onClick={currentPage !== totalPages ? () => handlePageChange(currentPage+1) : () => handlePageChange(currentPage)}>
              <BsArrowRight/>
            </button>
        </li>
      </ul>
    );
};

export default Pagination