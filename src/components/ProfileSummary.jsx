import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiEdit } from "react-icons/fi";


const ProfileSummary = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(9); // Change as needed

  // Calculate index of the first and last item of the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="border rounded-md mx-3 bg-white shadow-md px-2 ">
      <div className="flex justify-between items-center pt-2 ">
        <h2 className="text-lg font-bold">Product Summary</h2>

        <div>
          <select className="border border-gray-300 p-2 rounded-xl w-64 text-sm text-opacity-75  font-bold outline-none">
            <option>ALL Column</option>
            <option>One</option>
          </select>
        </div>
        <div>
          <button className="px-3 py-2 bg-blue-500 text-white rounded-md mr-2 text-sm ">
            Dispatch Selected
          </button>
        </div>

        <div className="flex">
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

      <table className="table font-thin text-sm">
        <thead className="bg-gray-200">
          <tr className=''>
          <th>
                <input type="checkbox" />
              </th>
            <th>ID</th>
            <th>Shopify</th>
            <th>Date</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Country</th>
            <th>Shipping Source</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.id}</td>
              <td>{item.shopify}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>{item.customer}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td>{item.shippingSource}</td>
              <td>
                <button className="text-gray-600">
                  <FiEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileSummary;
