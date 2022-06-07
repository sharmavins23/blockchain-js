// ./routes/validate.js
// * The server validates the blockchain.

function validate(app) {
    // Validate the server's instance of a blockchain
    app.get("/validate", function (request, response) {
        // Append our navbar
        let responseMsg = global.navbar;

        // Check if the blockchain is valid
        let isValid = global.blockchain.isChainValid();

        // Formulate a response message
        if (isValid) {
            responseMsg += "<p>The blockchain is valid!</p>";
        } else {
            responseMsg = "<p>The blockchain is invalid!</p>";
        }

        // Send the response for validating the blockchain
        response
            .status(200) // HTTP status code 200: OK
            .send(responseMsg); // Response message
    });
}

module.exports = validate;
