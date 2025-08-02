import React, { useId } from 'react'

function Input({
  label , 
  type = "text" ,
  className,
  ...props 
  
} , ref ) {
  const id = useId()
  return (
    <div className="w-full">
      {label && (
        <label
          className='inline-block mb-2 pl-1 text-sm font-medium text-gray-700 transition-colors duration-200'
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input 
        type={type}
        className={`w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 border-2 border-gray-200 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white hover:border-gray-300 transition-all duration-300 shadow-sm focus:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 ${className}`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  )
}

export default React.forwardRef(Input)