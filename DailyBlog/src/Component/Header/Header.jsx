import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import {  useSelector } from 'react-redux';
import {Logoutbtn, Logo , Container } from "../index"

function Header() {
const navigate = useNavigate()
const authstatus = useSelector((state) => (state.auth.status))
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
]

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen)
}

const handleNavClick = (url) => {
  navigate(url)
  setIsMobileMenuOpen(false)
}

  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <Container>
        <nav className="flex justify-between items-center py-4 relative">
          {/* Logo Section */}
          <div className="flex items-center z-50">
            <Link 
              to={"/"} 
              className="flex items-center gap-3 text-decoration-none hover:scale-105 transform transition-transform duration-300"
            >
              <Logo width="70px" />
              <span className="text-white text-2xl font-bold drop-shadow-lg hidden sm:block">
                DailyBlog
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-2">
           {navItem.map((item) => 
              item.active ? 
                <li key={item.name}>
                  <button 
                    onClick={() => navigate(item.url)}
                    className="text-white bg-white/10 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 px-6 py-3 rounded-full font-medium transition-all duration-300 border border-transparent hover:border-white/30 backdrop-blur-sm"
                  >
                    {item.name}
                  </button> 
                </li> 
               : null
            )}
            {authstatus && (
              <li className="ml-2">
                <Logoutbtn />
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col items-center justify-center w-8 h-6 z-50 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'mb-1'}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Mobile Navigation */}
          <div className={`md:hidden fixed top-0 right-0 h-screen w-80 max-w-full bg-gradient-to-b from-purple-600 to-indigo-700 shadow-2xl transform transition-transform duration-300 z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="pt-20 px-6">
              <ul className="space-y-4">
                {navItem.map((item) => 
                  item.active ? 
                    <li key={item.name}>
                      <button 
                        onClick={() => handleNavClick(item.url)}
                        className="w-full text-left text-white bg-white/10 hover:bg-white/20 hover:translate-x-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 border border-transparent hover:border-white/30 backdrop-blur-sm text-lg"
                      >
                        {item.name}
                      </button> 
                    </li> 
                   : null
                )}
                {authstatus && (
                  <li className="pt-2">
                    <Logoutbtn />
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Header;