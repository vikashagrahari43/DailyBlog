import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import {Link , useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import  auth  from '../Appwrite/login'
import { login } from '../Store/LoginState'
import {Button , Input , Logo} from "./index"

function Login() {
    const {register , handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error , setError] = useState("");

    const signin = async(data) => {
      setError("")
      try {
       const session = await auth.login(data)
       if (session) {
        const userData = await auth.getCurrentUser()
          if(userData){
             dispatch(login( { userData } ));
            }
            navigate("/");
          }
      } catch (error) {
        setError(error.message)
      }
    }
  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-gray-200 to-gray-600 px-3 sm:px-4 py-2 sm:py-4 md:py-8'>
        <div className={`mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-white/20 shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500`}>
        
        {/* Logo Section */}
        <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
            <span className="inline-block w-full max-w-[70px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] hover:scale-105 transition-transform duration-300">
                <Logo width="100%" />
            </span>
        </div>
        
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight mb-1 sm:mb-2">
                Welcome Back
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
                Sign in to continue your journey
            </p>
        </div>
        
        {/* Sign Up Link */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
                Don&apos;t have an account?&nbsp;
                <Link
                    to="/signup"
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 hover:underline decoration-2 underline-offset-4"
                >
                    Create Account
                </Link>
            </p>
        </div>
        
        {/* Error Message */}
        {error && (
            <div className='bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl mb-4 sm:mb-6 text-center animate-shake'>
                <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">{error}</span>
                </div>
            </div>
        )}
        
        {/* Login Form */}
        <form onSubmit={handleSubmit(signin)} className="space-y-4 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <Input 
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              {...register("email", {required : true, validate : {
                matchPattern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
              }})}
            />
            <Input 
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {required : true})}
            />
          </div>
          
        
          {/* Submit Button */}
          <Button
            type='submit'
            classname='w-full mt-4 sm:mt-6 md:mt-8 py-3 sm:py-4 text-base sm:text-lg font-semibold'
          >
            Sign In
          </Button>
        </form>
        

        
        </div>
    </div>
  )
}

export default Login