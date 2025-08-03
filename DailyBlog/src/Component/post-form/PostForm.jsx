import React, {useCallback, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { useForm } from 'react-hook-form'
import {Button, Input, RTE , Select } from "../index"
import  postservice  from '../../Appwrite/post'

function PostForm({post}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {handleSubmit, watch, getValues, setValue, register, control } = useForm({
        defaultValues : {
            title : post?.title || "",
            slug : post?.$id || "",
            content : post?. content || "",
            status : post?.status || "active"
        },
    }); 

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    // console.log(post.featuredImage)

    const submit = async (data) => {
        setIsSubmitting(true);
        try {
            let file = null;

            // Upload image if provided
            if (data.image && data.image[0]) {
                file = await postservice.uploadFile(data.image[0]);
            }

            if (post) {
                // If updating an existing post
                if (file) {
                    await postservice.deleteFile(post.featuredImage);
                }

                const dbPost = await postservice.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : post.featuredImage, // keep old image if no new file
                    username: userData?.name || post.username || "Anonymous",
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            } else {
                // If creating a new post
                if (!file) {
                    alert("Please upload an image");
                    return;
                }

                const dbPost = await postservice.createPost({
                    ...data,
                    featuredImage: file.$id,
                    userid: userData.$id,
                    username: userData?.name || "Anonymous", // ✅ add username here
                    slug: slugTransform(data.title || "new-post"), // ensure slug always exists
                });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        } catch (error) {
            
            alert(`Failed ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const slugTransform = useCallback((value) =>{
        if (value && typeof value === "string" )
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-")
        
        return "";
    } , [])
    
    useEffect(() =>{
        const subscription = watch((value, {name}) => {
            if(name === "title"){
                setValue("slug" , slugTransform(value.title),{shouldValidate : true} )
            }
        })
        return () => subscription.unsubscribe()
    }, [watch, setValue, slugTransform ])

    
  return (
    <div className="min-h-screen bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-400  to-gray-800 px-6 py-8 sm:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {post ? "Update Post" : "Create New Post"}
            </h1>
            <p className="mt-2 text-blue-100">
              {post ? "Make changes to your existing post" : "Share your thoughts with the world"}
            </p>
          </div>
          
          {/* Loading Overlay */}
          {isSubmitting && (
            <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50 rounded-2xl">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-lg font-semibold text-gray-700">
                  {post ? "Updating your post..." : "Creating your post..."}
                </p>
                <p className="text-sm text-gray-500 mt-2">Please wait while we process your request</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit(submit)} className={`p-6 sm:p-8 ${isSubmitting ? 'pointer-events-none' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Section */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div className={`bg-gray-50 rounded-xl p-6 ${isSubmitting ? 'opacity-60' : ''}`}>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Post Details
                    </h2>
                    
                    <div className="space-y-4">
                      <Input
                        label="Title"
                        placeholder="Enter your post title..."
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={isSubmitting}
                        {...register("title", { required: true })}
                      />
                      
                      <Input
                        label="Slug"
                        placeholder="post-url-slug"
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={isSubmitting}
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                          setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className={`bg-gray-50 rounded-xl p-6 ${isSubmitting ? 'opacity-60' : ''}`}>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                      Content
                    </h2>
                    
                    <div className="bg-white rounded-lg border border-gray-200">
                      <RTE 
                        label="Write your content here..." 
                        name="content" 
                        control={control} 
                        defaultValue={getValues("content")}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar Section */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 ${isSubmitting ? 'opacity-60' : ''}`}>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Featured Image
                    </h2>
                    
                    <div className="space-y-4">
                      <Input
                        label="Upload Image"
                        type="file"
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer cursor-pointer"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        disabled={isSubmitting}
                        {...register("image", { required: !post })}
                      />
                      
                      {post && (
                        <div className="relative group">
                          <img
                            src={postservice.filePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-200 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-lg"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 ${isSubmitting ? 'opacity-60' : ''}`}>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Publish Settings
                    </h2>
                    
                    <div className="space-y-4">
                      <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="transition-all duration-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        disabled={isSubmitting}
                        {...register("status", { required: true })}
                      />
                      
                      <Button 
                        type="submit" 
                        bgColor={post ? "bg-green-500" : undefined} 
                        className="w-full bg-slate-400 py-3 px-6 text-black font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-blue-300 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            {post ? "Updating..." : "Creating..."}
                          </div>
                        ) : (
                          post ? "Update" : "Submit"
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Quick Tips */}
                  <div className={`bg-yellow-50 rounded-xl p-6 border border-yellow-200 ${isSubmitting ? 'opacity-60' : ''}`}>
                    <h3 className="text-sm font-semibold text-yellow-800 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Quick Tips
                    </h3>
                    <ul className="text-xs text-yellow-700 space-y-1">
                      <li>• Use engaging titles to attract readers</li>
                      <li>• Add high-quality featured images</li>
                      <li>• Keep your content well-structured</li>
                      <li>• Preview before publishing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
  
export default PostForm