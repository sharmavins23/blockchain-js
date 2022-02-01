// ./routes/validate.js
// * The server validates the blockchain.

function validate(app) {
    // Validate the server's instance of a blockchain
    app.get("/validate", function (request, response) {
        // Check if the blockchain is valid
        let isValid = global.blockchain.isChainValid();

        // Formulate a response message
        let responseStr = "";
        if (isValid) {
            responseStr = "The blockchain is valid!";
        } else {
            responseStr = "The blockchain is invalid!";
        }

        // Send the response for validating the blockchain
        response
            .status(200) // HTTP status code 200: OK
            .send(responseStr); // Response message
    });
}

module.exports = validate;
