import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Logo & Description Section */}
          <div className="lg:col-span-5">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <Logo width="80px" />
                <div>
                  <h2 className="text-2xl font-bold text-white">DailyBlog</h2>
                  <p className="text-sm text-gray-400">Share your thoughts with the world</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Discover amazing stories, share your experiences, and connect with a community of passionate writers and readers from around the globe.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
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
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {/* Company Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Company
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                      to="/"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest posts and updates delivered straight to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; 2025 DailyBlog. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Made with</span>
              <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400 text-sm">by <a className='font-bold text-blue-600 text-lg' href="https://www.vikashagrahari.me/" target='_blank' >Vikash Agrahari</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer