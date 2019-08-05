// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const date = require(__dirname + "/date.js");

// Set up express and body-parser
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Add static folder to server
app.use(express.static("public"));

// Global variables
const items = ['Eat Breakfast', 'Play soccer', 'Code'];
const workList = [];

// Get request for /
app.get("/", (req, res) => {
    let day = date.getDate();

    // Use res.render to load up an ejs view file
    res.render('list', { listTitle: day, newListItem: items, listLength: items.length});
});

// Get request for /work
app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItem: workList, listLength: workList.length});
});

// Post form 
app.post("/", (req, res) => {
    var item = req.body.newItem; // Get user's input

    // Check if the button clicked has a value of Work or not
    if(req.body.button === 'Work') {
        workList.push(item);    
        res.redirect('/work'); // Redirect to /work
    } else {
        items.push(item);
        res.redirect('/'); // Redirect to /
    }
});


app.get("/about", (req, res) => {
    res.render("about.ejs");
});


// Listen on port 3000
app.listen(3000, () => {
    console.log("Listening on port 3000");
});