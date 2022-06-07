// ./routes/newtransaction.js
// * Creates a new mock transaction and adds it to the system.

// * Imports
const Transaction = require("../src/transaction");

function newtransaction(app) {
    // Create a new transaction
    app.get("/newtransaction", function (request, response) {
        // Append our navbar
        let responseMsg = global.navbar;

        // Create a new Transaction object
        let tx = new Transaction();

        // Add the transaction to the global transactions array
        global.transactions.push(tx);

        // Add the response message to our response
        responseMsg += `<p>Transaction added: ${tx.prettify()}</p>`;

        // Send the response for creating a new transaction
        response
            .status(200) // HTTP status code 200: OK
            .send(responseMsg); // Response message
    });
}

module.exports = newtransaction;
