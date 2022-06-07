// ./routes/mine.js
// * The server mines a new block, and adds it to its personal chain.

function mine(app) {
    app.get("/mine", (request, response) => {
        // Append our navbar
        let responseMessage = global.navbar;

        // Add the block to our chain, which calls mine()
        global.blockchain.addBlock();

        // Clear our transactions
        global.transactions = [];

        // Send a success response
        responseMessage += `<p>Block added: ${global.blockchain.getLastBlock().prettify()}</p>`;
        response.status(200).send(responseMessage);
    });
}

module.exports = mine;
