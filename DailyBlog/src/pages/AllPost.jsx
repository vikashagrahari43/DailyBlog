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
    <div className='py-8 w-full '>
        <Container>
          <div className='flex flex-wrap'>
            {posts.map((post) =>{
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post } />
                </div>
            })}
          </div>
        </Container>
    </div>
  )
}

export default AllPost