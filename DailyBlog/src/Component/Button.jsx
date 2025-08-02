import React from 'react'

function Button({
    children,
    bgColor = "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
    textColor = "text-white",
    type = "button",
    classname = "",
    ...props
}) {
  return (
    <button 
    className={`${bgColor} ${textColor} px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed ${classname}`} {...props}
    > {children} </button>
  )
}

export default Button