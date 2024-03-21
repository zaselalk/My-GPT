import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../contexts/chatContext";

const MessageBox = () => {
  const { messages, setMessages } = useContext(ChatContext);
  const [isThinking, setIsThinking] = useState(false);

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target[0].value;
    if (!message) return;

    const newContent = [
      ...messages,
      {
        content: message,
        role: "user",
      },
    ];

    const sendToServer = async (message) => {
      setIsThinking(true);
      const response = await fetch("http://localhost:3000/api/ask-bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      const data = await response.json();
      setIsThinking(false);

      setMessages((prev) => {
        return [
          ...prev,
          {
            content: data.content,
            role: "assistant",
          },
        ];
      });
    };

    sendToServer(newContent);
    setMessages(newContent);

    e.target[0].value = "";
  };

  return (
    <div className="container justify-between w-5/6 mx-auto my-5 ">
      {isThinking && ( // Show typing indicator
        <div className="flex items-center justify-center w-10 h-10 mr-2">
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" />
        </div>
      )}
      <form onSubmit={onMessageSubmit}>
        <div className="flex flex-row ">
          <input
            type="search"
            id="search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your message..."
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center px-5 py-1 mx-5 space-x-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <div>Send</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageBox;
