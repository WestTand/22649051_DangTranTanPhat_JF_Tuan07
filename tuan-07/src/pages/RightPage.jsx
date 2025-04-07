import React from 'react'
import NavLink from '../components/NavLink'
import Baner from '../components/Baner'
const RightPage = () => {
  return (
    <div className='flex flex-col bg-gray-50 p-5 h-screen items-start gap-4  '>
      <img src="\logo.png" alt="" className='w-[150px] h-[100px] ' />
      <div>
        <NavLink />
      </div>
      <div>
        <Baner />
      </div>
    </div >
  )
}

export default RightPage