// ./index.js
// * Imports
const express = require("express"); // Imports Express's class definition
const morgan = require("morgan"); // Imports Morgan's class definition
// Imports from our class modules
const Block = require("./src/block");
const Blockchain = require("./src/blockchain");
const Transaction = require("./src/transaction");

// Global variables http://wiki.c2.com/?GlobalVariablesAreBad
global.blockchain = new Blockchain(); // Our copy of the blockchain
global.transactions = []; // Our current transactions
global.connections = []; // Our current connections

// Initialize express's class object
const app = express();
// Tell Express to use Morgan for logging requests to the console
app.use(morgan("dev")); // Pretty-print requests with the "dev" format

// Create the port number for the server to listen on
const port = 8080; // See: Wikipedia's List of TCP and UDP port numbers

// Dynamically load all routes from the ./routes folder
require("./routes")(app);

// Configure our server to run
app.listen(port, () => {
    // Log that our server is running in the terminal
    console.log(`Server is listening at http://localhost:${port}/`);
});
