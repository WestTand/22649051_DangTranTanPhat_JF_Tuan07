import React from 'react'
import { Search } from 'lucide-react';
const Header = () => {
  return (
    <div className='flex flex-row border-2 border-pink-100 min-h-[20px] justify-between items-center w-auto'>
      <h1 className='text-3xl text-pink-500 font-bold text-left m-[30px]'>DashBoard</h1>
      <div className='justify-end-safe'>
        <div className='flex w-auto space-x-5'>

          <div className='flex items-center gap-2 border-gray-300 rounded-lg px-3 py-2 w-72 shadow-sm focus-within:ring-2 focus-within:ring-blue-400'>
            <Search className="text-gray-500" size={24} />
            <input type="text" placeholder='Search ' className='flex-1 bg-transparent outline-none text-sm' />
          </div>
          <img src="\chuong.PNG" alt="" className='w-[30px]' />
          <img src="\chamhoi.png" alt="" className='w-[30px]' />
          <img src="\avatar.png" alt="" className='w-[30px]' />
        </div>
      </div>
    </div>
  )
}

export default Header