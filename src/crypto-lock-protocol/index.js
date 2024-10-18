// src/crypto-lock-protocol/index.js
const LockProtocol = require('./protocols/LockProtocol');
const DisputeProtocol = require('./protocols/DisputeProtocol');
const ReleaseProtocol = require('./protocols/ReleaseProtocol');
const Blockchain = require('./utils/Blockchain');
const MCCT = require('./utils/MCCT');
const CONFIG  = require('./config');

// Khởi tạo các bên tham gia
const pa = 'Pa_Address';
const I1 = {
    address: 'I1_Address',
    depositCollateral: function(amount) {
        console.log(`I1 đã đặt cọc: ${amount} BTC`);
    },
    sendTransactionResults: function(transactionBlockchain) {
        console.log('I1 gửi kết quả giao dịch đến Blockchain giao dịch.');
        transactionBlockchain.submitTransaction('Transaction_Result');
    }
};
const SCt = new Blockchain('SCt');
const Scr = new Blockchain('Scr');

// Thêm merkleProof_example vào Scr.transactions
Scr.submitTransaction('merkleProof_example');
console.log('Merkle Proof đã được thêm vào Scr.transactions');

// Khởi tạo giao thức khóa
const lockProtocol = new LockProtocol(pa, I1, SCt, Scr);
lockProtocol.initiateLock(10, 1); // va = 10 BTC, vf = 1 BTC

// Khởi tạo giao thức tranh chấp
const disputeProtocol = new DisputeProtocol(pa, SCt, Scr,I1);

// Khởi tạo giao thức release
const releaseProtocol = new ReleaseProtocol(pa, I1, SCt, Scr);

// // Khởi tạo MCCT
// const mcct = new MCCT();
// const pp = mcct.setup(CONFIG.lambda); // Ví dụ với λ = 128
// console.log('Public parameters:', pp);

// // Key Generation
// const { apk, ask } = mcct.keyGen(pp);
// console.log('Key Generation:', { apk, ask });

// // Mint
// const { mcS, TXm } = mcct.mint(10, apk, 'rtS_example');
// console.log('Mint:', { mcS, TXm });

// // Transfer
// const transferResult = mcct.transfer('rtS_example', TXm, 5, 'a_out_pk_example');
// console.log('Transfer:', transferResult);

// Giả sử pa phát hiện sự cố và khởi tạo tranh chấp sau một thời gian ngắn
setTimeout(() => {
    disputeProtocol.initiateDispute(
        'TXL_example',
        'PS1_pk_example',
        'IS1_pk_example',
        'r1_example',
        'r2_example',
        'r3_example',
        'merkleProof_example'
    );
}, CONFIG.deltaDispute * 1000);

// Giả sử pa yêu cầu giải phóng sau một thời gian ngắn
setTimeout(() => {
    releaseProtocol.initiateRelease(
        'r_tS2_example',
        's_nin_example',
        10,               // v_b = 10 BTC (ví dụ)
        'pi_SP_END_example',
        'Cout_S2_example'
    );
}, (CONFIG.deltaTx + 10) * 1000); // Thời gian trễ để đảm bảo giao thức khóa đã hoàn thành