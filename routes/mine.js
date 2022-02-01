// ./routes/mine.js
// * The server mines a new block, and adds it to its personal chain.

// * Imports
const Blockchain = require("../src/blockchain");
const Block = require("../src/block");

function mine(app) {
    app.get("/mine", (request, response) => {
        // Attempt to mine a block
        let block = new Block(Date.now(), global.transactions);
        block.mine(3); // Compute a hash for the block

        // Add the block to our chain
        global.blockchain.addBlock(block);

        // Clear our transactions
        global.transactions = [];

        // Send a success response
        response.status(200).send(`Block mined with hash: ${block.hash}`);
    });
}

module.exports = mine;
