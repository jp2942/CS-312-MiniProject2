const express = require("express");
const app = express();
const axios = require("axios");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/joke", async function (req, res) {
  const name = req.body.name;
  const category = req.body.category;

  try {
    const url = `https://v2.jokeapi.dev/joke/${encodeURIComponent(category)}?type=single&safe-mode`;
    const response = await axios.get(url);

    if (response.data.error) {
      throw new Error("Not able to find a joke");
    }

    res.render("index", {
        name: name,
        joke: response.data.joke
    });
  } catch (error) {
    res.status(502).render("index", {
        joke: null,
        error: "Could not load a joke. try again"
    });
  }
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});