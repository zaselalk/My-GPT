import { useEffect, useState } from "react";
import "./App.css";
import Instruction from "./components/Instruction";
import { ChatContext } from "./contexts/chatContext";
import ChatScreen from "./components/ChatScreen";
import { AppContext } from "./contexts/AppContext";

const roles = [
  {
    id: 1,
    name: "General Assistant",
    prompt: "Answer the questions of the user",
    message: "Hello there, I'm your assistant. Please ask me anything. ",
  },
  {
    id: 2,
    name: "Grammer Checker",
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
    name: "Tamil Translator",
    prompt: "Translate the given English sentence to Tamil",
    message:
      "Hello there, I'm your Tamil translator. Please type a sentence for me to translate. ",
  },
  {
    id: 5,
    name: "SQL Translator",
    prompt:
      "Write a SQL query for given scenario, If the question is not related to SQL, respond with 'I'm a SQL assistant'",
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
    <AppContext.Provider value={{ role, roles, setRole }}>
      <ChatContext.Provider value={{ messages, setMessages }}>
        <div className="flex flex-col h-screen md:flex-row">
          <Instruction />
          <ChatScreen role={role} />
        </div>
      </ChatContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
