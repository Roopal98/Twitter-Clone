// import { Avatar } from "@material-ui/core";
// import {
//   ChatBubbleOutline,
//   FavoriteBorder,
//   Publish,
//   Repeat,
//   VerifiedUser,
// } from "@material-ui/icons";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tweetActions } from "../../store/tweetsSlice";
import "./Post.css";

function Post({username, text}) {
    const data = useSelector((state)=> state.tweet.tweets)
    const dispatch = useDispatch()
    // console.log('inside Post')
    const removeTweet = (e) => {
        e.preventDefault();
        const removeId = data.findIndex(obj => {
            return obj.id === username
        })
        dispatch(tweetActions.removeTweet(removeId))
    }

    const editTweet = (e) => {
        e.preventDefault();
    }
  return (
    <div className="post">
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {/* {displayName}{" "} */}
              <span className="post__headerSpecial">
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <Button type="submit"  variant="light" id="post__button" onClick={editTweet}>Edit</Button>
        <Button type="submit"  variant="light" id="post__button" onClick={removeTweet}>Delete</Button>
        {/* <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div> */}
      </div>
    </div>
  );
}

export default Post;