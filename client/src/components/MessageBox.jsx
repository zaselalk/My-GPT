import React, { useContext } from "react";
import { ChatContext } from "../contexts/chatContext";

const MessageBox = () => {
  const { setMessages } = useContext(ChatContext);
  const onMessageSubmit = (e) => {
    e.preventDefault();
    const message = e.target[0].value;
    if (!message) return;

    setMessages((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          message,
          sender: "user",
        },
      ];
    });

    e.target[0].value = "";
  };

  return (
    <div>
      <form onSubmit={onMessageSubmit}>
        <div class="relative">
          <input
            type="search"
            id="search"
            class="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your message..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageBox;