import React from "react";

const Instruction = () => {
  return (
    <div className="w-full md:w-1/4 bg-gray-200 border-r border-gray-300">
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-4">Instructions</h1>

        <ul>
          <li className="py-2 px-4 ">
            Ask the question in the input box below
          </li>
          <li className="py-2 px-4 ">The bot will respond to your question</li>
          <li className="py-2 px-4 ">Don't ask personal questions</li>
        </ul>
      </div>
    </div>
  );
};

export default Instruction;
