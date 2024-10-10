// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Storage
 * @dev Một hợp đồng đơn giản để lưu trữ và truy xuất dữ liệu.
 */
contract Storage {
    uint256 private data;

    // Sự kiện được kích hoạt khi dữ liệu được lưu trữ
    event DataStored(uint256 newData);

    /**
     * @dev Lưu trữ một giá trị số nguyên không âm.
     * @param _data Giá trị số nguyên không âm cần lưu trữ.
     */
    function set(uint256 _data) public {
        data = _data;
        emit DataStored(_data);
    }

    /**
     * @dev Truy xuất giá trị đã lưu trữ.
     * @return Giá trị số nguyên không âm đã được lưu trữ.
     */
    function get() public view returns (uint256) {
        return data;
    }
}