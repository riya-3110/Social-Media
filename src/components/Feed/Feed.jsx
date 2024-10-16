import "./Feed.css";
import React from "react";
import { Share } from "../Share/Share";
import { Post } from "../Post/Post";
import { Posts } from "../../DummyData";

export const Feed = ({ profilePic }) => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share profilePic={profilePic} />
        {Posts.map((singlePost) => (
          <Post key={singlePost.id} postData={singlePost} />
        ))}
      </div>
    </div>
  );
};
