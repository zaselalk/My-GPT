import React, { useEffect } from "react";

import Markdown from "react-markdown";
import MarkdownMessage from "../Util/MarkdownMessage";

const AssistantMessage = ({ message }) => {
  return (
    <div key={message.id} className="flex justify-start mb-4">
      <div className="flex flex-row">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 m-3 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/4712/4712009.png"
            alt="User Avatar"
          />
        </div>
        <div className="flex flex-col justify-center max-w-lg px-8 py-4 bg-slate-200 rounded-xl">
          <p className="font-sans text-base text-black">
            <MarkdownMessage content={message.content} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssistantMessage;
