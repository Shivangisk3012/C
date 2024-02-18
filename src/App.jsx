import React from 'react'
import ProfileSummary from './components/ProfileSummary'
import SearchCom from './components/SearchCom'
import data from './assets/constant/data'
import NewForm from './components/NewForm'
import { useState } from 'react'



function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className='flex flex-col w-[90%] mx-auto gap-3 pt-2 p-1 bg-[#f5f5f5]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-bold'>Orders</h1>  
        <button className='bg-blue-500 text-white px-3 py-2 rounded-md text-xs' onClick={toggleForm}>Create New</button>
      </div>
      {isFormOpen && <NewForm toggleForm={toggleForm} />}
      <SearchCom />
      <ProfileSummary data={data}/>
    </div>
  );
}

export default App;

