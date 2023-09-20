import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';

const Listing = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  

  return (
    <div>
        {currentItems.map((item, index) => (
            <div className="past-box" key={index}>
                <h5>{item.project_id}</h5>
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <img src={item.project_image} height={100} width={100} alt="..." className="img-fluid d-block mx-auto" />
                    </div>
                    <div className="col-md-7">
                        <div className="past-text">
                            <h4><Link to={`/project/${item.project_slug}`}>{item.project_name}</Link></h4>
                            <p>{truncate(item.project_short_desc, {length: 300})}</p>
                            <div className="past-btn-box">
                                <a href={`/project/${item.project_slug}`} className="btn carousel-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}

        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
            >
                {index + 1}
            </button>
            ))}
        </div>
    </div>
  );
};

export default Listing;
