import React from "react";
import { TopBar } from "../../components/TopBar/TopBar";
import { Sidebar } from "../../components/SideBar/Sidebar";
import { RightBar } from "../../components/RightBar/RightBar";
import "./ChatPage.css";
import { Messages } from "../../components/Messages/Messages";
import { Users } from "../../DummyData.jsx";

export const ChatPage = () => {
  return (
    <div className="chatPageContainer">
      <TopBar />
      <div className="chatContainer">
        <Sidebar />
        <div className="msgs">
          {Users.map((u) => (
            <Messages key={u.id} user={u} />
          ))}
        </div>
        <RightBar />
      </div>
    </div>
  );
};
