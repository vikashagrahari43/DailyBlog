
import auth from '../../Appwrite/login'
import {useDispatch} from "react-redux"
import {logout} from "../../Store/LoginState"


function Logoutbtn() {
  
  const dispatch = useDispatch()
    
  const logouthandler = ()=>{
        auth.logout().then(() => {
          dispatch(logout())
        })
    }
    return (
    <button className='p-2 bg-black rounded-lg text-white' onClick={logouthandler}>Logout</button>
  )
}

export default Logoutbtn