// src/crypto-lock-protocol/protocols/DisputeProtocol.js
const Commitment = require('../utils/Commitment');
const CONFIG = require('../config');

class DisputeProtocol {
    constructor(pa, SCt, Scr, I1) {
        this.pa = pa;
        this.SCt = SCt;
        this.Scr = Scr;
        this.I1 = I1;
        this.commitment = new Commitment();
    }

    initiateDispute(TXL, PS1_pk, IS1_pk, r1, r2, r3, merkleProof) {
        const disputeTx = {
            TXL,
            PS1_pk,
            IS1_pk,
            r1,
            r2,
            r3,
            merkleProof
        };
        console.log('Gửi giao dịch tranh chấp đến SCt:', disputeTx);
        this.SCt.submitTransaction(disputeTx);

        // Kiểm tra cam kết
        const isValid = this.SCt.verifyTransaction(disputeTx);
        console.log('Kiểm tra tính hợp lệ của giao dịch tranh chấp:', isValid);
        if (isValid) {
            const verification = this.Scr.verifyInclusion(merkleProof);
            console.log('Kết quả xác minh Merkle Proof:', verification);
            if (verification) {
                // Tạo mapped coin và trừ collateral của I1
                this.SCt.generateMappedCoin();
                this.SCt.deductCollateral(this.pa, this.I1);
                console.log('Mapped coin đã được tạo và collateral của I1 đã bị trừ để bồi thường cho Pa.');
            } else {
                console.log('Xác minh Merkle Proof thất bại.');
            }
        } else {
            console.log('Giao dịch tranh chấp không hợp lệ.');
        }
    }
}

module.exports = DisputeProtocol;