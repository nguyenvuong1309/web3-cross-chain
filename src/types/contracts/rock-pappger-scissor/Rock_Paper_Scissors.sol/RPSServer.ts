/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface RPSServerInterface extends utils.Interface {
  functions: {
    "addInitiatorChoice(address,uint8,string)": FunctionFragment;
    "addResponderChoice(address,uint8,string)": FunctionFragment;
    "getInitiatorResult(address)": FunctionFragment;
    "getResponderResult(address)": FunctionFragment;
    "initiateGame(address,bytes32)": FunctionFragment;
    "respond(address,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addInitiatorChoice"
      | "addResponderChoice"
      | "getInitiatorResult"
      | "getResponderResult"
      | "initiateGame"
      | "respond"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addInitiatorChoice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addResponderChoice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getInitiatorResult",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getResponderResult",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateGame",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "respond",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addInitiatorChoice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addResponderChoice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitiatorResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResponderResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "respond", data: BytesLike): Result;

  events: {};
}

export interface RPSServer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RPSServerInterface;

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
    addInitiatorChoice(
      _responder: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addResponderChoice(
      _initiator: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getInitiatorResult(
      _responder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number, string]>;

    getResponderResult(
      _initiator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number, string]>;

    initiateGame(
      _responder: PromiseOrValue<string>,
      _initiator_hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    respond(
      _initiator: PromiseOrValue<string>,
      _responder_hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addInitiatorChoice(
    _responder: PromiseOrValue<string>,
    _choice: PromiseOrValue<BigNumberish>,
    _randomStr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addResponderChoice(
    _initiator: PromiseOrValue<string>,
    _choice: PromiseOrValue<BigNumberish>,
    _randomStr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getInitiatorResult(
    _responder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, number, string]>;

  getResponderResult(
    _initiator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, number, string]>;

  initiateGame(
    _responder: PromiseOrValue<string>,
    _initiator_hash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  respond(
    _initiator: PromiseOrValue<string>,
    _responder_hash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addInitiatorChoice(
      _responder: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addResponderChoice(
      _initiator: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getInitiatorResult(
      _responder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number, string]>;

    getResponderResult(
      _initiator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number, string]>;

    initiateGame(
      _responder: PromiseOrValue<string>,
      _initiator_hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    respond(
      _initiator: PromiseOrValue<string>,
      _responder_hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addInitiatorChoice(
      _responder: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addResponderChoice(
      _initiator: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getInitiatorResult(
      _responder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getResponderResult(
      _initiator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initiateGame(
      _responder: PromiseOrValue<string>,
      _initiator_hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    respond(
      _initiator: PromiseOrValue<string>,
      _responder_hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addInitiatorChoice(
      _responder: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addResponderChoice(
      _initiator: PromiseOrValue<string>,
      _choice: PromiseOrValue<BigNumberish>,
      _randomStr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getInitiatorResult(
      _responder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getResponderResult(
      _initiator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initiateGame(
      _responder: PromiseOrValue<string>,
      _initiator_hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    respond(
      _initiator: PromiseOrValue<string>,
      _responder_hash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
