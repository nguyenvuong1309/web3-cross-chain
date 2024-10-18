const Commitment = require('../utils/Commitment');
const Blockchain = require('../utils/Blockchain');
const CONFIG = require('../config');

class ReleaseProtocol {
    constructor(pa, I1, SCt, Scr) {
        this.pa = pa;
        this.I1 = I1;
        this.SCt = SCt;
        this.Scr = Scr;
        this.commitment = new Commitment();
        this.sourceBlockchain = new Blockchain('Source');
        this.transactionBlockchain = new Blockchain('Transaction');
    }

    requestReleaseTransaction(r_tS2, s_nin, v_b, pi_SP_END, Cout_S2) {
        const TX_R = {
            r_tS2,
            s_nin,
            v_b,
            pi_SP_END,
            Cout_S2
        };
        console.log('Pa yêu cầu giao dịch giải phóng từ SCt:', TX_R);
        this.SCt.submitTransaction(TX_R);
        return TX_R;
    }

    verifyReleaseTransaction(TX_R) {
        // Giả sử SCt xác minh TX_R theo MCCT
        // Ở đây, chúng ta chỉ đơn giản kiểm tra xem TX_R đã được submit chưa
        const isValid = this.SCt.verifyTransaction(TX_R);
        console.log('Kiểm tra tính hợp lệ của giao dịch giải phóng:', isValid);
        return isValid;
    }

    createReleaseTransactionCommittents(ps2_pk, is2_pk, vt) {
        const com1 = this.commitment.pedersenCommitment(ps2_pk, Math.random());
        const com2 = this.commitment.pedersenCommitment(is2_pk, Math.random());
        const com3 = this.commitment.pedersenCommitment(vt, Math.random());
        return { com1, com2, com3 };
    }

    initiateRelease(r_tS2, s_nin, v_b, pi_SP_END, Cout_S2) {
        // Pa yêu cầu giao dịch giải phóng
        const TX_R = this.requestReleaseTransaction(r_tS2, s_nin, v_b, pi_SP_END, Cout_S2);

        // SCt xác minh giao dịch giải phóng
        if (this.verifyReleaseTransaction(TX_R)) {
            // I1 gửi address IS2_pk và tổng giá trị giao dịch vt = va - vf cho Pa
            const IS2_pk = `IS2_pk_${Math.random()}`;
            const vt = 10 - 1; // ví dụ: va = 10 BTC, vf = 1 BTC
            console.log(`I1 gửi IS2_pk: ${IS2_pk} và vt: ${vt} BTC cho Pa`);

            // Pa chọn random numbers r1, r2, r3 và address PS2_pk để gửi cho I1
            const r1 = Math.random();
            const r2 = Math.random();
            const r3 = Math.random();
            const PS2_pk = `PS2_pk_${Math.random()}`;
            console.log(`Pa chọn r1: ${r1}, r2: ${r2}, r3: ${r3} và PS2_pk: ${PS2_pk} để gửi cho I1`);

            // I1 tính các cam kết
            const commitments = this.createReleaseTransactionCommittents(PS2_pk, IS2_pk, vt);
            console.log('I1 đã tạo các cam kết:', commitments);

            // I1 gửi các cam kết và đặt cọc vd
            const vd = CONFIG.rateT_B_S2 * 1 * 10 * CONFIG.alpha; // giả sử rateT_B_S2 đã được định nghĩa trong CONFIG
            console.log(`I1 đặt cọc: ${vd} BTC`);
            this.I1.depositCollateral(vd);

            // Gửi các cam kết đến SCt
            this.SCt.submitTransaction(commitments);
            console.log('I1 đã gửi các cam kết đến SCt');

            // SCt xác minh cam kết và chuyển vt đến Pa trong blockchain nguồn
            const verifyCommitments = this.verifyCommitments(commitments);
            if (verifyCommitments) {
                this.sourceBlockchain.submitTransaction({
                    from: this.I1.address,
                    to: this.pa,
                    amount: vt
                });
                console.log(`SCt chuyển ${vt} BTC từ ${this.I1.address} đến ${this.pa} trong blockchain nguồn`);

                // Thực hiện trong khoảng thời gian tối đa
                setTimeout(() => {
                    this.I1.sendTransactionResults(this.transactionBlockchain);
                    console.log('I1 gửi kết quả giao dịch đến Blockchain giao dịch.');
                }, CONFIG.deltaTx * 1000);
            } else {
                console.log('Các cam kết không hợp lệ.');
            }
        } else {
            console.log('Giao dịch giải phóng không hợp lệ.');
        }
    }

    verifyCommitments(commitments) {
        // Giả sử SCt xác minh các cam kết
        // Ở đây, chúng ta chỉ đơn giản kiểm tra xem các cam kết đã được submit chưa
        const isValid = this.SCt.verifyTransaction(commitments);
        console.log('Kiểm tra tính hợp lệ của các cam kết:', isValid);
        return isValid;
    }
}

module.exports = ReleaseProtocol;