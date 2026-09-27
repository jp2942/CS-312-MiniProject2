# The Best Joke Generator

This is my CS-312 Mini Project 2. Users enter their name and choose a category to get a joke from JokeAPI.

The app uses Node.js, Express, Axios, and EJS. CSS adds the gradient background and styles the form and joke card.

## How to run

1. Install Node.js
2. Download or clone this repository
3. Open a terminal in the project folder
4. Run `npm install`
5. Run `node index.js`
6. Open http://localhost:3000 in your browser

## How it works

The form sends the name and category to the Express server. Axios requests a joke from JokeAPI using the selected category. EJS displays the joke with the user's name.

If the API request fails, the page shows an error message and lets the user try again. An internet connection is needed as well.

## Testing

I tested getting jokes, handling an invalid category, and displaying the page in Safari and Chrome. I also checked the layout in a narrow browser window.