import React from 'react'
import OverViewItem from './OverViewItem'

const OverView = () => {
  return (
    <div className='flex flex-col mt-3 border-2 border-pink-100 '>
        <div className='flex flex-row gap-3'>
        <img src="\overViewIcon.PNG" alt="" className='w-[30px]'/> 
        <h2 className='text-2xl font-bold'>OverView</h2>
        </div>
        <div className='flex flex-row gap-3 mt-3'>
            <OverViewItem/>
        </div>

    </div>
  )
}

export default OverView