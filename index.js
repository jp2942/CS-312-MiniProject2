const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});