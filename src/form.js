import React, { useState } from 'react'
import firebase from './firebase'



function Form(props) {
    const [newPost, setNewPost] = useState('')
    const submit = e => {
        e.preventDefault()
        firebase.firestore().collection('post').add({
            post: newPost
        })
    }




    return (
        <>
            <form onSubmit={submit}>
                <input value={newPost} onChange={e => setNewPost(e.currentTarget.value)} />
                <button>spremi</button>
            </form>
            {props.posts.map(post => (
                <div key={post.id}>
                    <h1 style={{ display: "inline-block", margin: "20px" }}>{post.post}</h1>
                    <button style={{ display: "inline-block" }} onClick={props.delete} value={post.id}>obrisi</button>
                </div>
            ))}
        </>
    )
}

export default Form