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
    <div className='py-8'>
        <Container>
            <PostForm  post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost