// import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tweetActions } from "../../store/tweetsSlice";
import { Button } from "react-bootstrap";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
const dispatch = useDispatch()
  const sendTweet = (e) => {
    if(tweetMessage===''){
        return;
    }
    e.preventDefault();

    let author_id = Math.random()*100
    let id = Math.random()*100
    let text = tweetMessage
    dispatch(tweetActions.addTweet({id,author_id,text}))
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button onClick={sendTweet} type="submit" id="tweetBox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;