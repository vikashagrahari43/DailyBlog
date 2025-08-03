import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
    
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Logo & Description Section */}
          <div className="flex items-center space-x-3">
            <Logo width="80px" />
            <div>
              <h2 className="text-2xl font-bold text-white">DailyBlog</h2>
              <p className="text-sm text-gray-400">Share your thoughts with the world</p>
            </div>
          </div>
        
          {/* Social Media Links */}
          <div className="flex space-x-4 lg:ml-auto">
            <a href="https://x.com/vikash_433" target='_blank' className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/vikashagrahari43/"  target='_blank'className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
            </a>
            <a href="https://www.vikashagrahari.me/" target='_blank' className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            </a>
            <a href="https://www.linkedin.com/in/vikashagrahari43/"  target='_blank'className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
          </div>
        </div>

       

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 DailyBlog. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-400 text-sm">Made with</span>
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400 text-sm">by <a className='font-bold text-orange-600 text-lg' href="https://www.vikashagrahari.me/" target='_blank' >Vikash Agrahari</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer