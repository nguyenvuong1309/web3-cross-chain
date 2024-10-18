/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  HTLC,
  HTLCInterface,
} from "../../../../contracts/cross-chain-zkp/atomic-swap/HTLC";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "amount",
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
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockTime",
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
    name: "recipient",
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
    name: "refund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "secret",
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
    name: "startTime",
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
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_secret",
        type: "string",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526127106001557f80a251a6ea594109ef28537c1c1e16c05aba0cd7643923acf1ec0389297c5bba60001b6003553480156200003e57600080fd5b5060405162001115380380620011158339818101604052810190620000649190620001dc565b82600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060068190555081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000238565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000169826200013c565b9050919050565b6200017b816200015c565b81146200018757600080fd5b50565b6000815190506200019b8162000170565b92915050565b6000819050919050565b620001b681620001a1565b8114620001c257600080fd5b50565b600081519050620001d681620001ab565b92915050565b600080600060608486031215620001f857620001f762000137565b5b600062000208868287016200018a565b93505060206200021b868287016200018a565b92505060406200022e86828701620001c5565b9150509250925092565b610ecd80620002486000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806378e979251161007157806378e979251461012e5780638da5cb5b1461014c578063aa8c217c1461016a578063b60d428814610188578063d1efd30d14610192578063fc0c546a146101b0576100a9565b806309bd5a60146100ae5780630d668087146100cc57806331fb67c2146100ea578063590e1ae31461010657806366d003ac14610110575b600080fd5b6100b66101ce565b6040516100c39190610607565b60405180910390f35b6100d46101d4565b6040516100e1919061063b565b60405180910390f35b61010460048036038101906100ff91906107b0565b6101da565b005b61010e61031c565b005b610118610434565b604051610125919061083a565b60405180910390f35b61013661045a565b604051610143919061063b565b60405180910390f35b610154610460565b604051610161919061083a565b60405180910390f35b610172610486565b60405161017f919061063b565b60405180910390f35b61019061048c565b005b61019a61053a565b6040516101a791906108d4565b60405180910390f35b6101b86105c8565b6040516101c59190610955565b60405180910390f35b60035481565b60015481565b600354816040516020016101ee91906109ac565b6040516020818303038152906040528051906020012014610244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023b90610a0f565b60405180910390fd5b80600290816102539190610c31565b50600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166006546040518363ffffffff1660e01b81526004016102d5929190610d03565b6020604051808303816000875af11580156102f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103189190610d64565b5050565b60015460005461032c9190610dc0565b421161036d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036490610e40565b60405180910390fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166006546040518363ffffffff1660e01b81526004016103ee929190610d03565b6020604051808303816000875af115801561040d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104319190610d64565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b42600081905550600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306006546040518463ffffffff1660e01b81526004016104f493929190610e60565b6020604051808303816000875af1158015610513573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105379190610d64565b50565b6002805461054790610a5e565b80601f016020809104026020016040519081016040528092919081815260200182805461057390610a5e565b80156105c05780601f10610595576101008083540402835291602001916105c0565b820191906000526020600020905b8154815290600101906020018083116105a357829003601f168201915b505050505081565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000819050919050565b610601816105ee565b82525050565b600060208201905061061c60008301846105f8565b92915050565b6000819050919050565b61063581610622565b82525050565b6000602082019050610650600083018461062c565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106bd82610674565b810181811067ffffffffffffffff821117156106dc576106db610685565b5b80604052505050565b60006106ef610656565b90506106fb82826106b4565b919050565b600067ffffffffffffffff82111561071b5761071a610685565b5b61072482610674565b9050602081019050919050565b82818337600083830152505050565b600061075361074e84610700565b6106e5565b90508281526020810184848401111561076f5761076e61066f565b5b61077a848285610731565b509392505050565b600082601f8301126107975761079661066a565b5b81356107a7848260208601610740565b91505092915050565b6000602082840312156107c6576107c5610660565b5b600082013567ffffffffffffffff8111156107e4576107e3610665565b5b6107f084828501610782565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610824826107f9565b9050919050565b61083481610819565b82525050565b600060208201905061084f600083018461082b565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561088f578082015181840152602081019050610874565b60008484015250505050565b60006108a682610855565b6108b08185610860565b93506108c0818560208601610871565b6108c981610674565b840191505092915050565b600060208201905081810360008301526108ee818461089b565b905092915050565b6000819050919050565b600061091b610916610911846107f9565b6108f6565b6107f9565b9050919050565b600061092d82610900565b9050919050565b600061093f82610922565b9050919050565b61094f81610934565b82525050565b600060208201905061096a6000830184610946565b92915050565b600081905092915050565b600061098682610855565b6109908185610970565b93506109a0818560208601610871565b80840191505092915050565b60006109b8828461097b565b915081905092915050565b7f57726f6e67207365637265742100000000000000000000000000000000000000600082015250565b60006109f9600d83610860565b9150610a04826109c3565b602082019050919050565b60006020820190508181036000830152610a28816109ec565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a7657607f821691505b602082108103610a8957610a88610a2f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610af17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ab4565b610afb8683610ab4565b95508019841693508086168417925050509392505050565b6000610b2e610b29610b2484610622565b6108f6565b610622565b9050919050565b6000819050919050565b610b4883610b13565b610b5c610b5482610b35565b848454610ac1565b825550505050565b600090565b610b71610b64565b610b7c818484610b3f565b505050565b5b81811015610ba057610b95600082610b69565b600181019050610b82565b5050565b601f821115610be557610bb681610a8f565b610bbf84610aa4565b81016020851015610bce578190505b610be2610bda85610aa4565b830182610b81565b50505b505050565b600082821c905092915050565b6000610c0860001984600802610bea565b1980831691505092915050565b6000610c218383610bf7565b9150826002028217905092915050565b610c3a82610855565b67ffffffffffffffff811115610c5357610c52610685565b5b610c5d8254610a5e565b610c68828285610ba4565b600060209050601f831160018114610c9b5760008415610c89578287015190505b610c938582610c15565b865550610cfb565b601f198416610ca986610a8f565b60005b82811015610cd157848901518255600182019150602085019450602081019050610cac565b86831015610cee5784890151610cea601f891682610bf7565b8355505b6001600288020188555050505b505050505050565b6000604082019050610d18600083018561082b565b610d25602083018461062c565b9392505050565b60008115159050919050565b610d4181610d2c565b8114610d4c57600080fd5b50565b600081519050610d5e81610d38565b92915050565b600060208284031215610d7a57610d79610660565b5b6000610d8884828501610d4f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610dcb82610622565b9150610dd683610622565b9250828201905080821115610dee57610ded610d91565b5b92915050565b7f546f6f206561726c792100000000000000000000000000000000000000000000600082015250565b6000610e2a600a83610860565b9150610e3582610df4565b602082019050919050565b60006020820190508181036000830152610e5981610e1d565b9050919050565b6000606082019050610e75600083018661082b565b610e82602083018561082b565b610e8f604083018461062c565b94935050505056fea2646970667358221220f6a2f397352a1d6380d222af39ce2f7aad43417abba790daee915fc9a116e47764736f6c63430008140033";

type HTLCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HTLCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HTLC__factory extends ContractFactory {
  constructor(...args: HTLCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _recipient: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HTLC> {
    return super.deploy(
      _recipient,
      _token,
      _amount,
      overrides || {}
    ) as Promise<HTLC>;
  }
  override getDeployTransaction(
    _recipient: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _recipient,
      _token,
      _amount,
      overrides || {}
    );
  }
  override attach(address: string): HTLC {
    return super.attach(address) as HTLC;
  }
  override connect(signer: Signer): HTLC__factory {
    return super.connect(signer) as HTLC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HTLCInterface {
    return new utils.Interface(_abi) as HTLCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): HTLC {
    return new Contract(address, _abi, signerOrProvider) as HTLC;
  }
}
