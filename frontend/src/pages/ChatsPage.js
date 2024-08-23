// src/components/ChatsPage/ChatsPage.js
import React from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import logo from "../assets/logo.png"; 
import "../styles/chatsPage.css";

const ChatsPage = (props) => {
  return (
    <div className="chats-page">
      <img src={logo} alt="Logo" className="logo" />
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "calc(100% - 60px)" }}
      />
    </div>
  );
};

export default ChatsPage;
