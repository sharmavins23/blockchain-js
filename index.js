// ./index.js
// * Imports
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition

// Initialize express's class object
const app = express();

// Create the port number for the server to listen on
const port = 8080; // See: Wikipedia's List of TCP and UDP port numbers

// Dynamically load all routes from the ./routes folder
require("./routes")(app);
