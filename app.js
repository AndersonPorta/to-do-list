// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

// Set up express and body-parser
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Add static folder to server
app.use(express.static("public"));

// Global variables
let items = ['Eat Breakfast', 'Play soccer', 'Code'];

// Get request
app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    // Format date. Ex: Monday, July 29
    let day = today.toLocaleDateString("en-US", options);

    // Use res.render to load up an ejs view file
    res.render('list', { kindOfDay: day, newListItem: items, listLength: items.length});
});

// Post form 
app.post("/", (req, res) => {
    items.push(req.body.newItem); // Add user's input to our array
    res.redirect('/'); // Redirect to our home page
});

// Listen on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000");
});