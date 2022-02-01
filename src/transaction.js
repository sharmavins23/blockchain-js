// ./src/transaction.js
// * Contains the class definition for a single transaction.

// * Imports

class Transaction {
    constructor(fromAddress = "", toAddress = "", amount = 0) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

module.exports = Transaction;
