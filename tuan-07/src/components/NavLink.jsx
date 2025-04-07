import React from 'react'
import { PanelsTopLeft, Folder, Users2, ChartPie, MessageCircleMore, ArrowLeftRight } from 'lucide-react'
const NavLink = () => {
  return (
    <div className='flex flex-col gap-2 text-center justify-center w-full'>
      <div className='flex flex-row bg-rose-400 w-[250px] gap-3 text-white text-center items-center justify-start p-3 rounded-lg'>
        <PanelsTopLeft className='text-white' size={24} />
        <h1 className='text-lg font-bold'>Dashboard</h1>
      </div>
      <div className='flex flex-col gap-5 items-start p-3 text-sm'>
        <a href="" className='flex flex-row gap-3'><Folder /> Project</a>
        <a href="" className='flex flex-row gap-3'><Users2 />Team</a>
        <a href="" className='flex flex-row gap-3'><ChartPie />Analytics</a>
        <a href="" className='flex flex-row gap-3'><MessageCircleMore />Messages</a>
        <a href="" className='flex flex-row gap-3'><ArrowLeftRight /> Integration</a>
      </div>
    </div>
  )
}

export default NavLink