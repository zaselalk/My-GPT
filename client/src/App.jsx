import { useState } from "react";
import "./App.css";
import ChatScreen from "./components/ChatScreen";
import Instruction from "./components/Instruction";
import MessageBox from "./components/MessageBox";
import { ChatContext } from "./contexts/chatContext";

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hi John, how are you?",
      sender: "user",
    },
    {
      id: 2,
      message: "Hi John, how are you?",
      sender: "bot",
    },
  ]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      <div className="bg-gray-100">
        <div className="flex flex-col md:flex-row h-screen">
          <Instruction />
          <div className="flex-1 ">
            <div className="p-4 bg-white border-b border-gray-300">
              <h1 className="text-lg font-semibold">Chat with Bot</h1>
            </div>

            <ChatScreen />
          </div>
          <div className="w-full p-4 bg-white border-t border-gray-300 absolute bottom-0 ">
            <MessageBox />
          </div>
        </div>
      </div>
    </ChatContext.Provider>
  );
}

export default App;
