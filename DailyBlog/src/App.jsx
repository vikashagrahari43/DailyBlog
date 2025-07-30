import {login , logout} from './Store/LoginState'
import auth from "./Appwrite/login"
import { useDispatch } from 'react-redux'
import { useEffect,useState } from 'react'
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Outlet } from 'react-router-dom';


function App() {
  const [loading, setloading] = useState(true);
  const dispatch =  useDispatch()
  useEffect(()=>{
    auth.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(
      ()=> setloading(false)
    )
  } , [])

  return ( !loading ? ( <div>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
               <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  </div> 
  ) : null 
)
}

export default App
