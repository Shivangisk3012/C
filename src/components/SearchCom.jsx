import React from 'react';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const SearchCom = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 border py-3 px-2 rounded-xl bg-white shadow-md mx-3 items-center'>
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-bold'>What are you looking for? </label>
        <input type='text' placeholder='Search for name, company, category, etc.' className='border border-gray-300 p-2 w-full md:w-96 rounded-xl text-sm text-gray-600 focus:outline-none placeholder-gray-400 placeholder-opacity-75' />
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-bold'>Category</label>
        <select className='border border-gray-300 p-2 rounded-xl w-full md:w-60 text-sm text-gray-600 focus:outline-none'>
          <option>ALL</option>
          <option>One</option>
        </select>
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-sm font-bold'>Status</label>
        <select className='border border-gray-300 p-2 rounded-xl w-full md:w-60 text-sm text-gray-600 focus:outline-none'>
          <option>All</option>
          <option>Pending</option>
          <option>Delivered</option>
          <option>Shipped</option>
        </select>
      </div>
      <div className='p-2 border bg-slate-50 rounded-xl mt-6 mx-3 cursor-pointer'>
        <MdOutlineKeyboardDoubleArrowDown />
      </div>
      <div className='mt-6'>
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md text-xs'>Search</button>
      </div>
    </div>
  );
};

export default SearchCom;
