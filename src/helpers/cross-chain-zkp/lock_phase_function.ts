// Nhập các thư viện cần thiết
import * as crypto from 'crypto';
var EC = require('elliptic').ec;
import { MerkleTree } from 'merkletreejs';
import { ZkVickreyAuctionC__factory as ZkVickreyAuctionCfactory } from "../../../src/types/factories/contracts/cross-chain-zkp/pedersen-commitment/zkVickreyAuction.sol";
import { ethers } from 'ethers';
import { config } from 'dotenv';
config();


// Sử dụng đường cong elliptic secp256k1 (thường được sử dụng trong tiền điện tử)
const ec = new EC('secp256k1');

// Các tham số Cam kết Pedersen (các sinh tố)
const G: any = ec.g;
const H: any = ec.keyFromPrivate(crypto.randomBytes(32)).getPublic();

// Hàm trợ giúp để thực hiện hàm băm với một số ngẫu nhiên (nonce)
function hashWithNonce(data: string, nonce: Buffer): string {
  return crypto
    .createHash('sha256')
    .update(data + nonce.toString('hex'))
    .digest('hex');
}

// Hàm trợ giúp cho Cam kết Pedersen
function pedersenCommitment(value: bigint, blindingFactor: bigint): any {
  // C = v*G + r*H
  const vG = G.mul(value);
  const rH = H.mul(blindingFactor);
  const commitment = vG.add(rH);
  return commitment;
}

// Bước 1: Pa tạo khóa riêng ask và khóa công khai tương ứng apk
function generateKeys(): { ask: Buffer; apk: string } {
  const ask = crypto.randomBytes(32); // Khóa riêng
  const p = crypto.randomBytes(32); // Số ngẫu nhiên p
  const hashP = crypto.createHash('sha256').update(p).digest();
  const apk = crypto
    .createHash('sha256')
    .update(ask)
    .update(hashP)
    .digest('hex'); // apk = Hash_p(ask)
  return { ask, apk };
}

async function commit(){
  const fantomProvider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_FANTOM_RPC);
  const fantomWallet = new ethers.Wallet(
    process.env.NEXT_PUBLIC_FANTOM_ACCOUNT_PRIVATE_KEY as string,
    fantomProvider
  );

  const pedersenContract = new ethers.Contract(
    process.env.NEXT_PUBLIC_PEDERSEN_COMMITMENT_CONTRACT_ADDRESS_FANTOM as string,
    ZkVickreyAuctionCfactory.abi,
    fantomWallet
  );

  const bid = await pedersenContract.bid(123, 456, 789, {
    gasLimit: ethers.utils.hexlify(1000000)
  });

  const commitEvent = await pedersenContract.verify(123, ethers.utils.parseEther("100"),
  {
    gasLimit: ethers.utils.hexlify(1000000)
  }
);
  
}

// Bước 2: Pa tính toán cam kết đồng tiền được ánh xạ C_va_S1
function computeMappedCoinCommitment(va: number, apk: string): { C_va_S1: string; s: Buffer } {
  const s = crypto.randomBytes(32); // Số ngẫu nhiên s
  const hashS = crypto.createHash('sha256').update(s).digest();
  const commitmentData = va.toString() + apk;
  const C_va_S1 = crypto
    .createHash('sha256')
    .update(commitmentData)
    .update(hashS)  
    .digest('hex');
  return { C_va_S1, s };
}

// Bước 3: Pa yêu cầu một giao dịch khóa TXL từ SCt
function requestLockTransaction(C_va_S1: string): { TXL: string; C_va_S1: string } {
  // Mô phỏng việc gửi yêu cầu tới SCt
  return { TXL: 'LockTransactionData', C_va_S1 };
}

// Bước 4: SCt xác minh TXL (Đơn giản hóa)
function verifyTXL(TXL: string): boolean {
  // Mô phỏng quá trình xác minh
  return TXL === 'LockTransactionData';
}

// Bước 5: I1 gửi địa chỉ I_S1_pk và tổng giá trị giao dịch vt đến Pa
function intermediarySendsInfo(va: number, vf: number): { I_S1_pk: string; vt: number } {
  const I_S1_sk = crypto.randomBytes(32); // Khóa riêng của trung gian
  const I_S1_pk = ec.keyFromPrivate(I_S1_sk).getPublic('hex'); // Khóa công khai của trung gian
  const vt = va + vf; // Tổng giá trị giao dịch
  return { I_S1_pk, vt };
}

// Bước 6: Pa chọn số ngẫu nhiên r1, r2, r3 và gửi P_S1_pk cho I1
function PaSendsRandomNumbersAndAddress(): {
  r1: Buffer;
  r2: Buffer;
  r3: Buffer;
  P_S1_pk: string;
} {
  const r1 = crypto.randomBytes(32);
  const r2 = crypto.randomBytes(32);
  const r3 = crypto.randomBytes(32);
  const P_S1_sk = crypto.randomBytes(32);
  const P_S1_pk = ec.keyFromPrivate(P_S1_sk).getPublic('hex');
  return { r1, r2, r3, P_S1_pk };
}

// Bước 7: I1 tính toán cam kết và đặt cọc collateral vd
function I1ComputesCommitments(
  P_S1_pk: string,
  I_S1_pk: string,
  vt: number,
  r1: Buffer,
  r2: Buffer,
  r3: Buffer
): {
  com1: any;
  com2: any;
  com3: any;
  vd: number;
} {
  const com1 = pedersenCommitment(
    BigInt('0x' + P_S1_pk),
    BigInt('0x' + r1.toString('hex'))
  );
  const com2 = pedersenCommitment(
    BigInt('0x' + I_S1_pk),
    BigInt('0x' + r2.toString('hex'))
  );
  const com3 = pedersenCommitment(
    BigInt(vt),
    BigInt('0x' + r3.toString('hex'))
  );
  const vd = vt * 0.1; // Giá trị cọc collateral ví dụ
  // Mô phỏng việc gửi cam kết tới SCt
  return { com1, com2, com3, vd };
}

// Bước 8: SCt xác minh collateral và cam kết (Đơn giản hóa)
function verifyCollateralAndCommitments(
  com1: any,
  com2: any,
  com3: any
): boolean {
  // Mô phỏng quá trình xác minh
  return true;
}

// Bước 9: Pa chuyển vt đồng cho I1
function PaTransfersCoins(vt: number): { transactionId: string; amount: number } {
  // Mô phỏng việc chuyển đồng
  return { transactionId: 'Transaction123', amount: vt };
}

// Bước 10: I1 gửi kết quả giao dịch tới SCt
function I1SendsTransactionResults(transactionResult: {
  transactionId: string;
  amount: number;
}) {
  // Mô phỏng việc gửi kết quả tới SCt
  return transactionResult;
}

// Quy trình Giải quyết Tranh chấp
function disputeResolution(
  PaData: {
    TXL: string;
    P_S1_pk: string;
    I_S1_pk: string;
    r1: Buffer;
    r2: Buffer;
    r3: Buffer;
    merkleProof: any;
  },
  SCt: {
    generateMappedCoin: (data: any) => void;
    deductCollateral: () => void;
  },
  SCr: {
    verifyInclusionProof: (proof: any) => boolean;
  }
) {
  const { TXL, P_S1_pk, I_S1_pk, r1, r2, r3, merkleProof } = PaData;
  // SCt xác minh cam kết
  const com1Check = pedersenCommitment(
    BigInt('0x' + P_S1_pk),
    BigInt('0x' + r1.toString('hex'))
  );
  const com2Check = pedersenCommitment(
    BigInt('0x' + I_S1_pk),
    BigInt('0x' + r2.toString('hex'))
  );
  // Mô phỏng việc xác minh với các cam kết đã lưu
  const commitmentsValid = true; // Thay thế bằng so sánh thực tế
  if (commitmentsValid) {
    // SCt yêu cầu bằng chứng bao gồm từ SCr
    const inclusionValid = SCr.verifyInclusionProof(merkleProof);
    if (inclusionValid) {
      // Tạo đồng được ánh xạ và trừ collateral
      SCt.generateMappedCoin(PaData);
      SCt.deductCollateral();
    }
  }
}

// Mô phỏng các đối tượng SCt và SCr
const SCt = {
  generateMappedCoin: (data: any) => {
    console.log('Đồng được ánh xạ được tạo cho', data);
  },
  deductCollateral: () => {
    console.log('Collateral bị trừ từ trung gian');
  },
};

const SCr = {
  verifyInclusionProof: (proof: any): boolean => {
    // Mô phỏng việc xác minh bằng chứng Merkle
    return true;
  },
};

// Hàm chính để thực thi giao thức
function main() {

  // Bước 1
  const { ask, apk } = generateKeys();
  console.log('Pa đã tạo khóa:', { ask: ask.toString('hex'), apk });

  // Bước 2
  const va = 100; // Giá trị ví dụ
  const { C_va_S1, s } = computeMappedCoinCommitment(va, apk);
  console.log('Đã tính toán cam kết đồng tiền được ánh xạ:', C_va_S1);

  // Bước 3
  const { TXL } = requestLockTransaction(C_va_S1);
  console.log('Đã yêu cầu giao dịch khóa:', TXL);

  // Bước 4
  if (verifyTXL(TXL)) {
    console.log('TXL đã được SCt xác minh');
  }

  // Bước 5
  const vf = 10; // Phí
  const { I_S1_pk, vt } = intermediarySendsInfo(va, vf);
  console.log('Trung gian đã gửi địa chỉ và tổng giá trị giao dịch:', { I_S1_pk, vt });

  // Bước 6
  const { r1, r2, r3, P_S1_pk } = PaSendsRandomNumbersAndAddress();
  console.log('Pa đã gửi số ngẫu nhiên và địa chỉ cho I1');

  // Bước 7
  const { com1, com2, com3, vd } = I1ComputesCommitments(
    P_S1_pk,
    I_S1_pk,
    vt,
    r1,
    r2,
    r3
  );
  console.log('I1 đã tính toán cam kết và đặt cọc collateral:', { com1, com2, com3, vd });

  // Bước 8
  if (verifyCollateralAndCommitments(com1, com2, com3)) {
    console.log('Collateral và cam kết đã được SCt xác minh');
  }

  // Bước 9
  const transactionResult = PaTransfersCoins(vt);
  console.log('Pa đã chuyển đồng cho I1:', transactionResult);

  // Bước 10
  const result = I1SendsTransactionResults(transactionResult);
  console.log('I1 đã gửi kết quả giao dịch tới SCt:', result);

  // Giải quyết Tranh chấp (nếu cần)
  const PaData = {
    TXL,
    P_S1_pk,
    I_S1_pk,
    r1,
    r2,
    r3,
    merkleProof: 'MerkleProofData',
  };
  disputeResolution(PaData, SCt, SCr);
  console.log("Hoàn thành");
}

main();