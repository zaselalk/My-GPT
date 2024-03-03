// Importing required modules
const express = require("express");

// Creating an instance of Express
const app = express();
const port = 3000; // You can change the port number if needed

// API endpoint
app.get("/ask", (req, res) => {
  res.send("Hello World!");
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
