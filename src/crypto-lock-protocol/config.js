const CONFIG = {
    rateT_B_S1: 0.05, // Tỉ lệ chuyển đổi
    rateT_B_S2: 0.04, // Tỉ lệ chuyển đổi cho Release Protocol
    alpha: 0.1,        // Tỉ lệ đảm bảo thêm
    S1: 2,             // Giá trị S1
    S2: 3,             // Giá trị S2
    deltaTx: 6,      // Thời gian trễ tối đa cho giao dịch (Δtx) - 600 giây (10 phút)
    deltaDispute: 18, // Thời gian trễ cho tranh chấp (Δdispute) - 1800 giây (30 phút)
    n: 3                // Tham số hệ thống
};

module.exports = CONFIG;