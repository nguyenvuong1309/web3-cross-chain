const crypto = require('crypto');
const zkSNARK = require('snarkjs'); // Thay bằng thư viện zk-SNARK thực tế bạn sử dụng
const { MerkleTree } = require('merkletreejs'); // Thư viện Merkle Tree
const sha256 = require('sha256'); // Thư viện hàm băm SHA-256

class MCCT {
    constructor() {
        this.pp = null; // Public parameters
        this.CMListS1 = new MerkleTree([], sha256, { sortPairs: true });
        this.CMListS2 = new MerkleTree([], sha256, { sortPairs: true });
    }

    /**
     * Setup phase
     * @param {number} lambda - Độ khó (security parameter)
     * @returns {Object} - Public parameters
     */
    setup(lambda) {
        // Compute (pk, vk) ← zk-SNARK.Setup(1^lambda, C_SPEEND)
        const { vk, provingKey: pk } = zkSNARK.fflonk.setup("C_SPEEND");

        // Initialize Merkle trees và commitment sets
        this.CMListS1 = new MerkleTree([], sha256, { sortPairs: true });
        this.CMListS2 = new MerkleTree([], sha256, { sortPairs: true });

        // Set pp ← (pkSPEND, vkSPEND)
        this.pp = { pkSPEND: pk, vkSPEND: vk };

        return this.pp;
    }

    /**
     * Key Generation
     * @param {Object} pp - Public parameters
     * @returns {Object} - { apk, ask }
     */
    keyGen(pp) {
        // Randomly sample ask và p
        const ask = crypto.randomBytes(32).toString('hex');
        const p = crypto.randomBytes(32).toString('hex');

        // Compute apk = Hash(ask || p)
        const apk = sha256(ask + p);

        return { apk, ask };
    }

    /**
     * Mint function
     * @param {number} v - Giá trị
     * @param {string} apk - Public key của người nhận
     * @param {string} rtS - Some identifier
     * @returns {Object} - { mcS, TXm }
     */
    mint(v, apk, rtS) {
        const mcS = sha256(`${v}${apk}${crypto.randomBytes(32).toString('hex')}`);
        const TXm = {
            rtS,
            mcS,
            v
        };
        this.CMListS1.addLeaf(mcS);
        // Không cần gọi makeTree()
        console.log(`mcS (${mcS}) đã được thêm vào CMListS1`);
        return { mcS, TXm };
    }

    /**
     * Transfer function
     * @param {string} rtS - Some identifier
     * @param {string} mc_in_S - Mapped commitment input
     * @param {number} v_out - Giá trị xuất
     * @param {string} a_out_pk - Public key của người nhận
     * @returns {Object} - { mc_out_S1, mc_out_S2, TXe }
     */
    transfer(rtS, mc_in_S, v_out, a_out_pk) {
        const { a_in_pk, a_in_sk, pin, vin, sin, Cin_S } = mc_in_S;

        if (!Cin_S) {
            console.error('Cin_S không tồn tại trong mc_in_S');
            return;
        }

        // Kiểm tra xem Cin_S có trong cây Merkle không
        const isLeafPresent = this.CMListS1.getLeaves().some(leaf => leaf.toString('hex') === Cin_S);
        if (!isLeafPresent) {
            console.error(`Cin_S (${Cin_S}) không tồn tại trong CMListS1`);
            return;
        }

        // Compute snin_S = Hash(CS || ask)
        const snin_S = sha256(`${Cin_S}${a_in_sk}`);

        // Randomly sample sout
        const sout = crypto.randomBytes(32).toString('hex');

        // Compute mc_out_S = Hash(v_out || a_out_pk || sout)
        const mc_out_S = sha256(`${v_out}${a_out_pk}${sout}`);

        // Tạo đối tượng mc_out_S_full
        const mc_out_S_full = {
            a_out_pk,
            a_out_sk: crypto.randomBytes(32).toString('hex'), // Giả lập khóa riêng
            pout: 'pout_example', // Placeholder
            v_out,
            sout,
            Cout_S: 'Cout_S_example' // Placeholder
        };

        // Thêm mc_out_S vào CMListS2
        this.CMListS2.addLeaf(mc_out_S);
        // Không cần gọi makeTree()

        // Set s_i
        const s_i = {
            rtSi: rtS,
            snin_Si: snin_S,
            Cout_Si: 'Cout_S_example',
            zero: 0,
            pathCin_S: this.CMListS1.getProof(Cin_S).map(x => x.data.toString('hex'))
        };

        // Set w_i
        const w_i = {
            Cin_Si: Cin_S,
            sin_Si: sin,
            sout_Si: sout,
            vin_Si: vin,
            vout_Si: v_out,
            a_in_pk_Si: a_in_pk,
            a_in_sk_Si: a_in_sk,
            a_out_pk_Si: a_out_pk,
            pin_Si: pin
        };

        // Compute π_SPEEND = zkSNARK.prove(this.pp.pkSPEND, w_i, s_i)
        // Đảm bảo phương thức proof đúng cách
        const pi_SPEEND = zkSNARK.prove(this.pp.pkSPEND, w_i, s_i);

        // Set TXe = (s_i, w_i, pi_SPEEND)
        const TXe = {
            s_i,
            w_i,
            pi_SPEEND
        };

        return { mc_out_S1: mc_out_S, mc_out_S2: mc_out_S, TXe };
    }

    /**
     * Redeem function
     * @param {string} rtS - Some identifier
     * @param {Object} mc_in_S - Mapped commitment input
     * @param {number} v_out - Giá trị xuất
     * @param {string} vp_pub - Public value
     * @param {string} a_out_pk - Public key của người nhận
     * @param {Object} I - Caller or initiator
     * @returns {Object} - { mc_out_S, TXr }
     */
    redeem(rtS, mc_in_S, v_out, vp_pub, a_out_pk, I) {
        // Parse mc_in_S
        const { a_in_pk, a_in_sk, pin, vin, sin, Cin_S } = mc_in_S;

        // Compute snin_S = Hash(CS || ask)
        const snin_S = sha256(`${Cin_S}${a_in_sk}`);

        // Randomly sample sout
        const sout = crypto.randomBytes(32).toString('hex');

        // Compute mc_out_S = Hash(v_out || a_out_pk || sout)
        const mc_out_S = sha256(`${v_out}${a_out_pk}${sout}`);

        // Tạo đối tượng mc_out_S_full
        const mc_out_S_full = {
            a_out_pk,
            a_out_sk: crypto.randomBytes(32).toString('hex'), // Giả lập khóa riêng
            pout: 'pout_example',
            v_out,
            sout,
            Cout_S: 'Cout_S_example'
        };

        // Thêm mc_out_S vào CMListS2
        this.CMListS2.addLeaf(mc_out_S);
        this.CMListS2.makeTree();

        // Set s_i
        const s_i = {
            rtSi: rtS,
            snin_Si: snin_S,
            Cout_Si: 'Cout_S_example',
            vpub: vp_pub,
            pathCin_Si: this.CMListS1.getProof(Cin_S).map(x => x.data.toString('hex'))
        };

        // Set w_i
        const w_i = {
            Cin_Si: Cin_S,
            sin_Si: sin,
            sout_Si: sout,
            vin_Si: vin,
            vout_Si: v_out,
            a_in_pk_Si: a_in_pk,
            a_in_sk_Si: a_in_sk,
            a_out_pk_Si: a_out_pk,
            pin_Si: pin,
            path_Cin_Si: this.CMListS1.getProof(Cin_S).map(x => x.data.toString('hex'))
        };

        // Compute π_SPEEND = zk-SNARK.Prove(pkSPEEND, w_i, s_i)
        const pi_SPEEND = zkSNARK.prove(this.pp.pkSPEND, w_i, s_i);

        // Set TXr = (s_i, pi_SPEEND, I)
        const TXr = {
            s_i,
            pi_SPEEND,
            I
        };

        return { mc_out_S: mc_out_S, TXr };
    }

    /**
     * Exchange function
     * @param {string} rtS1 - Some identifier 1
     * @param {string} rtS2 - Some identifier 2
     * @param {Object} mc_in_S1 - Mapped commitment input S1
     * @param {Object} mc_out_S2 - Mapped commitment output S2
     * @param {number} v_out_S1 - Giá trị xuất S1
     * @param {number} v_out_S2 - Giá trị xuất S2
     * @param {string} a_out_pk_S1 - Public key của người nhận S1
     * @param {string} a_out_pk_S2 - Public key của người nhận S2
     * @returns {Object} - { mc_out_S1, mc_out_S2, TXe }
     */
    exchange(rtS1, rtS2, mc_in_S1, mc_out_S2, v_out_S1, v_out_S2, a_out_pk_S1, a_out_pk_S2) {
        let TXe_exchange = {};

        for (let i = 1; i <= 2; i++) {
            const rtSi = i === 1 ? rtS1 : rtS2;
            const mc_in_Si = i === 1 ? mc_in_S1 : mc_out_S2;

            // Parse mc_in_Si
            const { a_in_pk, a_in_sk, pin, vin, sin, Cin_S } = mc_in_Si;

            // Compute snin_Si = Hash(Cin_Si || a_in_sk_Si)
            const snin_Si = sha256(`${Cin_S}${a_in_sk}`);

            // Randomly sample sout_Si
            const sout_Si = crypto.randomBytes(32).toString('hex');

            // Compute mc_out_Si = Hash(vout_Si || a_out_pk_Si || sout_Si)
            const v_out_Si = i === 1 ? v_out_S1 : v_out_S2;
            const a_out_pk_Si = i === 1 ? a_out_pk_S1 : a_out_pk_S2;
            const mc_out_Si = sha256(`${v_out_Si}${a_out_pk_Si}${sout_Si}`);

            // Tạo đối tượng mc_out_Si_full
            const mc_out_Si_full = {
                a_out_pk: a_out_pk_Si,
                a_out_sk: crypto.randomBytes(32).toString('hex'), // Giả lập khóa riêng
                pout: 'pout_Si_example',
                v_out: v_out_Si,
                sout: sout_Si,
                Cout_S: 'Cout_Si_example'
            };

            // Thêm mc_out_Si vào CMListS2
            this.CMListS2.addLeaf(mc_out_Si);
            this.CMListS2.makeTree();

            // Set s_i
            const s_i = {
                rtSi: rtSi,
                snin_Si: snin_Si,
                Cout_Si: 'Cout_Si_example',
                special_param: 'vp_pub_example', // Placeholder cho vpub
                pathCin_Si: this.CMListS1.getProof(Cin_S).map(x => x.data.toString('hex'))
            };

            // Set w_i
            const w_i = {
                Cin_Si: Cin_S,
                sin_Si: sin,
                sout_Si: sout_Si,
                vin_Si: vin,
                vout_Si: v_out_Si,
                a_in_pk_Si: a_in_pk,
                a_in_sk_Si: a_in_sk,
                a_out_pk_Si: a_out_pk_Si,
                pin_Si: pin,
                path_Cin_Si: this.CMListS1.getProof(Cin_S).map(x => x.data.toString('hex'))
            };

            // Compute π_Si = zk-SNARK.Prove(pkSPEEND, w_i, s_i)
            const pi_Si = zkSNARK.prove(this.pp.pkSPEND, w_i, s_i);

            // Set TXe = (s_i, pi_Si)
            const TXe = {
                s_i,
                pi_Si
            };

            // Gán vào TXe_exchange
            TXe_exchange[`TXe${i}`] = TXe;
        }

        const mc_out_S1 = sha256(`${v_out_S1}${a_out_pk_S1}${crypto.randomBytes(32).toString('hex')}`);
        const mc_out_S2_new = sha256(`${v_out_S2}${a_out_pk_S2}${crypto.randomBytes(32).toString('hex')}`);

        return { mc_out_S1, mc_out_S2_new, TXe_exchange };
    }
}

module.exports = MCCT;