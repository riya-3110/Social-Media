import React from "react";
import "./Messages.css";

export const Messages = ({ user }) => {
  return (
    <div className="msgsWrapper">
      <div className="userMsg">
        <img className="shareProfileImg" src={user.profilePicture} alt="" />
        <label>{user.username}</label>
      </div>
      <button className="shareButton">Reply</button>
    </div>
  );
};
