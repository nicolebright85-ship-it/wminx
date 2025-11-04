// index.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve all static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Fallback for all routes — sends users to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
