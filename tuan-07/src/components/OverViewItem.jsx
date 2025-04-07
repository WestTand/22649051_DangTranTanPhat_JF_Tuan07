import React from 'react'


const OverViewItem = ({ title, value, change, icon: IconComponent, iconColor, bgColor }) => {
  return (
    <div className={`grid grid-cols-4 p-9 items-start ${bgColor} border-gray-50 border-2 rounded-lg`}>
      <div className="col-span-3 flex flex-col">
        <h1 className="text-xl text-gray-600">{title}</h1>
        <h1 className="text-4xl font-bold text-gray-900">{value}</h1>
        <p className="text-sm mt-1 text-gray-500">
          <span className="text-green-600 font-medium">▲ {change}%</span> period of change
        </p>
      </div>

      {/* Right side: Icon */}
      <div className={`col-span-1 flex justify-end`}>
        <div className={`p-2 rounded-lg border text-${iconColor}`}>
          {/* Render the icon dynamically */}
          <IconComponent size={24} />
        </div>
      </div>
    </div>
  )
}

export default OverViewItem
