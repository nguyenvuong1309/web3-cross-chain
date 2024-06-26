/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ExampleProxy,
  ExampleProxyInterface,
} from "../../../../contracts/nft-linker/Proxy.sol/ExampleProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "setupParams",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "SetupFailed",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161057a38038061057a83398101604081905261002f9161028e565b8282826001600160a01b038216610059576040516349e27cff60e01b815260040160405180910390fd5b7f6ec6af55bf1e5f27006bfa01248d73e8894ba06f23f8002b047607ff2b1944bb80846001600160a01b0316638291286c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100b457600080fd5b505afa1580156100c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ec919061035e565b1461010a5760405163340aafcd60e11b815260040160405180910390fd5b837f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55827f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0558151600014610220576000846001600160a01b0316639ded06df60e01b8460405160240161017e9190610377565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516101bc91906103aa565b600060405180830381855af49150503d80600081146101f7576040519150601f19603f3d011682016040523d82523d6000602084013e6101fc565b606091505b505090508061021e576040516397905dfb60e01b815260040160405180910390fd5b505b505050505050506103c6565b80516001600160a01b038116811461024357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610279578181015183820152602001610261565b83811115610288576000848401525b50505050565b6000806000606084860312156102a357600080fd5b6102ac8461022c565b92506102ba6020850161022c565b60408501519092506001600160401b03808211156102d757600080fd5b818601915086601f8301126102eb57600080fd5b8151818111156102fd576102fd610248565b604051601f8201601f19908116603f0116810190838211818310171561032557610325610248565b8160405282815289602084870101111561033e57600080fd5b61034f83602083016020880161025e565b80955050505050509250925092565b60006020828403121561037057600080fd5b5051919050565b602081526000825180602084015261039681604085016020870161025e565b601f01601f19169190910160400192915050565b600082516103bc81846020870161025e565b9190910192915050565b6101a5806103d56000396000f3fe60806040526004361061002d5760003560e01c80635c60da1b146100845780639ded06df146100dc57610034565b3661003457005b600061005e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b90503660008037600080366000845af43d6000803e80801561007f573d6000f35b3d6000fd5b34801561009057600080fd5b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5460405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100e857600080fd5b506100fb6100f73660046100fd565b5050565b005b6000806020838503121561011057600080fd5b823567ffffffffffffffff8082111561012857600080fd5b818501915085601f83011261013c57600080fd5b81358181111561014b57600080fd5b86602082850101111561015d57600080fd5b6020929092019691955090935050505056fea26469706673582212201edbe4a3431ab46e842abf9ad06cf992f2292bb540e592a7ba4d80e786c545f964736f6c63430008090033";

type ExampleProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleProxy__factory extends ContractFactory {
  constructor(...args: ExampleProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    implementationAddress: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    setupParams: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ExampleProxy> {
    return super.deploy(
      implementationAddress,
      owner,
      setupParams,
      overrides || {}
    ) as Promise<ExampleProxy>;
  }
  override getDeployTransaction(
    implementationAddress: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    setupParams: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      implementationAddress,
      owner,
      setupParams,
      overrides || {}
    );
  }
  override attach(address: string): ExampleProxy {
    return super.attach(address) as ExampleProxy;
  }
  override connect(signer: Signer): ExampleProxy__factory {
    return super.connect(signer) as ExampleProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleProxyInterface {
    return new utils.Interface(_abi) as ExampleProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleProxy {
    return new Contract(address, _abi, signerOrProvider) as ExampleProxy;
  }
}
