import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Posts/Posts";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          posts: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>
      <h1>Lets Build a REACT app</h1>

      {posts.map(({ id, posts }) => (
        <Post
          key={id}
          username={posts.username}
          caption={posts.caption}
          imageUrl={posts.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
