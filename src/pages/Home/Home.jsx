import React from "react";
import "./Home.css";
import { TopBar } from "../../components/TopBar/TopBar.jsx";
import { Sidebar } from "../../components/SideBar/Sidebar.jsx";
import { RightBar } from "../../components/RightBar/RightBar.jsx";
import { Feed } from "../../components/Feed/Feed.jsx";

export const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};
