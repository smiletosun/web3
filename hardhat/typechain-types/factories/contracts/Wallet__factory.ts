/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Wallet, WalletInterface } from "../../contracts/Wallet";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getBalance",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102b2806100606000396000f3fe60806040526004361061002d5760003560e01c806312065fe0146100395780632e1a7d4d1461006457610034565b3661003457005b600080fd5b34801561004557600080fd5b5061004e61008d565b60405161005b9190610186565b60405180910390f35b34801561007057600080fd5b5061008b600480360381019061008691906101d2565b610095565b005b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610123576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011a9061025c565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610169573d6000803e3d6000fd5b5050565b6000819050919050565b6101808161016d565b82525050565b600060208201905061019b6000830184610177565b92915050565b600080fd5b6101af8161016d565b81146101ba57600080fd5b50565b6000813590506101cc816101a6565b92915050565b6000602082840312156101e8576101e76101a1565b5b60006101f6848285016101bd565b91505092915050565b600082825260208201905092915050565b7f6f6e6c79206f776e65722063616e207769746864726177000000000000000000600082015250565b60006102466017836101ff565b915061025182610210565b602082019050919050565b6000602082019050818103600083015261027581610239565b905091905056fea264697066735822122075ec346759ad71ab6ddd68744db1442ddf0519393fbe976a8a5ea143e6289ee164736f6c63430008180033";

type WalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Wallet__factory extends ContractFactory {
  constructor(...args: WalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Wallet> {
    return super.deploy(overrides || {}) as Promise<Wallet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Wallet {
    return super.attach(address) as Wallet;
  }
  override connect(signer: Signer): Wallet__factory {
    return super.connect(signer) as Wallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletInterface {
    return new utils.Interface(_abi) as WalletInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Wallet {
    return new Contract(address, _abi, signerOrProvider) as Wallet;
  }
}
