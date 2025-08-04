import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function ProtectedAuth({children , authentication = true }) {
    const navigate = useNavigate();
    const [loader , setloader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(() =>{
        if(authentication &&  authStatus !== authentication){
            navigate("/login")
        }
        else if (!authentication && authStatus !== authentication){
            navigate("/")
        }
        setloader(false)
    }, [authentication, authStatus, navigate])
  return loader ? <div>Loading ... </div> : <>{children}</>
    
}

export default ProtectedAuth