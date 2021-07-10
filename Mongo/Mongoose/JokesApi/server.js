const express = require("express");
const app = express();
const mongoose = require('mongoose');
// here we imported the express and mongoose library

// fire mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config"); 

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllJokesRoutes = require("./server/routes/joke.route");
AllJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));