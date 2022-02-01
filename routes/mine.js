// ./routes/mine.js
// * The server mines a new block, and adds it to its personal chain.

// * Imports
const fetch = require("node-fetch"); // Used for making HTTP requests
const Blockchain = require("../src/blockchain");
const Block = require("../src/block");

function mine(app) {
    app.post("/mine", (request, response) => {
        // Start by checking all connections to see if they have a new block
        let maxLength = 0;
        let maxLengthConnection = null;
        for (let connection of connections) {
            // GET their chain length
            fetch(`http://${connection}/length`)
                .then((response) => response.json()) // Convert to JSON
                .then((data) => {
                    // If their chain is longer, update ours
                    if (data.length > maxLength) {
                        maxLength = data.length; // Save that length
                        maxLengthConnection = connection; // Save their addr.
                    }
                })
                .catch((error) => console.log(error));
        }

        // Convert the longest chain into an object
        let newChain = null;
        fetch(`http://${maxLengthConnection}/chain`)
            .then((response) => response.json()) // Convert to JSON
            .then((data) => {
                // Create a new block with the data
                newChain = Blockchain.fromJSON(data.chain);
            });

        // Update our chain with this
        global.blockchain.replaceChain(newChain);

        // NOW we can attempt to mine a block
        let block = new Block(Date.now(), global.transactions);
        block.mine(); // Compute a hash for the block

        // Add the block to our chain
        global.blockchain.addBlock(block);

        // Clear our transactions
        global.transactions = new Set();

        // Send a success response
        response.status(200).send("Block mined!");
    });
}

module.exports = mine;
