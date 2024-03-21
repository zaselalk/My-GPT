// Importing required modules
const express = require("express");
const cors = require("cors");
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

// Creating an instance of Express
const app = express();
const port = 3000; // You can change the port number if needed

app.use(express.json());
// set cors
app.use(cors());

// load the environment variables
require("dotenv").config();

const { OPEN_AI_ENDPOINT, OPEN_AI_SECRET, DEPLOY_ID } = process.env;

const client = new OpenAIClient(
  OPEN_AI_ENDPOINT,
  new AzureKeyCredential(OPEN_AI_SECRET)
);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.post("/api/ask-bot", async (req, res) => {
  try {
    const result = await client.getChatCompletions(DEPLOY_ID, req.body);
    res.send(result.choices[0].message);
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
