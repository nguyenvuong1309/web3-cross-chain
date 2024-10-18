/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenA,
  TokenAInterface,
} from "../../../contracts/cross-chain-zkp/TokenA";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600681526020017f546f6b656e4100000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f544b41000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000412565b508060049081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b611b3280620005096000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d71461029d578063a9059cbb146102cd578063dd62ed3e146102fd578063f2fde38b1461032d57610100565b806370a0823114610227578063715018a6146102575780638da5cb5b1461026157806395d89b411461027f57610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef57806342966c681461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610349565b60405161011a919061112a565b60405180910390f35b61013d600480360381019061013891906111e5565b6103db565b60405161014a9190611240565b60405180910390f35b61015b6103fe565b604051610168919061126a565b60405180910390f35b61018b60048036038101906101869190611285565b610408565b6040516101989190611240565b60405180910390f35b6101a9610437565b6040516101b691906112f4565b60405180910390f35b6101d960048036038101906101d491906111e5565b610440565b6040516101e69190611240565b60405180910390f35b610209600480360381019061020491906111e5565b610477565b005b6102256004803603810190610220919061130f565b61048d565b005b610241600480360381019061023c919061133c565b61049a565b60405161024e919061126a565b60405180910390f35b61025f6104e2565b005b6102696104f6565b6040516102769190611378565b60405180910390f35b610287610520565b604051610294919061112a565b60405180910390f35b6102b760048036038101906102b291906111e5565b6105b2565b6040516102c49190611240565b60405180910390f35b6102e760048036038101906102e291906111e5565b610629565b6040516102f49190611240565b60405180910390f35b61031760048036038101906103129190611393565b61064c565b604051610324919061126a565b60405180910390f35b6103476004803603810190610342919061133c565b6106d3565b005b60606003805461035890611402565b80601f016020809104026020016040519081016040528092919081815260200182805461038490611402565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b6000806103e6610756565b90506103f381858561075e565b600191505092915050565b6000600254905090565b600080610413610756565b9050610420858285610927565b61042b8585856109b3565b60019150509392505050565b60006012905090565b60008061044b610756565b905061046c81858561045d858961064c565b6104679190611462565b61075e565b600191505092915050565b61047f610c29565b6104898282610ca7565b5050565b6104973382610dfd565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104ea610c29565b6104f46000610fca565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461052f90611402565b80601f016020809104026020016040519081016040528092919081815260200182805461055b90611402565b80156105a85780601f1061057d576101008083540402835291602001916105a8565b820191906000526020600020905b81548152906001019060200180831161058b57829003601f168201915b5050505050905090565b6000806105bd610756565b905060006105cb828661064c565b905083811015610610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060790611508565b60405180910390fd5b61061d828686840361075e565b60019250505092915050565b600080610634610756565b90506106418185856109b3565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106db610c29565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361074a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107419061159a565b60405180910390fd5b61075381610fca565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c49061162c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361083c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610833906116be565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161091a919061126a565b60405180910390a3505050565b6000610933848461064c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109ad578181101561099f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109969061172a565b60405180910390fd5b6109ac848484840361075e565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a19906117bc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a889061184e565b60405180910390fd5b610a9c838383611090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b19906118e0565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c10919061126a565b60405180910390a3610c23848484611095565b50505050565b610c31610756565b73ffffffffffffffffffffffffffffffffffffffff16610c4f6104f6565b73ffffffffffffffffffffffffffffffffffffffff1614610ca5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9c9061194c565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0d906119b8565b60405180910390fd5b610d2260008383611090565b8060026000828254610d349190611462565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610de5919061126a565b60405180910390a3610df960008383611095565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6390611a4a565b60405180910390fd5b610e7882600083611090565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610efe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef590611adc565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282540392505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610fb1919061126a565b60405180910390a3610fc583600084611095565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110d45780820151818401526020810190506110b9565b60008484015250505050565b6000601f19601f8301169050919050565b60006110fc8261109a565b61110681856110a5565b93506111168185602086016110b6565b61111f816110e0565b840191505092915050565b6000602082019050818103600083015261114481846110f1565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061117c82611151565b9050919050565b61118c81611171565b811461119757600080fd5b50565b6000813590506111a981611183565b92915050565b6000819050919050565b6111c2816111af565b81146111cd57600080fd5b50565b6000813590506111df816111b9565b92915050565b600080604083850312156111fc576111fb61114c565b5b600061120a8582860161119a565b925050602061121b858286016111d0565b9150509250929050565b60008115159050919050565b61123a81611225565b82525050565b60006020820190506112556000830184611231565b92915050565b611264816111af565b82525050565b600060208201905061127f600083018461125b565b92915050565b60008060006060848603121561129e5761129d61114c565b5b60006112ac8682870161119a565b93505060206112bd8682870161119a565b92505060406112ce868287016111d0565b9150509250925092565b600060ff82169050919050565b6112ee816112d8565b82525050565b600060208201905061130960008301846112e5565b92915050565b6000602082840312156113255761132461114c565b5b6000611333848285016111d0565b91505092915050565b6000602082840312156113525761135161114c565b5b60006113608482850161119a565b91505092915050565b61137281611171565b82525050565b600060208201905061138d6000830184611369565b92915050565b600080604083850312156113aa576113a961114c565b5b60006113b88582860161119a565b92505060206113c98582860161119a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061141a57607f821691505b60208210810361142d5761142c6113d3565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061146d826111af565b9150611478836111af565b92508282019050808211156114905761148f611433565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006114f26025836110a5565b91506114fd82611496565b604082019050919050565b60006020820190508181036000830152611521816114e5565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006115846026836110a5565b915061158f82611528565b604082019050919050565b600060208201905081810360008301526115b381611577565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006116166024836110a5565b9150611621826115ba565b604082019050919050565b6000602082019050818103600083015261164581611609565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006116a86022836110a5565b91506116b38261164c565b604082019050919050565b600060208201905081810360008301526116d78161169b565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611714601d836110a5565b915061171f826116de565b602082019050919050565b6000602082019050818103600083015261174381611707565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006117a66025836110a5565b91506117b18261174a565b604082019050919050565b600060208201905081810360008301526117d581611799565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006118386023836110a5565b9150611843826117dc565b604082019050919050565b600060208201905081810360008301526118678161182b565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006118ca6026836110a5565b91506118d58261186e565b604082019050919050565b600060208201905081810360008301526118f9816118bd565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119366020836110a5565b915061194182611900565b602082019050919050565b6000602082019050818103600083015261196581611929565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006119a2601f836110a5565b91506119ad8261196c565b602082019050919050565b600060208201905081810360008301526119d181611995565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a346021836110a5565b9150611a3f826119d8565b604082019050919050565b60006020820190508181036000830152611a6381611a27565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ac66022836110a5565b9150611ad182611a6a565b604082019050919050565b60006020820190508181036000830152611af581611ab9565b905091905056fea2646970667358221220d80d363fc701a98eb6e438ca622338d92daa6717e1b7f8be9db072a367d3a75564736f6c63430008140033";

type TokenAConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenAConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenA__factory extends ContractFactory {
  constructor(...args: TokenAConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenA> {
    return super.deploy(overrides || {}) as Promise<TokenA>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenA {
    return super.attach(address) as TokenA;
  }
  override connect(signer: Signer): TokenA__factory {
    return super.connect(signer) as TokenA__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenAInterface {
    return new utils.Interface(_abi) as TokenAInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TokenA {
    return new Contract(address, _abi, signerOrProvider) as TokenA;
  }
}
