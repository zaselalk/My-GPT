import React, { useContext, useState } from "react";
import { ChatContext } from "../contexts/chatContext";
import { AppContext } from "../contexts/AppContext";

const Instruction = () => {
  const { setMessages } = useContext(ChatContext);
  const { roles, setRole, role } = useContext(AppContext);

  const roleHandler = (role) => {
    setRole(role);
    setMessages([
      {
        role: "system",
        content: role.prompt,
      },
    ]);
  };

  const clearChatHanlder = () => {
    setMessages([
      {
        role: "system",
        content: role.message,
      },
    ]);
  };

  return (
    <div className="w-full bg-gray-100 border-r border-gray-300 md:w-1/4">
      <div className="p-4">
        <h1 className="mb-4 text-lg font-semibold border-b border-gray-300">
          Roles
        </h1>

        <ul className="mt-12">
          {roles.map((role) => (
            <li
              key={role.id}
              className="flex items-center justify-between mb-4"
            >
              <h2 className="mb-2 font-semibold text-md">{role.name}</h2>
              <button
                className="text-blue-500 underline rounded-md "
                onClick={roleHandler.bind(null, role)}
              >
                Switch
              </button>
            </li>
          ))}
        </ul>
        <button onClick={clearChatHanlder} className="text-red-500">
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default Instruction;
