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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface EllipticCurveInterfaceInterface extends utils.Interface {
  functions: {
    "gx()": FunctionFragment;
    "invMod(uint256,uint256)": FunctionFragment;
    "gy()": FunctionFragment;
    "eSub(uint256,uint256,uint256,uint256)": FunctionFragment;
    "eMul(uint256,uint256,uint256)": FunctionFragment;
    "nn()": FunctionFragment;
    "eAdd(uint256,uint256,uint256,uint256)": FunctionFragment;
    "pp()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "gx"
      | "invMod"
      | "gy"
      | "eSub"
      | "eMul"
      | "nn"
      | "eAdd"
      | "pp"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "gx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "invMod",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "gy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eSub",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "eMul",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "nn", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eAdd",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "pp", values?: undefined): string;

  decodeFunctionResult(functionFragment: "gx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "invMod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eSub", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eMul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pp", data: BytesLike): Result;

  events: {};
}

export interface EllipticCurveInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EllipticCurveInterfaceInterface;

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
    gx(overrides?: CallOverrides): Promise<[BigNumber]>;

    invMod(
      x: PromiseOrValue<BigNumberish>,
      pp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { q: BigNumber }>;

    gy(overrides?: CallOverrides): Promise<[BigNumber]>;

    eSub(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _x3: BigNumber; _y3: BigNumber }>;

    eMul(
      _z: PromiseOrValue<BigNumberish>,
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _x2: BigNumber; _y2: BigNumber }>;

    nn(overrides?: CallOverrides): Promise<[BigNumber]>;

    eAdd(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _x3: BigNumber; _y3: BigNumber }>;

    pp(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  gx(overrides?: CallOverrides): Promise<BigNumber>;

  invMod(
    x: PromiseOrValue<BigNumberish>,
    pp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gy(overrides?: CallOverrides): Promise<BigNumber>;

  eSub(
    _x1: PromiseOrValue<BigNumberish>,
    _y1: PromiseOrValue<BigNumberish>,
    _x2: PromiseOrValue<BigNumberish>,
    _y2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { _x3: BigNumber; _y3: BigNumber }>;

  eMul(
    _z: PromiseOrValue<BigNumberish>,
    _x1: PromiseOrValue<BigNumberish>,
    _y1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { _x2: BigNumber; _y2: BigNumber }>;

  nn(overrides?: CallOverrides): Promise<BigNumber>;

  eAdd(
    _x1: PromiseOrValue<BigNumberish>,
    _y1: PromiseOrValue<BigNumberish>,
    _x2: PromiseOrValue<BigNumberish>,
    _y2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { _x3: BigNumber; _y3: BigNumber }>;

  pp(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    gx(overrides?: CallOverrides): Promise<BigNumber>;

    invMod(
      x: PromiseOrValue<BigNumberish>,
      pp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gy(overrides?: CallOverrides): Promise<BigNumber>;

    eSub(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _x3: BigNumber; _y3: BigNumber }>;

    eMul(
      _z: PromiseOrValue<BigNumberish>,
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _x2: BigNumber; _y2: BigNumber }>;

    nn(overrides?: CallOverrides): Promise<BigNumber>;

    eAdd(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { _x3: BigNumber; _y3: BigNumber }>;

    pp(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    gx(overrides?: CallOverrides): Promise<BigNumber>;

    invMod(
      x: PromiseOrValue<BigNumberish>,
      pp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gy(overrides?: CallOverrides): Promise<BigNumber>;

    eSub(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    eMul(
      _z: PromiseOrValue<BigNumberish>,
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nn(overrides?: CallOverrides): Promise<BigNumber>;

    eAdd(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pp(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    gx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    invMod(
      x: PromiseOrValue<BigNumberish>,
      pp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eSub(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eMul(
      _z: PromiseOrValue<BigNumberish>,
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eAdd(
      _x1: PromiseOrValue<BigNumberish>,
      _y1: PromiseOrValue<BigNumberish>,
      _x2: PromiseOrValue<BigNumberish>,
      _y2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
