import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import "./Post.css";
import { Users } from "../../DummyData";

export const Post = ({ postData }) => {
  const [like, setLike] = useState(postData.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((u) => u.id === postData?.userId)[0].profilePicture
              }
              alt="profile-pic"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === postData?.userId)[0].username}
            </span>
            <span className="postDate">{postData.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{postData?.desc}</span>
          <img className="postImg" src={postData.photo} alt="post-img" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              alt="okay"
              onClick={handleLike}
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              alt="like"
              onClick={handleLike}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{postData.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
