import React from 'react'

const Baner = () => {
  return (
    <div className='flex flex-col bg-blue-100 mt-3 p-3'>
      <img src="\banner.png" alt="" />
      <h1 className='text-xl font-bold text-center pt-3'>V2.0 is avaiable</h1>
      <button className='border-2  border-blue-500 bg-white p-2 text-blue-500 rounded-lg'>Try now</button>
    </div>
  )
}

export default Baner