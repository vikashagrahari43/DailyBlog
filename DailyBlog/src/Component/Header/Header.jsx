import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import {  useSelector } from 'react-redux';
import {Logoutbtn, Logo , Container } from "../index"

function Header() {
const navigate = useNavigate()
const authstatus = useSelector((state) => (state.auth.status))
const navItem = [
  {
    name : "Home",
    url : "/",
    active : true 
  },
  {
    name : "Login",
    url : "/login",
    active : !authstatus
  },
  {
    name : "Signup",
    url : "/signup",
    active : !authstatus
  },
  {
    name : "AllPosts",
    url : "/all-posts",
    active : authstatus
  },
  {
    name : "Add Post",
    url : "/add-post",
    active : authstatus
  },
  // mujhe ye code todha ulta lag rha hai 
  
]
  return (
    <div>
      <Container >
        <nav>
          <div>
            <Link to={"/"}>
            <Logo width = "70px" />
            </Link>
          </div>
          <ul>
           {navItem.map((item) => 
              item.active ? 
                <li key={item.name} ><button onClick={() => navigate(item.url)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  {item.name}
                  </button> </li> 
               : null
            )}
            {authstatus && (
              <li>
                <Logoutbtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </div>
  )
}

export default Header;