import React from 'react'

function Logo({width = "100px" }) {
  return (
    <div className='flex justify-center items-center'>
        <img src="Logo.png" alt="Logo" width={width} />
    </div>
  )
}

export default Logo