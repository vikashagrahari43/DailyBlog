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
    <header className="bg-black shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <Container>
        <nav className="flex justify-between items-center py-4 relative">
          {/* Logo Section */}
          <div className="flex items-center z-50">
            <Link 
              to={"/"} 
              className="flex items-center gap-3 text-decoration-none hover:scale-105 transform transition-transform duration-300"
            >
              <Logo className='w-[40px] md:w-[70px]' />
              <span className="text-white text-2xl font-bold drop-shadow-lg hidden sm:block">
                DailyBlog
              </span>
            </Link>
          </div>

          {/* Mobile Navigation - Authenticated Users */}
          {authstatus && (
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => navigate('/all-posts')}
                className="text-white bg-white/10 hover:bg-white/20 px-2 py-1.5 rounded-lg font-medium transition-all duration-300 text-xs"
              >
                All Posts
              </button>
              <button 
                onClick={() => navigate('/add-post')}
                className="text-white bg-white/10 hover:bg-white/20 px-2 py-1.5 rounded-lg font-medium transition-all duration-300 text-xs"
              >
                Add Post
              </button>
              <div className="relative">
                <Logoutbtn />
              </div>
            </div>
          )}

          {/* Mobile Menu Button - For Non-Authenticated Users */}
          {!authstatus && (
            <button 
              className="md:hidden flex flex-col items-center justify-center w-8 h-6 z-50 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'mb-1'}`}></span>
              <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
              <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          )}

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

          {/* Mobile Dropdown - For Non-Authenticated Users */}
          {!authstatus && (
            <div className={`md:hidden absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 transform transition-all duration-300 origin-top-right z-40 ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
              <div className="py-2">
                <button 
                  onClick={() => handleNavClick('/login')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  Login
                </button>
                <div className="border-t border-gray-100"></div>
                <button 
                  onClick={() => handleNavClick('/signup')}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  Signup
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Overlay - For Non-Authenticated Users */}
          {!authstatus && isMobileMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-transparent z-30"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Header;