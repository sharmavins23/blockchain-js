// ./src/block.js
// * Contains the class definition for a single block.

// * Imports
const crypto = require("crypto"); // Used for encryption algorithms; Built-in
// Define a SHA256 hash function from our crypto library
function SHA256(message) {
    return crypto
        .createHash("sha256") // Set the hashing algorithm to SHA256
        .update(message) // Update the hash with the message
        .digest("hex"); // Return the hash as a hexadecimal string
}

class Block {
    constructor(timestamp = "", transactions = []) {
        this.timestamp = timestamp;
        this.transactions = transactions; // Transaction list
        this.hash = this.getHash(); // Current block's hash
        this.prevHash = ""; // Previous block's hash
        this.nonce = 0; // Some random value for mining purposes
    }

    // Returns the hash of the current block
    getHash() {
        // Combine all transactions into strings
        let txStr = "";
        for (let i = 0; i < this.transactions.length; i++) {
            txStr += JSON.stringify(this.transactions[i]);
        }

        // Hash together...
        return SHA256(
            this.prevHash + // The previous hash,
                this.timestamp + // The timestamp of the block,
                txStr + // And all transactions,
                this.nonce // And let's toss in some random nonce for fun
        );
    }

    // Mine a new block (generate a hash that works)
    mine(difficulty = 1) {
        // Let's loop until our hash starts with a string 0...000
        //  The length of this string is set through difficulty (default: 1)
        let checkString = Array(difficulty + 1).join("0");

        let tries = 0;
        while (!this.hash.startsWith(checkString)) {
            // Increase the nonce so we get a whole different hash
            this.nonce++;

            // Recompute the entire hash
            this.hash = this.getHash();

            // Count our tries!
            tries++;
        }

        // Out of curiosity, let's see how many tries we took!
        console.log(`Block mined with ${tries} attempts.`);
    }

    // Pretty prints the block
    prettify() {
        // Add basic block parameters
        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;
        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;
        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;

        blockStr += "<div><b>Transactions:</b></div><div>";
        // Iterate through all transactions
        for (let i = 0; i < this.transactions.length; i++) {
            blockStr += "    " + this.transactions[i].prettify();
        }
        blockStr += "</div>";

        return blockStr;
    }
}

// Export this object to be used elsewhere
module.exports = Block;
