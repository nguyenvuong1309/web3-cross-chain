const Commitment = require('../utils/Commitment');
const Blockchain = require('../utils/Blockchain');
const CONFIG = require('../config');

class LockProtocol {
    constructor(pa, I1, SCt, Scr) {
        this.pa = pa;
        this.I1 = I1;
        this.SCt = SCt;
        this.Scr = Scr;
        this.commitment = new Commitment();
        this.sourceBlockchain = new Blockchain('Source');
        this.transactionBlockchain = new Blockchain('Transaction');
    }

    generateKeys() {
        // Giả sử tạo khóa đơn giản
        this.privateKey = `ask_${Math.random()}`;
        this.publicKey = this.commitment.hashSHA256(this.privateKey);
    }

    createLockTransaction(va) {
        this.generateKeys();
        const s = Math.random();
        const CvaS1 = this.commitment.pedersenCommitment(`${va}||${this.publicKey}`, s);
        const TX_L = {
            CvaS1,
            sender: this.pa,
            receiver: this.I1.address, // sửa thành address
            amount: va
        };
        this.SCt.submitTransaction(TX_L);
        console.log('Giao dịch khóa đã được tạo và gửi đến SCt:', TX_L);
        return TX_L;
    }

    initiateLock(va, vf) {
        const TX_L = this.createLockTransaction(va);
        if (this.SCt.verifyTransaction(TX_L)) {
            const I1_pk = `I1_pk_${Math.random()}`;
            const vt = va + vf;
            // Tính vd
            const vd = CONFIG.rateT_B_S1 * CONFIG.S1 * va * CONFIG.alpha;
            // Deposit collateral
            this.I1.depositCollateral(vd);
            console.log(`Collateral đã được gửi: ${vd} BTC`);

            // Tạo cam kết
            const com1 = this.commitment.pedersenCommitment(this.pa + '_PS1_pk', Math.random());
            const com2 = this.commitment.pedersenCommitment(I1_pk, Math.random());
            const com3 = this.commitment.pedersenCommitment(vt, Math.random());
            // Gửi cam kết đến SCt
            this.SCt.submitTransaction({ com1, com2, com3 });
            console.log('Cam kết đã được gửi đến SCt');

            // Chuyển vt đến I1 trong blockchain nguồn
            this.sourceBlockchain.submitTransaction({
                from: this.pa,
                to: this.I1.address,
                amount: vt
            });
            console.log(`Chuyển ${vt} BTC từ ${this.pa} đến ${this.I1.address} trong blockchain nguồn`);

            // Thực hiện trong khoảng thời gian tối đa
            setTimeout(() => {
                this.I1.sendTransactionResults(this.transactionBlockchain);
                console.log('Kết quả giao dịch đã được gửi đến Blockchain giao dịch.');
            }, CONFIG.deltaTx * 1000);
        } else {
            console.log('Giao dịch khóa không hợp lệ.');
        }
    }
}

module.exports = LockProtocol;