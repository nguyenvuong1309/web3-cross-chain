/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export type GasInfoStruct = {
  gasEstimationType: PromiseOrValue<BigNumberish>;
  l1FeeScalar: PromiseOrValue<BigNumberish>;
  axelarBaseFee: PromiseOrValue<BigNumberish>;
  relativeGasPrice: PromiseOrValue<BigNumberish>;
  relativeBlobBaseFee: PromiseOrValue<BigNumberish>;
  expressFee: PromiseOrValue<BigNumberish>;
};

export type GasInfoStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  gasEstimationType: BigNumber;
  l1FeeScalar: BigNumber;
  axelarBaseFee: BigNumber;
  relativeGasPrice: BigNumber;
  relativeBlobBaseFee: BigNumber;
  expressFee: BigNumber;
};

export interface IInterchainGasEstimationInterface extends utils.Interface {
  functions: {
    "estimateGasFee(string,string,bytes,uint256,bytes)": FunctionFragment;
    "getGasInfo(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "estimateGasFee" | "getGasInfo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimateGasFee",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasInfo",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateGasFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGasInfo", data: BytesLike): Result;

  events: {
    "GasInfoUpdated(string,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GasInfoUpdated"): EventFragment;
}

export interface GasInfoUpdatedEventObject {
  chain: string;
  info: GasInfoStructOutput;
}
export type GasInfoUpdatedEvent = TypedEvent<
  [string, GasInfoStructOutput],
  GasInfoUpdatedEventObject
>;

export type GasInfoUpdatedEventFilter = TypedEventFilter<GasInfoUpdatedEvent>;

export interface IInterchainGasEstimation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInterchainGasEstimationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    estimateGasFee(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      executionGasLimit: PromiseOrValue<BigNumberish>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { gasEstimate: BigNumber }>;

    getGasInfo(
      chain: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[GasInfoStructOutput]>;
  };

  estimateGasFee(
    destinationChain: PromiseOrValue<string>,
    destinationAddress: PromiseOrValue<string>,
    payload: PromiseOrValue<BytesLike>,
    executionGasLimit: PromiseOrValue<BigNumberish>,
    params: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasInfo(
    chain: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<GasInfoStructOutput>;

  callStatic: {
    estimateGasFee(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      executionGasLimit: PromiseOrValue<BigNumberish>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasInfo(
      chain: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<GasInfoStructOutput>;
  };

  filters: {
    "GasInfoUpdated(string,tuple)"(
      chain?: null,
      info?: null
    ): GasInfoUpdatedEventFilter;
    GasInfoUpdated(chain?: null, info?: null): GasInfoUpdatedEventFilter;
  };

  estimateGas: {
    estimateGasFee(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      executionGasLimit: PromiseOrValue<BigNumberish>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasInfo(
      chain: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateGasFee(
      destinationChain: PromiseOrValue<string>,
      destinationAddress: PromiseOrValue<string>,
      payload: PromiseOrValue<BytesLike>,
      executionGasLimit: PromiseOrValue<BigNumberish>,
      params: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasInfo(
      chain: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
