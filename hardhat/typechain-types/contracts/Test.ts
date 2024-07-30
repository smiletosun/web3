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
} from "../common";

export interface TestInterface extends utils.Interface {
  functions: {
    "num()": FunctionFragment;
    "owner()": FunctionFragment;
    "sendEnth(address)": FunctionFragment;
    "testAssert()": FunctionFragment;
    "testModifier(address)": FunctionFragment;
    "testRequire(uint256)": FunctionFragment;
    "testRevert(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "num"
      | "owner"
      | "sendEnth"
      | "testAssert"
      | "testModifier"
      | "testRequire"
      | "testRevert"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "num", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendEnth",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "testAssert",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testModifier",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "testRequire",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "testRevert",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "num", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendEnth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "testAssert", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testModifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testRequire",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testRevert", data: BytesLike): Result;

  events: {
    "Log(address,string)": EventFragment;
    "OtherLog()": EventFragment;
    "TLog(address,bool,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OtherLog"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TLog"): EventFragment;
}

export interface LogEventObject {
  sender: string;
  message: string;
}
export type LogEvent = TypedEvent<[string, string], LogEventObject>;

export type LogEventFilter = TypedEventFilter<LogEvent>;

export interface OtherLogEventObject {}
export type OtherLogEvent = TypedEvent<[], OtherLogEventObject>;

export type OtherLogEventFilter = TypedEventFilter<OtherLogEvent>;

export interface TLogEventObject {
  sender: string;
  sent: boolean;
  message: string;
}
export type TLogEvent = TypedEvent<[string, boolean, string], TLogEventObject>;

export type TLogEventFilter = TypedEventFilter<TLogEvent>;

export interface Test extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestInterface;

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
    num(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    sendEnth(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testAssert(overrides?: CallOverrides): Promise<[void]>;

    testModifier(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    testRequire(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    testRevert(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  num(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  sendEnth(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testAssert(overrides?: CallOverrides): Promise<void>;

  testModifier(
    _addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  testRequire(
    _i: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  testRevert(
    _i: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    num(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    sendEnth(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    testAssert(overrides?: CallOverrides): Promise<void>;

    testModifier(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    testRequire(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testRevert(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Log(address,string)"(sender?: null, message?: null): LogEventFilter;
    Log(sender?: null, message?: null): LogEventFilter;

    "OtherLog()"(): OtherLogEventFilter;
    OtherLog(): OtherLogEventFilter;

    "TLog(address,bool,bytes)"(
      sender?: null,
      sent?: null,
      message?: null
    ): TLogEventFilter;
    TLog(sender?: null, sent?: null, message?: null): TLogEventFilter;
  };

  estimateGas: {
    num(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    sendEnth(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testAssert(overrides?: CallOverrides): Promise<BigNumber>;

    testModifier(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    testRequire(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    testRevert(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    num(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendEnth(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testAssert(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testModifier(
      _addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    testRequire(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    testRevert(
      _i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
