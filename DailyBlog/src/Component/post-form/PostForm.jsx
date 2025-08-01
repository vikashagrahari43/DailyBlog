import React, {useCallback, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { useForm } from 'react-hook-form'
import {Button, Input, RTE , Select } from "../index"
import  postservice  from '../../Appwrite/post'

function PostForm({post}) {
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

    const submit = async (data) => {
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
        slug: slugTransform(data.title || "new-post"), // ensure slug always exists
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
  } catch (error) {
    console.error("Error submitting post:", error);
    alert("Something went wrong while submitting the post.");
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
   <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={postservice.filePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
  
export default PostForm