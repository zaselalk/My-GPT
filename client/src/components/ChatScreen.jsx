import React, { useContext } from "react";
import { ChatContext } from "../contexts/chatContext";

const ChatScreen = () => {
  const { messages } = useContext(ChatContext);
  console.log(messages);
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={
            message.sender == "user"
              ? "flex mb-4 items-start"
              : `flex mb-4 justify-end`
          }
        >
          <div className="flex-shrink-0 mr-2">
            <img
              className="w-8 h-8 rounded-full"
              src="https://via.placeholder.com/50"
              alt="User Avatar"
            />
          </div>
          <div className="bg-blue-100 rounded-lg p-2">
            <p className="text-sm text-gray-700">{message.message}</p>
          </div>
        </div>
      ))}
      {/* <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://via.placeholder.com/50"
            alt="User Avatar"
          />
        </div>
        <div className="bg-blue-100 rounded-lg p-2">
          <p className="text-sm text-gray-700">Hi John, how are you?</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <div className="flex-shrink-0 mr-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://via.placeholder.com/50"
            alt="User Avatar"
          />
        </div>
        <div className="bg-blue-100 rounded-lg p-2">
          <p className="text-sm text-gray-700">Hi John, how are you?</p>
        </div>
      </div> */}
    </div>
  );
};

export default ChatScreen;
