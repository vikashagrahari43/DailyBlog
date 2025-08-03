import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from "../Appwrite/post";
import { Button, Container } from "../Component";
import parse from "html-react-parser"
import { useSelector } from "react-redux";

function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userid === userData.$id : false ;
    
    useEffect(() => {
       if (slug) {
        postservice.getPost(slug).then((post) => {
            if (post) setPost(post); 
                else navigate("/");
        });
       } else navigate("/") 
    } ,[slug, navigate])

    const deletePost =() =>{
        postservice.deletePost(post.$id).then((status) =>{
            if (status){
                postservice.deleteFile(post.featuredImage);
                navigate("/")
            }
        });
    };

  return post ? (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-4 sm:py-8">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <div className="mb-6 sm:mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to posts</span>
            </button>
          </div>

          {/* Main Post Card */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Post Header */}
            <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">
                      {post.username?.charAt(0).toUpperCase()}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-bold text-lg">{post.username}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <time dateTime={post.$createdAt}>
                        {new Date(post.$createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </div>

                {/* Author Actions */}
                {isAuthor && (
                  <div className="flex items-center space-x-3">
                    <Link to={`/edit-post/${post.$id}`}>
                      <Button 
                        bgColor="bg-emerald-500" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-emerald-600 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </Button>
                    </Link>
                    <Button 
                      bgColor="bg-red-500" 
                      onClick={deletePost}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-red-600 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 sm:aspect-h-10 lg:aspect-h-8">
                <img
                  src={postservice.filePreview(post.featuredImage)}
                  alt={post.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Post Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {/* Title */}
              <header className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  {post.title}
                </h1>
                
                {/* Post Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-100">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{Math.ceil(post.content?.length / 1000) || 1} min read</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                      {post.status}
                    </span>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg sm:prose-xl max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-indigo-500 prose-blockquote:bg-indigo-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
                {parse(post.content)}
              </div>
            </div>

            {/* Post Footer */}
             <div className="px-4 sm:px-6 lg:px-8 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
              <div className="text-sm text-gray-500 text-right">
                <span>Published on </span>
                <time dateTime={post.$createdAt} className="font-medium">
                  {new Date(post.$createdAt).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post