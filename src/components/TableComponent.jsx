import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const TableComponent = ({ data, currentPage, rowsPerPage, handlePageChange }) => {
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="border rounded-md mx-3 bg-white shadow-md px-2 overflow-x-auto mt-2">
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
            <th>Edit</th>
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

export default TableComponent;
