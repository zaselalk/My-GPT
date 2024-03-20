import React from "react";
import SystemMessage from "./SystemMessage";

const ChatHeader = ({ role }) => {
  return (
    <div className="p-4 bg-white border-b border-gray-300">
      <h1 className="text-lg font-semibold">MyGPT</h1>
      <SystemMessage role={role.name} />
    </div>
  );
};

export default ChatHeader;
