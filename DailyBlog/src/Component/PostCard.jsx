import React from 'react'
import { Link } from 'react-router-dom'
import postservice  from "../Appwrite/post"

function PostCard({title, $id, featuredImage, username}) {

   const imageUrl = postservice.filePreview(featuredImage);
//   console.log("Image URL:", imageUrl);
  
   return (
    <Link to={`/post/${$id}`} className="group block">
      <div className="w-full bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300 transform">
        
          {/* Author Info */}
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-600 text-white flex items-center justify-center font-bold text-sm">
              {username?.charAt(0).toUpperCase()}
            </div>
            <p className="ml-3 text-gray-700 font-medium text-sm sm:text-base">
              {username}
            </p>
          </div>
        
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 sm:h-52 md:h-56 lg:h-48 xl:h-52 object-cover transition-transform duration-500 group-hover:scale-100"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 lg:p-6">

          {/* Title */}
          <h2 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard