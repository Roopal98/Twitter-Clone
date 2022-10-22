import React, { useEffect, useState } from "react";
import "./Feeds.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { useSelector } from "react-redux";

const Feeds = () => {
  const tweetsData = useSelector((state) => state.tweet.tweets)
    console.log(tweetsData)

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {tweetsData.length>0 && tweetsData.map((post) => (
        <Post
            key={post.id}
          username={post.author_id}
          text={post.text}
        />
      ))}
    </div>
  );
}

export default Feeds;