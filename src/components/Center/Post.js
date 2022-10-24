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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';
import RepeatIcon from '@mui/icons-material/Repeat';
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
            return obj.author_id === username
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
                <span><img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            /></span>
                <span className="userName">&nbsp;&nbsp;Rohit Khatana</span>
                <span className="post__headerSpecial">
                  @{username} <span>&#183;</span> 3m
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
          {!isEdit && <span className='material-icons'><EditIcon onClick={()=>setIsEdit(true)}/></span>}
          {isEdit && <Button type="submit"   onClick={submitTweet}>Tweet</Button>}
          <span className='material-icons'><DeleteIcon onClick={removeTweet}/></span>
          <span className='material-icons'><RepeatIcon/></span>
          <span className='material-icons'><FavoriteBorderIcon/></span>
          <span className='material-icons'><UploadIcon/></span>
        </div>
      </div>
    </>
  );
}

export default Post;