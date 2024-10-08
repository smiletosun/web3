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
} from "../../common";

export declare namespace Ballout {
  export type ProposalStruct = {
    name: PromiseOrValue<string>;
    voteCount: PromiseOrValue<BigNumberish>;
  };

  export type ProposalStructOutput = [string, BigNumber] & {
    name: string;
    voteCount: BigNumber;
  };

  export type VoterStruct = {
    weight: PromiseOrValue<BigNumberish>;
    voted: PromiseOrValue<boolean>;
    vote: PromiseOrValue<BigNumberish>;
  };

  export type VoterStructOutput = [BigNumber, boolean, BigNumber] & {
    weight: BigNumber;
    voted: boolean;
    vote: BigNumber;
  };
}

export interface BalloutInterface extends utils.Interface {
  functions: {
    "getAllProposals()": FunctionFragment;
    "getUser(address)": FunctionFragment;
    "giveRightToVote(address)": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "vote(uint256)": FunctionFragment;
    "winnerName()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAllProposals"
      | "getUser"
      | "giveRightToVote"
      | "proposals"
      | "vote"
      | "winnerName"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllProposals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "giveRightToVote",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "winnerName",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "giveRightToVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "winnerName", data: BytesLike): Result;

  events: {};
}

export interface Ballout extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BalloutInterface;

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
    getAllProposals(
      overrides?: CallOverrides
    ): Promise<[Ballout.ProposalStructOutput[]]>;

    getUser(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[Ballout.VoterStructOutput]>;

    giveRightToVote(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    winnerName(overrides?: CallOverrides): Promise<[string]>;
  };

  getAllProposals(
    overrides?: CallOverrides
  ): Promise<Ballout.ProposalStructOutput[]>;

  getUser(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Ballout.VoterStructOutput>;

  giveRightToVote(
    _voter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposals(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

  vote(
    proposal: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  winnerName(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAllProposals(
      overrides?: CallOverrides
    ): Promise<Ballout.ProposalStructOutput[]>;

    getUser(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Ballout.VoterStructOutput>;

    giveRightToVote(
      _voter: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { name: string; voteCount: BigNumber }>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    winnerName(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAllProposals(overrides?: CallOverrides): Promise<BigNumber>;

    getUser(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    giveRightToVote(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    winnerName(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllProposals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUser(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    giveRightToVote(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      proposal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    winnerName(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
