/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
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
} from "../../../common";

export interface VickreyAuctionTesterInterface extends utils.Interface {
  functions: {
    "test()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "test"): FunctionFragment;

  encodeFunctionData(functionFragment: "test", values?: undefined): string;

  decodeFunctionResult(functionFragment: "test", data: BytesLike): Result;

  events: {
    "LogTestFailed(string)": EventFragment;
    "LogNumFailures(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogTestFailed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogNumFailures"): EventFragment;
}

export interface LogTestFailedEventObject {
  test: string;
}
export type LogTestFailedEvent = TypedEvent<[string], LogTestFailedEventObject>;

export type LogTestFailedEventFilter = TypedEventFilter<LogTestFailedEvent>;

export interface LogNumFailuresEventObject {
  msg: string;
  arg1: BigNumber;
}
export type LogNumFailuresEvent = TypedEvent<
  [string, BigNumber],
  LogNumFailuresEventObject
>;

export type LogNumFailuresEventFilter = TypedEventFilter<LogNumFailuresEvent>;

export interface VickreyAuctionTester extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VickreyAuctionTesterInterface;

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
    test(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  test(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    test(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "LogTestFailed(string)"(test?: null): LogTestFailedEventFilter;
    LogTestFailed(test?: null): LogTestFailedEventFilter;

    "LogNumFailures(string,uint256)"(
      msg?: null,
      arg1?: null
    ): LogNumFailuresEventFilter;
    LogNumFailures(msg?: null, arg1?: null): LogNumFailuresEventFilter;
  };

  estimateGas: {
    test(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    test(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
