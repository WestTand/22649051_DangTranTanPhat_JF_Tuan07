import React from 'react'
import RightPage from './RightPage'
import OverView from '../components/OverView'
import Header from '../components/Header'

const RootPage = () => {
  return (
    <div className='grid grid-cols-[1fr_3fr] gap-[5px] p-[5px]'>
        <div className=''>
            <RightPage/>
        </div>
        <div className='col-start-2 col-end-4 text-2xl '>
            <div>
                <Header/>
            </div>
                <OverView/>
        </div>

    </div>
  )
}

export default RootPage