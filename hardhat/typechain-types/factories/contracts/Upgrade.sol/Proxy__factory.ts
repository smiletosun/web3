/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Proxy,
  ProxyInterface,
} from "../../../contracts/Upgrade.sol/Proxy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
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
  "0x608060405234801561001057600080fd5b506100203361002560201b60201c565b61020e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610094576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161008b90610181565b60405180910390fd5b806100d660017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610460001c6100c891906101da565b60001b61011a60201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000819050919050565b600082825260208201905092915050565b7f61646d696e203d207a65726f2061646472657373000000000000000000000000600082015250565b600061016b601483610124565b915061017682610135565b602082019050919050565b6000602082019050818103600083015261019a8161015e565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101e5826101a1565b91506101f0836101a1565b9250828203905081811115610208576102076101ab565b5b92915050565b6107778061021d6000396000f3fe6080604052600436106100435760003560e01c80633659cfe61461005c5780635c60da1b146100855780638f283970146100b0578063f851a440146100d957610052565b3661005257610050610104565b005b61005a610104565b005b34801561006857600080fd5b50610083600480360381019061007e9190610594565b610116565b005b34801561009157600080fd5b5061009a61016a565b6040516100a791906105d0565b60405180910390f35b3480156100bc57600080fd5b506100d760048036038101906100d29190610594565b6101c1565b005b3480156100e557600080fd5b506100ee610215565b6040516100fb91906105d0565b60405180910390f35b61011461010f61026c565b6102d2565b565b61011e6102f8565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff160361015e576101598161035e565b610167565b610166610104565b5b50565b60006101746102f8565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036101b5576101ae61026c565b90506101be565b6101bd610104565b5b90565b6101c96102f8565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036102095761020481610438565b610212565b610211610104565b5b50565b600061021f6102f8565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610260576102596102f8565b9050610269565b610268610104565b5b90565b60006102a960017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6102a19190610624565b60001b610527565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3660008037600080366000845af43d6000803e80600081146102f3573d6000f35b3d6000fd5b600061033560017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610460001c61032d9190610624565b60001b610527565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008173ffffffffffffffffffffffffffffffffffffffff163b116103b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103af906106b5565b60405180910390fd5b806103f460017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6103ec9190610624565b60001b610527565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036104a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049e90610721565b60405180910390fd5b806104e360017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610460001c6104db9190610624565b60001b610527565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000819050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061056182610536565b9050919050565b61057181610556565b811461057c57600080fd5b50565b60008135905061058e81610568565b92915050565b6000602082840312156105aa576105a9610531565b5b60006105b88482850161057f565b91505092915050565b6105ca81610556565b82525050565b60006020820190506105e560008301846105c1565b92915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061062f826105eb565b915061063a836105eb565b9250828203905081811115610652576106516105f5565b5b92915050565b600082825260208201905092915050565b7f696d706c656d656e746174696f6e206973206e6f7420636f6e74726163740000600082015250565b600061069f601e83610658565b91506106aa82610669565b602082019050919050565b600060208201905081810360008301526106ce81610692565b9050919050565b7f61646d696e203d207a65726f2061646472657373000000000000000000000000600082015250565b600061070b601483610658565b9150610716826106d5565b602082019050919050565b6000602082019050818103600083015261073a816106fe565b905091905056fea2646970667358221220027f766c4e6a414757f5f17b240abbe58101fac13bc21d0dd563d1a259fd7f8164736f6c63430008180033";

type ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Proxy__factory extends ContractFactory {
  constructor(...args: ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Proxy> {
    return super.deploy(overrides || {}) as Promise<Proxy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Proxy {
    return super.attach(address) as Proxy;
  }
  override connect(signer: Signer): Proxy__factory {
    return super.connect(signer) as Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyInterface {
    return new utils.Interface(_abi) as ProxyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Proxy {
    return new Contract(address, _abi, signerOrProvider) as Proxy;
  }
}
