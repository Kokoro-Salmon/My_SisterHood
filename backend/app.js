// app.js
const express = require("express");
const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
