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
import "./Post.css";

function Post({username, text}) {
    // console.log('inside Post')
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
        <Button type="submit"  variant="light" id="post__button">Edit</Button>
        <Button type="submit"  variant="light" id="post__button">Delete</Button>
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