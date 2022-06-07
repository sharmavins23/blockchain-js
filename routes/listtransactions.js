// ./routes/listtransactions.js
// * Lists all transactions in the system, not currently on blocks.

// * Imports
const Transaction = require("../src/transaction");

function listtransactions(app) {
    // List all transactions
    app.get("/listtransactions", function (request, response) {
        // Append our navbar
        let txStr = global.navbar;

        // Iterate through all transactions and create a response string
        for (let i = 0; i < global.transactions.length; i++) {
            txStr += global.transactions[i].prettify();
        }

        // Send the response for creating a new transaction
        response
            .status(200) // HTTP status code 200: OK
            .send(txStr); // Response message
    });
}

module.exports = listtransactions;
