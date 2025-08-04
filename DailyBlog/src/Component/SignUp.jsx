import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Logo, Input, Button } from "./index"
import auth from '../Appwrite/login'
import { login } from '../Store/LoginState'

function SignUp() {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const create = async (data) => {
        setError("")
        setLoading(true)
        try {
            const user = await auth.CreateAccount(data)
            if (user) {
                const userData = await auth.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    reset()
                    navigate("/")
                } else {
                    setError("Account created, but failed to fetch user data. Please login.")
                }
            } else {
                setError("Failed to create account. Please try again.")
            }
        } catch (error) {
            setError(error?.message || "Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-200 to-gray-600 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-8'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-md space-y-4 sm:space-y-6'>
                <div className='bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 md:p-8'>
                    {/* Logo Section */}
                    <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                        <span className="inline-block">
                            <Logo width='60px' className="sm:w-20 md:w-20" />
                        </span>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                            Sign up to create account
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600">
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
                        <div className="mb-4 sm:mb-6 bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                            <p className="text-red-700 text-xs sm:text-sm font-medium text-center">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(create)} className="space-y-3 sm:space-y-4 md:space-y-5">
                        <Input 
                            type="text"
                            label="Name"
                            placeholder='Enter Your Name'
                            {...register("name", { required: "Name is required" })}
                            disabled={loading}
                        />

                        <Input 
                            label="Email :"
                            type="email"
                            placeholder="Enter the Email"
                            {...register("email", { 
                                required: "Email is required", 
                                validate: {
                                    matchPattern: (value) => 
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            })}
                            disabled={loading}
                        />
                        
                        <Input 
                            label="Password :"
                            type="password"
                            placeholder="Enter the Password"
                            {...register("password", { required: "Password is required" })}
                            disabled={loading}
                        />
                        
                        <Button
                            type='submit'
                            classname='w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4 sm:mt-6'
                            disabled={loading}
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </Button>
                    </form>

                    {/* Terms & Privacy */}
                    <div className="text-center mt-4 sm:mt-6">
                        <p className="text-xs text-gray-500 leading-relaxed">
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