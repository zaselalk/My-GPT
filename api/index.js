// Importing required modules
const express = require("express");
const cors = require("cors");
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

const client = new OpenAIClient(
  "https://zaselalk-azure-open-ai.openai.azure.com/",
  new AzureKeyCredential("ed22f401aa16485abe93312cc3e9b002")
);

// Creating an instance of Express
const app = express();
const port = 3000; // You can change the port number if needed

app.use(express.json());
// set cors
app.use(cors());

// API endpoint
app.get("/ask", async (req, res) => {
  try {
    const deploymentId = "test-chat-app";
    const result = await client.getChatCompletions(deploymentId, [
      {
        role: "system",
        content: "You are a helpful assistant. You will talk like a pirate.",
      },
      { role: "user", content: "Can you help me?" },
      {
        role: "assistant",
        content: "Arrrr! Of course, me hearty! What can I do for ye?",
      },
      { role: "user", content: "What's the best way to train a parrot?" },
    ]);

    res.send(result.choices[0].message);

    // for (const choice of result.choices) {
    //   console.log(choice.message);
    //   res.send(choice.message);
    // }
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

app.post("/api/ask-bot", async (req, res) => {
  try {
    const deploymentId = "test-chat-app";
    const result = await client.getChatCompletions(deploymentId, req.body);

    res.send(result.choices[0].message);
    console.log(result.choices);

    // for (const choice of result.choices) {
    //   console.log(choice.message);
    //   res.send(choice.message);
    // }
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
