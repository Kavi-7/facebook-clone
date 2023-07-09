import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=700&q=60"
        message="Wow,this works!"
        timestamp="This is a timestamp"
        username="Kavitha"
        image="https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=700&q=60"
      />
      <Post
        profilePic="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=700&q=60"
        message="Wow,this works!"
        timestamp="This is a timestamp"
        username="Kavitha"
      />
    </div>
  );
};

export default Feed;
