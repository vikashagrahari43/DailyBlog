import React, { useState } from 'react'
import auth from '../../Appwrite/login'
import {useDispatch} from "react-redux"
import {logout} from "../../Store/LoginState"
import { useNavigate } from 'react-router-dom'

function Logoutbtn() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
       
  const logouthandler = () => {
            setIsLoading(true)
                   
           auth.logout().then(() => {
                     dispatch(logout())
                                           
                     navigate("/login")
                              
           })
         .catch((error) => {
         console.error("Logout failed:", error);
    }).finally(() =>{
      setIsLoading(false)
    })
  }
 
  return (
    <button 
      className='group relative inline-flex items-center justify-center px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xs sm:text-sm'
      onClick={logouthandler}
      disabled={isLoading}
    >
      {/* Loading Spinner */}
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
             
      {/* Logout Icon */}
      {!isLoading && (
        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      )}
             
      {/* Button Text */}
      <span className="relative">
        {isLoading ? 'Logging out...' : 'Logout'}
      </span>
             
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-white/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  )
}

export default Logoutbtn