import React, {useEffect, useState} from 'react'
import { Container, PostCard } from '../Component'
import postservice from '../Appwrite/post'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() =>{
        postservice.getAllPost([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        })
    }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-8 px-4'>
        <Container>
            <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        All Posts
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Browse through our complete collection of posts. Discover stories, insights, and ideas from our community.
                    </p>
                </div>

                {/* Posts Grid */}
                {posts.length > 0 ? (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                            {posts.map((post) =>(
                                <div key={post.$id} className='group'>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/90">
                                        <PostCard {...post } />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Stats */}
                        <div className="text-center pt-8">
                            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
                                <span>Total {posts.length} posts</span>
                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                <span>All time collection</span>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Loading/Empty State */
                    <div className="text-center py-16">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-12 max-w-lg mx-auto">
                            <div className="space-y-4">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                                    Loading Posts...
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Please wait while we fetch all the posts for you.
                                </p>
                                {/* Loading Animation */}
                                <div className="flex justify-center pt-4">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    </div>
  )
}

export default AllPost