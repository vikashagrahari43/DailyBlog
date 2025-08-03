import React, { useEffect, useState } from 'react'
import postservice from '../Appwrite/post'
import { Container, PostCard } from '../Component'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  
  const signuppage = () => {
    navigate("/signup")
  }
  
  const loginpage = () => {
    navigate("/login")
  }
  
  useEffect(() => {
    postservice.getAllPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <Container>
          {/* Hero Section */}
          <div className="py-20 text-center space-y-8">
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500  to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-500  to-orange-600">DailyBlog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover amazing stories, share your thoughts, and connect with a community of passionate writers and readers from around the world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="bg-gradient-to-r from-orange-500  to-orange-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                onClick={signuppage}
              >
                Start Writing Today
              </button>
              <button 
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={loginpage}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 mb-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose DailyBlog?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join thousands of writers and readers in our vibrant community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
              {/* Feature 1 */}
              <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Rich Content Creation</h3>
                <p className="text-gray-600">
                  Create beautiful, engaging posts with our intuitive editor. Add images, format text, and bring your stories to life.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Vibrant Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded writers and readers. Share ideas, get feedback, and build lasting relationships.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">
                  Experience blazing fast loading times and smooth interactions. Focus on what matters - your content.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600">Active Writers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-indigo-600">50+</div>
                <div className="text-gray-600">Published Posts</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">100+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
            </div>
          </div>

          
        </Container>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200'>
      <Container>
        <div className="space-y-4 py-1">
          {/* Header Section */}
          <div className="text-center space-y-4 py-12">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-600 to-gray-800">Posts</span>
            </h1>
            
          </div>

          {/* Posts Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {posts.map((post) => (
              <div key={post.$id} className='group'>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:bg-white/90 hover:-translate-y-1">
                  <PostCard {...post} />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="text-center pt-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-3 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">Showing {posts.length} posts</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">Updated just now</span>
                </div>
                <p className="text-gray-500 text-sm">
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