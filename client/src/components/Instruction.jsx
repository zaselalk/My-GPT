import React, { useContext, useState } from "react";
import { ChatContext } from "../contexts/chatContext";
import { AppContext } from "../contexts/AppContext";

const Instruction = () => {
  const { setMessages } = useContext(ChatContext);
  const { roles, setRole } = useContext(AppContext);

  const roleHandler = (role) => {
    setRole(role);
    setMessages([
      {
        role: "system",
        content: role.prompt,
      },
    ]);
  };

  return (
    <div className="w-full bg-gray-200 border-r border-gray-300 md:w-1/4">
      <div className="p-4">
        <h1 className="mb-4 text-lg font-semibold">Roles</h1>
        <ul>
          {roles.map((role) => (
            <li key={role.id} className="mb-4">
              <h2 className="mb-2 text-xl font-semibold">{role.name}</h2>
              <button
                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-md"
                onClick={roleHandler.bind(null, role)}
              >
                Switch Role
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Instruction;
