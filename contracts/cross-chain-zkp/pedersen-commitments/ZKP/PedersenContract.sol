pragma solidity >=0.5.10 <0.9.0;

import "./EllipticCurve.sol";
import "./EllipticCurveInerface.sol";
import "../SafeMath.sol";

contract PedersenContract is EllipticCurveInterface {
    using SafeMath for uint256;

    uint256 public H = 12; // Default value for H
    uint256 public pp = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F; // Prime field
    uint256 public nn = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141; // Order
    uint256 public gx = 55066263022277343669578718895168534326250603453777594175500187360389116729240; // Gx
    uint256 public gy = 32670510020758816978083085130507043184471273380659243275938904335757337421463; // Gy

    constructor() public {
        // Variables are already initialized at declaration
    }

    modifier isHSet(){
        require(H == 0, "H has already been set");
        _;
    }

    function setH()
        internal
        isHSet
    {
        // H is already initialized, but you can set it here if needed
        // H = 12; // Not necessary if initialized at declaration
    }

    function addmodP(uint256 _v1, uint256 _v2)
        internal
        view
        returns (uint256 _v3)
    {
        uint256 _p = pp;
        assembly {
            _v3 := addmod(_v1, _v2, _p)
        }
    }

    function submodP(uint256 _v1, uint256 _v2)
        internal
        view
        returns (uint256 _v3)
    {
        uint256 _p = pp;
        assembly {
            if lt(_v1, _v2) {
                _v3 := sub(_p, sub(_v2, _v1))
            }
            if gt(_v1, _v2) {
                _v3 := mod(sub(_v1, _v2), _p)
            }
        }
    }

    function params()
        public
        view
        returns (
            uint256 _h,
            uint256 _pp,
            uint256 _nn,
            uint256 _gx,
            uint256 _gy
        )
    {
        (_h, _pp, _nn, _gx, _gy) = (H, pp, nn, gx, gy);
    }

    function commit(uint256 _r, uint256 _v)
        public
        view
        returns (uint256 _x3, uint256 _y3)
    {
        (uint256 _lx, uint256 _ly) = eMul(H, gx, gy);
        (uint256 _x1, uint256 _y1) = eMul(_r, gx, gy);
        (uint256 _x2, uint256 _y2) = eMul(_v, _lx, _ly);
        (_x3, _y3) = eAdd(_x1, _y1, _x2, _y2);
    }

    function verify(
        uint256 _r,
        uint256 _v,
        uint256 _x1,
        uint256 _y1
    ) public view returns (bool result) {
        (uint256 _x2, uint256 _y2) = commit(_r, _v);
        if ((_x1 == _x2) && (_y1 == _y2)) {
            result = true;
        }
    }

    function addCommitment(
        uint256 _r1,
        uint256 _x1,
        uint256 _y1,
        uint256 _r2,
        uint256 _x2,
        uint256 _y2
    )
        public
        view
        returns (
            uint256 _r3,
            uint256 _x3,
            uint256 _y3
        )
    {
        _r3 = addmodP(_r1, _r2);
        (_x3, _y3) = eAdd(_x1, _y1, _x2, _y2);
    }

    function subCommitment(
        uint256 _r1,
        uint256 _x1,
        uint256 _y1,
        uint256 _r2,
        uint256 _x2,
        uint256 _y2
    )
        public
        view
        returns (
            uint256 _r3,
            uint256 _x3,
            uint256 _y3
        )
    {
        _r3 = submodP(_r1, _r2);
        (_x3, _y3) = eSub(_x1, _y1, _x2, _y2);
    }
}
