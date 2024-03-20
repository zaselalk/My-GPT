import React, { useContext } from "react";
import SystemMessage from "./SystemMessage";
import { AppContext } from "../../contexts/AppContext";

const ChatHeader = () => {
  const { role } = useContext(AppContext);
  return (
    <div className="p-4 bg-white border-b border-gray-300">
      <h1 className="text-lg font-semibold">MyGPT</h1>
      <SystemMessage role={role.name} />
    </div>
  );
};

export default ChatHeader;
