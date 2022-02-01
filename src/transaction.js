// ./src/transaction.js
// * Contains the class definition for a single transaction.

class Transaction {
    constructor(fromAddress = "", toAddress = "", amount = 0) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    // Overloaded constructor for JSONified transactions
    static fromJSON(json) {
        return new Transaction(json.fromAddress, json.toAddress, json.amount);
    }

    // Returns the transaction as a JSON object
    jsonify() {
        return {
            fromAddress: this.fromAddress,
            toAddress: this.toAddress,
            amount: this.amount,
        };
    }
}

module.exports = Transaction;
