import crypto from 'crypto';
import bigInt, { BigInteger } from 'big-integer';

const bitSecurity: number = 32;

const bigMath = {
  add(a: BigInteger, b: BigInteger, c?: BigInteger): BigInteger {
    if (c) {
      return a.add(b).mod(c);
    }
    return a.add(b);
  },
  subtract(a: BigInteger, b: BigInteger, c?: BigInteger): BigInteger {
    if (c) {
      return a.subtract(b).mod(c);
    }
    return a.subtract(b);
  },
  multiply(a: BigInteger, b: BigInteger, c?: BigInteger): BigInteger {
    if (c) {
      return a.multiply(b).mod(c);
    }
    return a.multiply(b);
  },
  divide(a: BigInteger, b: BigInteger, c?: BigInteger): BigInteger {
    if (c) {
      return a.divide(b).mod(c);
    }
    return a.divide(b);
  },
  power(p: BigInteger, s: number, c?: BigInteger): BigInteger {
    if (c) {
      return p.modPow(s, c);
    }
    return p.pow(s);
  }
};

class Pedersen {
  private abstractMath: typeof bigMath;
  private p: BigInteger;
  private g: BigInteger;
  private q: BigInteger;

  constructor(p: string, g: string, abstractMath = bigMath) {
    this.abstractMath = abstractMath;
    this.p = bigInt(p, 16);
    this.g = bigInt(g, 16);
    this.q = this.abstractMath.add(this.abstractMath.multiply(this.p, bigInt(2)), bigInt(1));
  }

  /**
   * Tạo một bí mật mới.
   * @returns Bí mật dưới dạng hex.
   */
  newSecret(): string {
    return this.newOffset();
  }

  /**
   * Tạo một offset mới.
   * @returns Offset dưới dạng hex.
   */
  newOffset(): string {
    let r: BigInteger = bigInt(0);
    while (r.lesserOrEquals(0) || r.greaterOrEquals(this.p)) {
      const bytes: Buffer = crypto.randomBytes(bitSecurity);
      r = bigInt.fromArray([...bytes], 256).mod(this.p);
    }
    r = r.mod(this.p);
    return r.toString(16).padStart(40, '0');
  }

  /**
   * Tạo cam kết cho một thông điệp.
   * @param message - Thông điệp dưới dạng hex.
   * @param secret - Bí mật dưới dạng hex.
   * @param r - Offset dưới dạng hex. Nếu không cung cấp, tự tạo.
   * @returns Mảng chứa cam kết và offset dưới dạng hex.
   */
  commit(message: string, secret: string, r: string = this.newOffset()): [string, string] {
    const rBigInt: BigInteger = bigInt(r, 16);
    const m: BigInteger = bigInt(message, 16);
    const h: BigInteger = bigInt(this.g).modPow(bigInt(secret, 16), this.q);

    const c: BigInteger = this.abstractMath.multiply(
      this.abstractMath.power(this.g, m.toJSNumber(), this.q),
      this.abstractMath.power(h, rBigInt.toJSNumber(), this.q),
      this.q,
    );
    return [c.toString(16), rBigInt.toString(16)];
  }

  /**
   * Xác minh cam kết.
   * @param message - Thông điệp dưới dạng hex.
   * @param commitments - Mảng cam kết chứa các cam kết và offset dưới dạng hex.
   * @param secret - Bí mật dưới dạng hex.
   * @returns Kết quả xác minh.
   */
  verify(message: string, commitments: [string, string][], secret: string): boolean {
    const commitment = this.combine(commitments);
    const r = commitment[1];
    const c = this.commit(message, secret, r);
    
    return c[0] === commitment[0];
  }
  
  /**
   * Kết hợp các cam kết.
   * @param commitments - Mảng cam kết chứa các cam kết và offset dưới dạng hex.
   * @returns Mảng chứa cam kết kết hợp và tổng offset dưới dạng hex.
   */
  combine(commitments: [string, string][]): [string, string] {
    let c: BigInteger = bigInt(1);
    let r: BigInteger = bigInt(0);
    for (const commitment of commitments) {
      c = c.multiply(bigInt(commitment[0], 16)).mod(this.q);
      r = r.add(bigInt(commitment[1], 16));
    }
    return [c.toString(16), r.toString(16)];
  }
}

export default Pedersen;


function main(){
    const p = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F'; // Ví dụ giá trị p trong hex
const g = '02'; // Ví dụ giá trị g trong hex

// Tạo một instance của Pedersen
const pedersen = new Pedersen(p, g);

// Ví dụ thông điệp cần cam kết (dưới dạng hex)
const message1 = '1a2b3c4d5e';
const message2 = 'abcdef1234';

// Tạo bí mật mới cho mỗi thông điệp
const secret1 = pedersen.newSecret();
const secret2 = pedersen.newSecret();

// Tạo cam kết cho mỗi thông điệp
const commitment1 = pedersen.commit(message1, secret1);
const commitment2 = pedersen.commit(message2, secret2);

// Hiển thị các cam kết và bí mật
console.log('Commitment 1:', commitment1);
console.log('Secret 1:', secret1);
console.log('Commitment 2:', commitment2);
console.log('Secret 2:', secret2);

// Kết hợp các cam kết
const combinedCommitments = [commitment1, commitment2];

// Xác minh các cam kết
const isValid = pedersen.verify(
  // Kết hợp thông điệp nếu cần (tùy thuộc vào logic cụ thể)
  message1, // Bạn có thể cần điều chỉnh tùy theo cách bạn muốn kết hợp thông điệp
  combinedCommitments,
  secret1 // Tùy thuộc vào việc bạn muốn xác minh với bí mật nào
);

console.log('Các cam kết hợp lệ:', isValid);
// Ví dụ với một cam kết duy nhất
const message = 'deadbeef';
const secret = pedersen.newSecret();
const commitment = pedersen.commit(message, secret);

console.log('Commitment:', commitment);
console.log('Secret:', secret);

    const isSingleValid = pedersen.verify(message, [commitment], secret);
    console.log('Cam kết đơn hợp lệ:', isSingleValid);
}

main()  