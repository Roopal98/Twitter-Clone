// import { Avatar } from "@material-ui/core";
// import {
//   ChatBubbleOutline,
//   FavoriteBorder,
//   Publish,
//   Repeat,
//   VerifiedUser,
// } from "@material-ui/icons";
import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tweetActions } from "../../store/tweetsSlice";
import "./Post.css";

function Post({username, text}) {
    const [isEdit,setIsEdit] = useState(false)
    const data = useSelector((state)=> state.tweet.tweets)
    const dispatch = useDispatch()
    // console.log('inside Post')
    const inputRef = useRef(text)
    const removeTweet = (e) => {
        e.preventDefault();
        const removeId = data.findIndex(obj => {
            return obj.id === username
        })
        dispatch(tweetActions.removeTweet(removeId))
    }

    const submitTweet = (e) => {
        e.preventDefault();
        dispatch(tweetActions.editTweet({authorId:username,text:inputRef.current.value}))
        setIsEdit(false)
    }
  return (
    <>
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
              {!isEdit && <p>{text}</p>}
              {isEdit && <div className="input">
                            <input
                                defaultValue={text}
                                ref = {inputRef}
                                type="text"
                            />
                        </div>}
            </div>
          </div>
          {!isEdit && <Button type="submit"  variant="light" id="post__button" onClick={()=>setIsEdit(true)}>Edit</Button>}
          {isEdit && <Button type="submit"  variant="light" id="post__button" onClick={submitTweet}>Tweet</Button>}
          <Button type="submit"  variant="light" id="post__button" onClick={removeTweet}>Delete</Button>
          {/* <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Post;