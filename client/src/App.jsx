import { useEffect, useState } from "react";
import "./App.css";
import Instruction from "./components/Instruction";
import { ChatContext } from "./contexts/chatContext";
import ChatScreen from "./components/ChatScreen";

const roles = [
  {
    id: 1,
    name: "General Assitant",
    prompt: "Answer the questions of the user",
    message: "Hello there, I'm your assistant. Please ask me anything. ",
  },
  {
    id: 2,
    name: "Grammer Cheaker",
    prompt: `From now on, respond to the given English sentence by indicating whether it 
      is correct or not. If it's correct, say 'Correct Sentence'; if not, provide the correct sentence with suggestions.`,
    message:
      "Hello there, I'm your grammar checker. Please type a sentence for me to check. ",
  },

  {
    id: 3,
    name: "Motivational Coach",
    prompt:
      "I want you to act as a motivational coach. Motivate the user to do something. ",
    message:
      "Hello there, I'm your motivational coach. Please ask me anything. ",
  },
  {
    id: 4,
    name: "French Translator",
    prompt: "Translate the given English sentence to French",
    message:
      "Hello there, I'm your French translator. Please type a sentence for me to translate. ",
  },
  {
    id: 5,
    name: "SQL Query",
    prompt: "Write a SQL query for given scenario",
    message:
      "Hello there, I'm your SQL Query. Please type a query for me to check. ",
  },
];

function App() {
  const [role, setRole] = useState(roles[0]);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: roles[0].message,
    },
  ]);

  return (
    <ChatContext.Provider value={{ messages, setMessages }}>
      <div className="flex flex-col h-screen md:flex-row">
        <Instruction setRole={setRole} roles={roles} />
        <ChatScreen role={role} />
      </div>
    </ChatContext.Provider>
  );
}

export default App;
