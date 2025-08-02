import React, { useEffect, useState } from 'react'
import postservice from '../Appwrite/post'
import { Container, PostForm } from '../Component'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post , setPosts] = useState([])
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() =>{
        if(slug){
            postservice.getPost(slug).then((post) => {
                if(post){
                    setPosts(post);
                }
            })
        } else{
            navigate("/")
        }
    } , [slug , navigate])

  return post ? (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4'>
        <Container>
            <div className="space-y-8">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                            Edit Post
                        </h1>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Make changes to your post and update it for your audience. All fields can be modified.
                    </p>
                </div>

                {/* Form Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8 lg:p-10">
                        <PostForm post={post} />
                    </div>
                </div>

                {/* Help Section */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl border border-blue-200/50 p-6">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0">
                                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                                    Editing Tips
                                </h3>
                                <p className="text-xs sm:text-sm text-blue-800">
                                    Remember to save your changes before leaving this page. You can preview your post before publishing the updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  ) : (
    /* Loading State */
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
        <div className="text-center space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 sm:p-12 max-w-lg mx-auto">
                <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                        Loading Post...
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Please wait while we fetch the post details for editing.
                    </p>
                    {/* Loading Animation */}
                    <div className="flex justify-center pt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditPost