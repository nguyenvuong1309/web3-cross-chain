/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CallContractWithToken,
  CallContractWithTokenInterface,
} from "../../../../contracts/call-contract-with-token/contracts/CallContractWithToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gateway",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gasReceiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NotApprovedByGateway",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Executed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commandId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "sourceChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "sourceAddress",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "executeWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gasService",
    outputs: [
      {
        internalType: "contract IAxelarGasService",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gateway",
    outputs: [
      {
        internalType: "contract IAxelarGateway",
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
        name: "destinationChain",
        type: "string",
      },
      {
        internalType: "string",
        name: "destinationAddress",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "destinationAddresses",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendToMany",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001a0738038062001a0783398181016040528101906200003791906200017b565b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000a0576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050620001c2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001438262000116565b9050919050565b620001558162000136565b81146200016157600080fd5b50565b60008151905062000175816200014a565b92915050565b6000806040838503121562000195576200019462000111565b5b6000620001a58582860162000164565b9250506020620001b88582860162000164565b9150509250929050565b60805160a0516117ee620002196000396000818161038301526105fb0152600081816101150152818161015501528181610280015281816103ec0152818161054301528181610693015261074501526117ee6000f3fe60806040526004361061004a5760003560e01c8063116191b61461004f5780631a98b2e01461007a57806349160658146100a35780636a22d8cc146100cc578063fbd9497b146100f7575b600080fd5b34801561005b57600080fd5b50610064610113565b604051610071919061098a565b60405180910390f35b34801561008657600080fd5b506100a1600480360381019061009c9190610ae0565b610137565b005b3480156100af57600080fd5b506100ca60048036038101906100c59190610bf0565b610262565b005b3480156100d857600080fd5b506100e1610381565b6040516100ee9190610cda565b60405180910390f35b610111600480360381019061010c9190610e8c565b6103a5565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b60008585604051610149929190610faa565b604051809103902090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631876eed98c8c8c8c8c878b8b8b6040518a63ffffffff1660e01b81526004016101bc9998979695949392919061101f565b602060405180830381600087803b1580156101d657600080fd5b505af11580156101ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020e91906110d3565b610244576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102558a8a8a8a8a8a8a8a8a61072e565b5050505050505050505050565b60008282604051610274929190610faa565b604051809103902090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635f6970c38989898989876040518763ffffffff1660e01b81526004016102e196959493929190611100565b602060405180830381600087803b1580156102fb57600080fd5b505af115801561030f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033391906110d3565b610369576040517f500c44b400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610377878787878787610903565b5050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600034116103e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103df906111a3565b60405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663935b13f6846040518263ffffffff1660e01b8152600401610443919061123a565b60206040518083038186803b15801561045b57600080fd5b505afa15801561046f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610493919061129a565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016104d2939291906112d6565b602060405180830381600087803b1580156104ec57600080fd5b505af1158015610500573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052491906110d3565b508073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000846040518363ffffffff1660e01b815260040161058092919061130d565b602060405180830381600087803b15801561059a57600080fd5b505af11580156105ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d291906110d3565b50600085856040516020016105e892919061140e565b60405160208183030381529060405290507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c62c200234308b8b868a8a336040518963ffffffff1660e01b815260040161065f9796959493929190611487565b6000604051808303818588803b15801561067857600080fd5b505af115801561068c573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b541708489898488886040518663ffffffff1660e01b81526004016106f2959493929190611512565b600060405180830381600087803b15801561070c57600080fd5b505af1158015610720573d6000803e3d6000fd5b505050505050505050505050565b6000858581019061073f9190611644565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663935b13f686866040518363ffffffff1660e01b815260040161079e92919061168d565b60206040518083038186803b1580156107b657600080fd5b505afa1580156107ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ee919061129a565b905060008251846107ff919061170f565b905060005b83518110156108c8578273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85838151811061083c5761083b611740565b5b6020026020010151846040518363ffffffff1660e01b815260040161086292919061130d565b602060405180830381600087803b15801561087c57600080fd5b505af1158015610890573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b491906110d3565b5080806108c09061176f565b915050610804565b507f68f46c45a243a0e9065a97649faf9a5afe1692f2679e650c2f853b9cd734cc0e60405160405180910390a1505050505050505050505050565b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061095061094b6109468461090b565b61092b565b61090b565b9050919050565b600061096282610935565b9050919050565b600061097482610957565b9050919050565b61098481610969565b82525050565b600060208201905061099f600083018461097b565b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6109cc816109b9565b81146109d757600080fd5b50565b6000813590506109e9816109c3565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610a1457610a136109ef565b5b8235905067ffffffffffffffff811115610a3157610a306109f4565b5b602083019150836001820283011115610a4d57610a4c6109f9565b5b9250929050565b60008083601f840112610a6a57610a696109ef565b5b8235905067ffffffffffffffff811115610a8757610a866109f4565b5b602083019150836001820283011115610aa357610aa26109f9565b5b9250929050565b6000819050919050565b610abd81610aaa565b8114610ac857600080fd5b50565b600081359050610ada81610ab4565b92915050565b60008060008060008060008060008060c08b8d031215610b0357610b026109af565b5b6000610b118d828e016109da565b9a505060208b013567ffffffffffffffff811115610b3257610b316109b4565b5b610b3e8d828e016109fe565b995099505060408b013567ffffffffffffffff811115610b6157610b606109b4565b5b610b6d8d828e016109fe565b975097505060608b013567ffffffffffffffff811115610b9057610b8f6109b4565b5b610b9c8d828e01610a54565b955095505060808b013567ffffffffffffffff811115610bbf57610bbe6109b4565b5b610bcb8d828e016109fe565b935093505060a0610bde8d828e01610acb565b9150509295989b9194979a5092959850565b60008060008060008060006080888a031215610c0f57610c0e6109af565b5b6000610c1d8a828b016109da565b975050602088013567ffffffffffffffff811115610c3e57610c3d6109b4565b5b610c4a8a828b016109fe565b9650965050604088013567ffffffffffffffff811115610c6d57610c6c6109b4565b5b610c798a828b016109fe565b9450945050606088013567ffffffffffffffff811115610c9c57610c9b6109b4565b5b610ca88a828b01610a54565b925092505092959891949750929550565b6000610cc482610957565b9050919050565b610cd481610cb9565b82525050565b6000602082019050610cef6000830184610ccb565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d4382610cfa565b810181811067ffffffffffffffff82111715610d6257610d61610d0b565b5b80604052505050565b6000610d756109a5565b9050610d818282610d3a565b919050565b600067ffffffffffffffff821115610da157610da0610d0b565b5b610daa82610cfa565b9050602081019050919050565b82818337600083830152505050565b6000610dd9610dd484610d86565b610d6b565b905082815260208101848484011115610df557610df4610cf5565b5b610e00848285610db7565b509392505050565b600082601f830112610e1d57610e1c6109ef565b5b8135610e2d848260208601610dc6565b91505092915050565b60008083601f840112610e4c57610e4b6109ef565b5b8235905067ffffffffffffffff811115610e6957610e686109f4565b5b602083019150836020820283011115610e8557610e846109f9565b5b9250929050565b60008060008060008060a08789031215610ea957610ea86109af565b5b600087013567ffffffffffffffff811115610ec757610ec66109b4565b5b610ed389828a01610e08565b965050602087013567ffffffffffffffff811115610ef457610ef36109b4565b5b610f0089828a01610e08565b955050604087013567ffffffffffffffff811115610f2157610f206109b4565b5b610f2d89828a01610e36565b9450945050606087013567ffffffffffffffff811115610f5057610f4f6109b4565b5b610f5c89828a01610e08565b9250506080610f6d89828a01610acb565b9150509295509295509295565b600081905092915050565b6000610f918385610f7a565b9350610f9e838584610db7565b82840190509392505050565b6000610fb7828486610f85565b91508190509392505050565b610fcc816109b9565b82525050565b600082825260208201905092915050565b6000610fef8385610fd2565b9350610ffc838584610db7565b61100583610cfa565b840190509392505050565b61101981610aaa565b82525050565b600060c082019050611034600083018c610fc3565b8181036020830152611047818a8c610fe3565b9050818103604083015261105c81888a610fe3565b905061106b6060830187610fc3565b818103608083015261107e818587610fe3565b905061108d60a0830184611010565b9a9950505050505050505050565b60008115159050919050565b6110b08161109b565b81146110bb57600080fd5b50565b6000815190506110cd816110a7565b92915050565b6000602082840312156110e9576110e86109af565b5b60006110f7848285016110be565b91505092915050565b60006080820190506111156000830189610fc3565b8181036020830152611128818789610fe3565b9050818103604083015261113d818587610fe3565b905061114c6060830184610fc3565b979650505050505050565b7f476173207061796d656e74206973207265717569726564000000000000000000600082015250565b600061118d601783610fd2565b915061119882611157565b602082019050919050565b600060208201905081810360008301526111bc81611180565b9050919050565b600081519050919050565b60005b838110156111ec5780820151818401526020810190506111d1565b838111156111fb576000848401525b50505050565b600061120c826111c3565b6112168185610fd2565b93506112268185602086016111ce565b61122f81610cfa565b840191505092915050565b600060208201905081810360008301526112548184611201565b905092915050565b60006112678261090b565b9050919050565b6112778161125c565b811461128257600080fd5b50565b6000815190506112948161126e565b92915050565b6000602082840312156112b0576112af6109af565b5b60006112be84828501611285565b91505092915050565b6112d08161125c565b82525050565b60006060820190506112eb60008301866112c7565b6112f860208301856112c7565b6113056040830184611010565b949350505050565b600060408201905061132260008301856112c7565b61132f6020830184611010565b9392505050565b600082825260208201905092915050565b6000819050919050565b61135a8161125c565b82525050565b600061136c8383611351565b60208301905092915050565b6000813590506113878161126e565b92915050565b600061139c6020840184611378565b905092915050565b6000602082019050919050565b60006113bd8385611336565b93506113c882611347565b8060005b85811015611401576113de828461138d565b6113e88882611360565b97506113f3836113a4565b9250506001810190506113cc565b5085925050509392505050565b600060208201905081810360008301526114298184866113b1565b90509392505050565b600081519050919050565b600082825260208201905092915050565b600061145982611432565b611463818561143d565b93506114738185602086016111ce565b61147c81610cfa565b840191505092915050565b600060e08201905061149c600083018a6112c7565b81810360208301526114ae8189611201565b905081810360408301526114c28188611201565b905081810360608301526114d6818761144e565b905081810360808301526114ea8186611201565b90506114f960a0830185611010565b61150660c08301846112c7565b98975050505050505050565b600060a082019050818103600083015261152c8188611201565b905081810360208301526115408187611201565b90508181036040830152611554818661144e565b905081810360608301526115688185611201565b90506115776080830184611010565b9695505050505050565b600067ffffffffffffffff82111561159c5761159b610d0b565b5b602082029050602081019050919050565b60006115c06115bb84611581565b610d6b565b905080838252602082019050602084028301858111156115e3576115e26109f9565b5b835b8181101561160c57806115f88882611378565b8452602084019350506020810190506115e5565b5050509392505050565b600082601f83011261162b5761162a6109ef565b5b813561163b8482602086016115ad565b91505092915050565b60006020828403121561165a576116596109af565b5b600082013567ffffffffffffffff811115611678576116776109b4565b5b61168484828501611616565b91505092915050565b600060208201905081810360008301526116a8818486610fe3565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061171a82610aaa565b915061172583610aaa565b925082611735576117346116b1565b5b828204905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061177a82610aaa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156117ad576117ac6116e0565b5b60018201905091905056fea26469706673582212201a65d6337b609b7295d5549103ca0af8c2b3aa01347d156841f2da46fc5d06ef64736f6c63430008090033";

type CallContractWithTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallContractWithTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallContractWithToken__factory extends ContractFactory {
  constructor(...args: CallContractWithTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gateway: PromiseOrValue<string>,
    _gasReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CallContractWithToken> {
    return super.deploy(
      _gateway,
      _gasReceiver,
      overrides || {}
    ) as Promise<CallContractWithToken>;
  }
  override getDeployTransaction(
    _gateway: PromiseOrValue<string>,
    _gasReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gateway, _gasReceiver, overrides || {});
  }
  override attach(address: string): CallContractWithToken {
    return super.attach(address) as CallContractWithToken;
  }
  override connect(signer: Signer): CallContractWithToken__factory {
    return super.connect(signer) as CallContractWithToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallContractWithTokenInterface {
    return new utils.Interface(_abi) as CallContractWithTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallContractWithToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CallContractWithToken;
  }
}
