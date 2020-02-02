import React from 'react'


const Posts = (props) => {
    return (
        <div>
            {props.posts.map(post => (
                <div key={post.id}>
                    <h1 style={{ display: "inline-block", margin: "20px" }}>{post.post}</h1>
                </div>
            ))}
        </div>
    )
}

export default Posts;