import React, { useState, useEffect } from "react";

import StoryReel from "../storyReel/StoryReel";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import db from "../../firebase";

import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );

    // return () => {
    //     cleanup
    // }
  }, []);

  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessengerSender */}
      <MessageSender />
      {/* Posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
