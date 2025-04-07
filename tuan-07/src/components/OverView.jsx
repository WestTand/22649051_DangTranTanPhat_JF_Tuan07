import React from 'react'
import OverViewItem from './OverViewItem'
import { ShoppingCart, DollarSign, UserPlus } from 'lucide-react';

const statsData = [
  {
    title: 'Turnover',
    value: '$92,405',
    change: '5.39',
    icon: ShoppingCart,
    iconColor: 'red-500',
    bgColor: 'bg-red-50',
  },
  {
    title: 'Profit',
    value: '$32,218',
    change: '5.39',
    icon: DollarSign,
    iconColor: 'blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'New customer',
    value: '298',
    change: '6.84',
    icon: UserPlus,
    iconColor: 'blue-500',
    bgColor: 'bg-blue-50',
  },
];


const OverView = () => {
  return (
    <div className='flex flex-col mt-3 border-2 border-pink-100 '>
      <div className='flex flex-row gap-3'>
        <img src="\overViewIcon.PNG" alt="" className='w-[30px]' />
        <h2 className='text-2xl font-bold'>OverView</h2>
      </div>
      <div className='flex flex-row gap-3 mt-3 items-center justify-between'>
        {statsData.map((item, index) => (
          <OverViewItem

            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
            icon={item.icon}
            iconColor={item.iconColor}
            bgColor={item.bgColor}
          />
        ))}
      </div>

    </div>
  )
}

export default OverView