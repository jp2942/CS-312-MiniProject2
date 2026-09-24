const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Testing the joke app");
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});