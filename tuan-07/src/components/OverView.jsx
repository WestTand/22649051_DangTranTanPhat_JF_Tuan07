import React, { useState } from 'react'
import OverViewItem from './OverViewItem'
import { ShoppingCart, DollarSign, UserPlus } from 'lucide-react';
import { useEffect } from 'react';




const OverView = () => {
  const [statsData, setStatsData] = useState();



  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'ShoppingCart':
        return ShoppingCart;
      case 'DollarSign':
        return DollarSign;
      case 'UserPlus':
        return UserPlus;
      default:
        return null; // Nếu không tìm thấy icon, trả về null
    }
  };

  useEffect(() => {
    fetch('https://67f3bf0ccbef97f40d2be9d8.mockapi.io/stats').then(res => res.json())
      .then(data => setStatsData(data))
  }, [])
  return (
    <div className='flex flex-col mt-3 border-2 border-pink-100 '>
      <div className='flex flex-row gap-3'>
        <img src="\overViewIcon.PNG" alt="" className='w-[30px]' />
        <h2 className='text-2xl font-bold'>OverView</h2>
      </div>
      <div className='flex flex-row gap-3 mt-3 items-center justify-between'>
        {statsData && statsData.map((item, index) => (
          <OverViewItem

            key={index}
            title={item.title}
            value={item.value}
            change={item.change}
            icon={renderIcon(item.icon)}
            iconColor={item.iconColor}
            bgColor={item.bgColor}
          />
        ))}
      </div>

    </div>
  )
}

export default OverView