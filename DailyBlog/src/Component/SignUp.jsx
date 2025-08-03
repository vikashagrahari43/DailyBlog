import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate , Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Logo, Input, Button } from "./index"
import auth from '../Appwrite/login'
import {login} from '../Store/LoginState'

function SignUp() {
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const create = async(data) =>{
        setError("")
        try {
           const userData = await auth.CreateAccount(data)
           if(userData){
           const userData = await auth.getCurrentUser()
            if (userData) dispatch(login(userData))
                navigate("/")
           }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='min-h-screen  bg-gradient-to-br from-gray-200  to-gray-600 flex items-center justify-center md:px-4 md:py-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-2'>
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8'>
                
                {/* Logo Section */}
                <div className="flex justify-center mb-6">
                    <span className="inline-block">
                        <Logo width='80px' />
                    </span>
                </div>

                {/* Header */}
                <div className="text-center space-y-2 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                        Sign up to create account
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600">
                        Already have an account?&nbsp;
                        <Link 
                            to="/login"
                            className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 hover:underline decoration-2 underline-offset-2"
                        >
                            Login
                        </Link>
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 text-sm font-medium text-center">
                            {error}
                        </p>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(create)} className="space-y-5">
                    <Input 
                        type="text"
                        label="Name"
                        placeholder='Enter Your Name'
                        {...register("name", { required : true })}
                    />

                    <Input 
                        label="Email :"
                        type="email"
                        placeholder="Enter the Email"
                        {...register("email", {required : true, validate : {
                        matchPattern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                        }} )}
                    />
                    
                    <Input 
                        label="Password :"
                        type="password"
                        placeholder="Enter the Password"
                        {...register("password", {required : true, } )}
                    />
                    
                    <Button
                        type='submit'
                        classname='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-6'
                    >
                        Create Account
                    </Button>
                </form>

                {/* Terms & Privacy */}
                <div className="text-center mt-6">
                    <p className="text-xs text-gray-500">
                        By creating an account, you agree to our{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp