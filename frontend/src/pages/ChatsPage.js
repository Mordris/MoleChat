// src/components/ChatsPage/ChatsPage.js
import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import logo from "../assets/logo.png"; // Adjust the path based on your folder structure
import "../styles/ChatsPage.css"; // Create a CSS file for custom styles

const ChatsPage = (props) => {
  return (
    <div className="chats-page">
      <img src={logo} alt="Logo" className="logo" />
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "calc(100% - 60px)" }} // Adjust height to account for logo
      />
    </div>
  );
};

export default ChatsPage;
