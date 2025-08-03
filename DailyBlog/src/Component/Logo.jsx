import React from 'react'

function Logo({width = "100px" , className =""}) {
  return (
    <div className='flex justify-center items-center'>
        <img src="/Logo.png" className={className} alt="Logo" width={width} />
    </div>
  )
}

export default Logo