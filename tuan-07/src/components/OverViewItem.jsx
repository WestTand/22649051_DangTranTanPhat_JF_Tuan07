import React from 'react'

const OverViewItem = ({ title, value, change, icon: Icon, iconColor, bgColor }) => {
  return (
    <div className={`grid grid-cols-4 p-9 items-start ${bgColor} border-gray-50 border-2 rounded-lg`}>
      {/* Left side: title + value + change */}
      <div className="col-span-3 flex flex-col">
        <h1 className="text-xl text-gray-600">{title}</h1>
        <h1 className="text-4xl font-bold text-gray-900">{value}</h1>
        <p className="text-sm mt-1 text-gray-500">
          <span className="text-green-600 font-medium">▲ {change}%</span> period of change
        </p>
      </div>

      {/* Right side: Icon */}
      <div className={`col-span-1 flex justify-end`}>
        <div className={`p-2 rounded-lg border`}>
          <Icon size={20} className={`text-${iconColor}`} />
        </div>
      </div>
    </div>
  )
}


export default OverViewItem