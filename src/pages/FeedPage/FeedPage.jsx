import React from "react";
import { TopBar } from "../../components/TopBar/TopBar";
import { Sidebar } from "../../components/SideBar/Sidebar";
import { Post } from "../../components/Post/Post";
import "./FeedPage.css";
import { Posts } from "../../DummyData";

export const FeedPage = () => {
  return (
    <div>
      <TopBar />
      <div className="feedContainer">
        <Sidebar />
        <div className="feeds">
          {Posts.map((singlePost) => (
            <Post key={singlePost.id} postData={singlePost} />
          ))}
        </div>
      </div>
    </div>
  );
};
