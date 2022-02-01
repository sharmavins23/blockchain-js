// ./src/transaction.js
// * Contains the class definition for a single transaction.

// Generates a random IPv4 address string as a mock address
function generateRandomIPv4() {
    let ipv4 = "";

    // Create network part 1
    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    // Create network part 2
    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    // Create host part 1
    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    // Create host part 2
    ipv4 += Math.floor(Math.random() * 255) + 1;

    return ipv4;
}

// Generates a random money amount as a mock amount
function generateRandomMoney() {
    return Math.floor(Math.random() * 1000000);
}

class Transaction {
    constructor(fromAddress = "", toAddress = "", amount = 0) {
        this.fromAddress = generateRandomIPv4();
        this.toAddress = generateRandomIPv4();
        this.amount = generateRandomMoney();
    }

    // Returns a pretty-print version of the transaction
    prettify() {
        let txStr = `<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>`;
        return txStr;
    }
}

// Export this object to be used elsewhere
module.exports = Transaction;
