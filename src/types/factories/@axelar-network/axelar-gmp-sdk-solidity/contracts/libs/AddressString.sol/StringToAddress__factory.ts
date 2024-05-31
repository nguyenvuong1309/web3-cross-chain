/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  StringToAddress,
  StringToAddressInterface,
} from "../../../../../../@axelar-network/axelar-gmp-sdk-solidity/contracts/libs/AddressString.sol/StringToAddress";

const _abi = [
  {
    inputs: [],
    name: "InvalidAddressString",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122091a3e1188c7ca5b5388388b3ecbd348be18e877d8991d1a09fb37feab5394cab64736f6c63430008090033";

type StringToAddressConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StringToAddressConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StringToAddress__factory extends ContractFactory {
  constructor(...args: StringToAddressConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StringToAddress> {
    return super.deploy(overrides || {}) as Promise<StringToAddress>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StringToAddress {
    return super.attach(address) as StringToAddress;
  }
  override connect(signer: Signer): StringToAddress__factory {
    return super.connect(signer) as StringToAddress__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StringToAddressInterface {
    return new utils.Interface(_abi) as StringToAddressInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StringToAddress {
    return new Contract(address, _abi, signerOrProvider) as StringToAddress;
  }
}