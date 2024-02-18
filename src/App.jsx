import React from 'react'
import ProfileSummary from './components/profileSummary'
import SearchCom from './components/searchCom'
import data from './assets/constant/data'



function App() {


  return (
<div className='flex flex-col w-[90%] mx-auto gap-3 pt-2 p-1 bg-[#f5f5f5]'>
  <div className='flex justify-between items-center '>
    <h1 className='text-lg font-bold'>Orders</h1>  
    <button className='bg-blue-500 text-white px-3 py-2 rounded-md text-xs' >Create New</button>
  </div>
  <SearchCom />
  <ProfileSummary data={data}/>

</div>
  )

}

export default App

