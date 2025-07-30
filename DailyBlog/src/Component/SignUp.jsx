import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate , Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Logo, Input, Button } from "./index"
import auth from '../Appwrite/login'
import {login as authlogin} from '../Store/LoginState'

function SignUp() {
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async(data) =>{
        setError("")
        try {
           const userData = await auth.CreateAccount(data)
           if(userData){
           const userData = await auth.getCurrentUser()
            if (userData) dispatch(authlogin(session))
                navigate("/")
           }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <span className="inline-block w-full max-w-[100px]">
                <Logo 
                width='70px'
                />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
         <p className="mt-2 text-center text-base text-black/60">
         Already have an account?&nbsp;
         <Link 
         to="/login"
         className="font-medium text-primary transition-all duration-200 hover:underline"
          >Login</Link>
         </p>

        <div>
            {error && <p className="text-red-600 mt-8 text-center"> {error} </p>  }
        </div>
        <div>
            <form onSubmit={handleSubmit(login)}>
                <Input 
                type="text"
                label = "Name"
                placeholder ='Enter Your Name'
                {...register("name", { required : true })}
                />

            <Input 
                label = "Email :"
                type = "email"
                placeholder="Enter the Email"
                {...register("email", {required : true, validate : {
                matchPattern : (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                }} )}
             />
            <Input 
                label = "Password :"
                type = "password"
                placeholder="Enter the Password"
                {...register("password", {required : true, } )}
             />
                <Button
                type='submit'
                classname='w-full'
                >Create Account</Button>
            </form>
        </div>

    </div>
  )
}

export default SignUp