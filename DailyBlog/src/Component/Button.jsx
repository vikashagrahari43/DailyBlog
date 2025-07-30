import React from 'react'

function Button({
    children,
    bgColor = "bg-blue-600",
    textColor = "text-white",
    type = "button",
    classname = "",
    ...props
}) {
  return (
    <button 
    className={`${bgColor} ${textColor} px-4 py-2 rounded-lg ${classname}`} {...props}
    > {children} </button>
  )
}

export default Button