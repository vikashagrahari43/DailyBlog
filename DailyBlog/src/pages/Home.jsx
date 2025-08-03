import React, { useEffect, useState } from 'react'
import postservice from '../Appwrite/post'
import { Container, PostCard } from '../Component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  
  const signuppage = () => {
    navigate("/signup")
  }
  
  const loginpage = () => {
    navigate("/login")
  }
  const authstatus = useSelector((state) => state.auth.status)
  
  useEffect(() => {
    if (authstatus){
      postservice.getAllPost().then((posts) => {
        setPosts(posts.documents)
      })
    } else {
      undefined
    }
  }, [])

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200  to-gray-500">
        <Container>
          {/* Hero Section */}
          <div className="py-12 sm:py-16 md:py-20 lg:py-24 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight px-2">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-500 to-orange-600">DailyBlog</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
                Discover amazing stories, share your thoughts, and connect with a community of passionate writers and readers from around the world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button 
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm sm:text-base"
                onClick={signuppage}
              >
                Start Writing Today
              </button>
              <button 
                className="w-full sm:w-auto border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm sm:text-base"
                onClick={loginpage}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-12 sm:py-16 md:py-20 bg-white/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 mb-8 sm:mb-12 md:mb-16 mx-4 sm:mx-6 lg:mx-0">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Choose DailyBlog?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
                Join thousands of writers and readers in our vibrant community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
              {/* Feature 1 */}
              <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Rich Content Creation</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Create beautiful, engaging posts with our intuitive editor. Add images, format text, and bring your stories to life.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Vibrant Community</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Connect with like-minded writers and readers. Share ideas, get feedback, and build lasting relationships.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Experience blazing fast loading times and smooth interactions. Focus on what matters - your content.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-8 sm:py-12 md:py-16 text-center px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-800">10+</div>
                <div className="text-gray-800 text-sm sm:text-base">Active Writers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600">50+</div>
                <div className="text-gray-800 text-sm sm:text-base">Published Posts</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold text-red-800">100+</div>
                <div className="text-gray-800 text-sm sm:text-base">Monthly Readers</div>
              </div>
            </div>
          </div>

          
        </Container>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-200  to-gray-400'>
      <Container>
        <div className="space-y-4 py-1 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center space-y-3 sm:space-y-4 py-8 sm:py-10 md:py-12">
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 tracking-tight px-2">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-600 to-gray-800">Posts</span>
            </h1>
            
          </div>

          {/* Posts Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
            {posts.map((post) => (
              <div key={post.$id} className='group'>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-[1.03] hover:bg-white/90 hover:-translate-y-1">
                  <PostCard {...post} />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="text-center pt-8 sm:pt-10 md:pt-12 px-4">
            <div className=" backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg   p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:inline-flex items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">Live</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-800 rounded-full"></div>
                  <span className="text-xs sm:text-sm">Showing {posts.length} posts</span>
                  <div className="hidden sm:block w-1 h-1 bg-gray-800 rounded-full"></div>
                  <span className="text-xs sm:text-sm">Updated just now</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                  Join our community to discover more amazing content and share your own stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home