import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from './firebase'
import './App.css';
import Form from './form'
import Posts from './Posts'




function usePosts() {
  const [posts, setPosts] = useState([])



  useEffect(() => {
    firebase.firestore().collection('post').onSnapshot((snapshot) => {
      const newPost = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPosts(newPost)
    })
  }, [])

  return posts

}
const onDelete = (e) => {
  firebase.firestore().collection('post').doc(e.target.value).delete()
}

function App() {
  const posts = usePosts()



  return (
    < div className="App" >
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Form delete={onDelete} posts={posts} />} />
        </Switch>
        <Switch>
          <Route
            path='/posts'
            render={props => <Posts posts={posts} />}
          />
        </Switch>
      </Router>

    </div >
  );
}

export default App;
