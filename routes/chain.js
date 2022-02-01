// ./routes/chain.js
// * The server prints out the entire blockchain.

function chain(app) {
    // Print out the entire blockchain
    app.get("/chain", function (request, response) {
        // Formulate a response message
        let chainStr = global.blockchain.prettify();

        // Send the response for printing out the blockchain
        response
            .status(200) // HTTP status code 200: OK
            .send(chainStr); // Response message
    });
}

module.exports = chain;
