import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row border-2 border-pink-100 min-h-[20px] justify-between items-center w-auto'>
        <h1 className='text-3xl text-pink-500 font-bold text-left m-[30px]'>DashBoard</h1>
        <div className='justify-end-safe'>
                <div className='flex w-auto space-x-5'>
                <i ><input type="text"  placeholder='Search' className='rounded-[5px] border-2 border-gray-300 bg-gray-300 w-auto'/></i>
                <img src="\chuong.PNG" alt="" className='w-[30px]' />
                <img src="\chamhoi.png" alt="" className='w-[30px]' />
                <img src="\avatar.png" alt="" className='w-[30px]' />
                </div>
        </div>
    </div>
  )
}

export default Header