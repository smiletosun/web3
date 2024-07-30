/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Subscribe,
  SubscribeInterface,
} from "../../../contracts/Event.sol/Subscribe";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "OtherLog",
    type: "event",
  },
  {
    inputs: [],
    name: "num",
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
    inputs: [],
    name: "subscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "subscriberList",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unsubscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600160005534801561001557600080fd5b5061095c806100256000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634e70b1dc1461005c57806383c2eaba1461007a5780638f449a05146100aa578063a9059cbb146100b4578063fcae4484146100d0575b600080fd5b6100646100da565b6040516100719190610604565b60405180910390f35b610094600480360381019061008f9190610650565b6100e0565b6040516100a191906106be565b60405180910390f35b6100b261011f565b005b6100ce60048036038101906100c99190610705565b61026f565b005b6100d8610379565b005b60005481565b600181815481106100f057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60001515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146101b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a9906107a2565b60405180910390fd5b6001600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b7f4fed921c0dd94ef52307d954f2459b84c049f5c348455dcdd9d1b5d653f9c94c3383836040516102a2939291906107c2565b60405180910390a160005b60018054905081101561037457600181815481106102ce576102cd6107f9565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166376637cfe3385856040518463ffffffff1660e01b8152600401610335939291906107c2565b600060405180830381600087803b15801561034f57600080fd5b505af1158015610363573d6000803e3d6000fd5b5050505080806001019150506102ad565b505050565b60011515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461040c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040390610874565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b6001805490508110156105e8573373ffffffffffffffffffffffffffffffffffffffff166001828154811061049f5761049e6107f9565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036105db5760018080805490506104f791906108c3565b81548110610508576105076107f9565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660018281548110610547576105466107f9565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018054806105a1576105a06108f7565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590556105e8565b8080600101915050610467565b50565b6000819050919050565b6105fe816105eb565b82525050565b600060208201905061061960008301846105f5565b92915050565b600080fd5b61062d816105eb565b811461063857600080fd5b50565b60008135905061064a81610624565b92915050565b6000602082840312156106665761066561061f565b5b60006106748482850161063b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106a88261067d565b9050919050565b6106b88161069d565b82525050565b60006020820190506106d360008301846106af565b92915050565b6106e28161069d565b81146106ed57600080fd5b50565b6000813590506106ff816106d9565b92915050565b6000806040838503121561071c5761071b61061f565b5b600061072a858286016106f0565b925050602061073b8582860161063b565b9150509250929050565b600082825260208201905092915050565b7f416c726561647920737562736372696265640000000000000000000000000000600082015250565b600061078c601283610745565b915061079782610756565b602082019050919050565b600060208201905081810360008301526107bb8161077f565b9050919050565b60006060820190506107d760008301866106af565b6107e460208301856106af565b6107f160408301846105f5565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e6f742073756273637269626564000000000000000000000000000000000000600082015250565b600061085e600e83610745565b915061086982610828565b602082019050919050565b6000602082019050818103600083015261088d81610851565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108ce826105eb565b91506108d9836105eb565b92508282039050818111156108f1576108f0610894565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220a7ea826ff73600ef699dcb874e575589289a499dfbf907006e1b254a1a9be86664736f6c63430008180033";

type SubscribeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubscribeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Subscribe__factory extends ContractFactory {
  constructor(...args: SubscribeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Subscribe> {
    return super.deploy(overrides || {}) as Promise<Subscribe>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Subscribe {
    return super.attach(address) as Subscribe;
  }
  override connect(signer: Signer): Subscribe__factory {
    return super.connect(signer) as Subscribe__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubscribeInterface {
    return new utils.Interface(_abi) as SubscribeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Subscribe {
    return new Contract(address, _abi, signerOrProvider) as Subscribe;
  }
}
