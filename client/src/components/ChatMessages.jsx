import React, { useContext } from "react";
import { ChatContext } from "../contexts/chatContext";
import SystemMessage from "./Chat/SystemMessage";
import UserMesssage from "./Chat/UserMesssage";
import AssistantMessage from "./Chat/AssistantMessage";

const ChatMessages = ({ role }) => {
  const { messages } = useContext(ChatContext);
  console.log(role);

  return (
    <div className="flex flex-col overflow-y-auto">
      {messages.length == 1 && (
        <div className="p-8 mx-auto text-lg text-slate-400">{role.message}</div>
      )}
      {messages.map((message) => {
        const isNew = messages.length == 4;
        switch (message.role) {
          case "user":
            return (
              <UserMesssage
                message={message}
                key={Math.random() * 0.2323}
                isNew={isNew}
                id={Math.random() * 0.2323}
              />
            );
          case "assistant":
            return (
              <AssistantMessage
                message={message}
                key={Math.random() * 0.2323}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ChatMessages;
