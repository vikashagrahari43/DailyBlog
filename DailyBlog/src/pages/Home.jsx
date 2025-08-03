import React, { useEffect, useState } from 'react'
import postservice from '../Appwrite/post'
import { Container, PostCard } from '../Component'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [posts , setPosts] = useState([])
  const navigate = useNavigate()
  const signuppage = () =>{
     navigate("/signup")
  }
  
  useEffect(() =>{
    postservice.getAllPost().then((posts) => {
        if(posts){
          setPosts(posts.documents)
        }
    })
  } , [])

  if (posts.length === 0){
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-200  to-gray-600 flex items-center justify-center px-4 py-8">
        <Container>
          <div className="text-center space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-12 max-w-lg mx-auto">
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  Login to read posts
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Sign in to your account to access and explore all the amazing posts from our community.
                </p>
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={signuppage}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-200  to-gray-600 py-8 px-4'>
      <Container>
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Latest Posts
            </h1>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Discover amazing content from our community. Read, explore, and get inspired.
            </p>
          </div>

          {/* Posts Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {posts.map((post) => (
              <div key={post.$id} className='group'>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90">
                  <PostCard {...post} />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
              <span>Showing {posts.length} posts</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Updated just now</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home