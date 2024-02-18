import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import TableComponent from './TableComponent';

const ProfileSummary = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(9); // Change as needed

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="border rounded-md mx-3 bg-white shadow-md px-2   ">
      <div className="flex justify-between items-center pt-2 flex-wrap sm:mt-3">
        <h2 className="text-lg font-bold">Product Summary</h2>
        <div className="flex flex-wrap justify-center md:justify-start">
          <label className="text-lg font-bold p-2">Show</label>
          <select className="border border-gray-300 p-2 rounded-xl lg:w-64 md:w-auto text-sm text-opacity-75 font-bold outline-none">
            <option>ALL Column</option>
            <option>ID</option>
            <option>Shopify</option>
            <option>Date</option>
            <option>Status</option>
            <option>Customer</option>
            <option>Email</option>
            <option>Country</option>
            <option>Shipping Source</option>
          </select>
        </div>
        <div>
          <button className="px-3 py-2 bg-blue-500 text-white rounded-md mr-2 text-sm">
            Dispatch Selected
          </button>
        </div>
        <div className="flex mt-2 md:mt-0">
          <button
            className="px-2 py-1 rounded-md bg-gray-300 mr-1"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, i) => (
            <button
              key={i}
              className={`px-2 py-1 rounded-md bg-gray-300 mr-1 ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-2 py-1 rounded-md bg-gray-300"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>

      <TableComponent
        data={data}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ProfileSummary;
