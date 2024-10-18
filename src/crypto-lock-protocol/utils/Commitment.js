const crypto = require('crypto');

class Commitment {
    constructor() {}

    hashSHA256(data) {
        return crypto.createHash('sha256').update(data).digest('hex');
    }

    pedersenCommitment(value, randomness) {
        // Đây chỉ là một mô phỏng đơn giản của Pedersen Commitment
        return this.hashSHA256(`${value}${randomness}`);
    }
}

module.exports = Commitment;