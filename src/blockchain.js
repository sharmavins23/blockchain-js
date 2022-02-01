// ./src/blockchain.js
// * Contains the class definition for a blockchain.

// * Imports
const Block = require("./block");

class Blockchain {
    constructor() {
        // Chain array contains all blocks in our copy of the blockchain
        this.chain = [new Block(Date.now().toString())]; // Create genesis block
    }

    // Returns the last block in the chain
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    // Returns the length of our chain
    getChainLength() {
        return this.chain.length;
    }

    // Adds a new block to the chain
    addBlock(newBlock) {
        // Since we are adding a new block, we need to set its prevHash
        newBlock.prevHash = this.getLastBlock().hash;
        // Then we need to reset the new block's hash
        newBlock.hash = newBlock.getHash();

        // Let's add the new block to the chain, and make it immutable
        this.chain.push(Object.freeze(newBlock));
    }

    // Validates the chain
    isChainValid(blockchain = this) {
        // Iterate over the chain, skipping the genesis block (i=1)
        for (let i = 1; i < blockchain.chain.length; i++) {
            const currentBlock = blockchain.chain[i];
            const prevBlock = blockchain.chain[i - 1];

            // Validate the current block's hash from the previous
            if (
                // Check the hash, which was mined
                currentBlock.hash !== currentBlock.getHash() ||
                // Check that the current block's prevHash matches
                prevBlock.hash !== currentBlock.prevHash
            ) {
                return false;
            }
        }

        // At this point, all the blocks in the chain line up with hashes
        //  so the chain is valid
        return true;
    }
}

// Export this object to be used elsewhere
module.exports = Blockchain;
