/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Dev, DevInterface } from "../../../contracts/Upgrade.sol/Dev";

const _abi = [
  {
    inputs: [],
    name: "selectors",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610111806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636e25b97814602d575b600080fd5b60336049565b60405160409392919060aa565b60405180910390f35b600080600063f851a44060e01b635c60da1b60e01b633659cfe660e01b925092509250909192565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60a4816071565b82525050565b600060608201905060bd6000830186609d565b60c86020830185609d565b60d36040830184609d565b94935050505056fea2646970667358221220f1b670b66eecbda906bacbb1b19cce707205672c66e644038faa654cc870b12f64736f6c63430008180033";

type DevConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DevConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Dev__factory extends ContractFactory {
  constructor(...args: DevConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Dev> {
    return super.deploy(overrides || {}) as Promise<Dev>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Dev {
    return super.attach(address) as Dev;
  }
  override connect(signer: Signer): Dev__factory {
    return super.connect(signer) as Dev__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DevInterface {
    return new utils.Interface(_abi) as DevInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Dev {
    return new Contract(address, _abi, signerOrProvider) as Dev;
  }
}
