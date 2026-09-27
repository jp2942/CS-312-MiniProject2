const express = require("express"); // Load Express
const app = express(); // Create the Express app
const axios = require("axios"); // Load Axios to make API requests
app.set("view engine", "ejs"); // Use EJS to build the HTML pages
app.use(express.urlencoded({ extended: false })); // Read submitted form data through req.body
app.use(express.static("public")); // Make files in the public folder available to the browser

// Show the form when someone visits the homepage
app.get("/", function (req, res) {
  res.render("index");
});

// Get the user's choices, request a joke, and show the result or an error
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

// Start the website on port 3000
app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});