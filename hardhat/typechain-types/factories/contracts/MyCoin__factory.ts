/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MyCoin, MyCoinInterface } from "../../contracts/MyCoin";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600681526020017f4d79436f696e00000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d5943000000000000000000000000000000000000000000000000000000000081525081600090816200008f91906200033e565b508060019081620000a191906200033e565b50505060066000815480929190620000b99062000454565b9190505550620004a1565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200014657607f821691505b6020821081036200015c576200015b620000fe565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001c67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000187565b620001d2868362000187565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200021f620002196200021384620001ea565b620001f4565b620001ea565b9050919050565b6000819050919050565b6200023b83620001fe565b620002536200024a8262000226565b84845462000194565b825550505050565b600090565b6200026a6200025b565b6200027781848462000230565b505050565b5b818110156200029f576200029360008262000260565b6001810190506200027d565b5050565b601f821115620002ee57620002b88162000162565b620002c38462000177565b81016020851015620002d3578190505b620002eb620002e28562000177565b8301826200027c565b50505b505050565b600082821c905092915050565b60006200031360001984600802620002f3565b1980831691505092915050565b60006200032e838362000300565b9150826002028217905092915050565b6200034982620000c4565b67ffffffffffffffff811115620003655762000364620000cf565b5b6200037182546200012d565b6200037e828285620002a3565b600060209050601f831160018114620003b65760008415620003a1578287015190505b620003ad858262000320565b8655506200041d565b601f198416620003c68662000162565b60005b82811015620003f057848901518255600182019150602085019450602081019050620003c9565b868310156200041057848901516200040c601f89168262000300565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200046182620001ea565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000496576200049562000425565b5b600182019050919050565b611e8d80620004b16000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb4651461025d578063b88d4fde14610279578063c87b56dd14610295578063e985e9c5146102c5576100ea565b80636352211e146101df57806370a082311461020f57806395d89b411461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d5780631249c58b1461018957806323b872dd146101a757806342842e0e146101c3576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b61010960048036038101906101049190611660565b6102f5565b60405161011691906116a8565b60405180910390f35b6101276103d7565b6040516101349190611753565b60405180910390f35b610157600480360381019061015291906117ab565b610469565b6040516101649190611819565b60405180910390f35b61018760048036038101906101829190611860565b610485565b005b61019161049b565b60405161019e91906118af565b60405180910390f35b6101c160048036038101906101bc91906118ca565b6104c9565b005b6101dd60048036038101906101d891906118ca565b6105cb565b005b6101f960048036038101906101f491906117ab565b6105eb565b6040516102069190611819565b60405180910390f35b6102296004803603810190610224919061191d565b6105fd565b60405161023691906118af565b60405180910390f35b6102476106b7565b6040516102549190611753565b60405180910390f35b61027760048036038101906102729190611976565b610749565b005b610293600480360381019061028e9190611aeb565b61075f565b005b6102af60048036038101906102aa91906117ab565b61077c565b6040516102bc9190611753565b60405180910390f35b6102df60048036038101906102da9190611b6e565b6107e5565b6040516102ec91906116a8565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103c057507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103d057506103cf82610879565b5b9050919050565b6060600080546103e690611bdd565b80601f016020809104026020016040519081016040528092919081815260200182805461041290611bdd565b801561045f5780601f106104345761010080835404028352916020019161045f565b820191906000526020600020905b81548152906001019060200180831161044257829003601f168201915b5050505050905090565b6000610474826108e3565b5061047e8261096b565b9050919050565b61049782826104926109a8565b6109b0565b5050565b6000600660008154809291906104b090611c3d565b91905055506104c1336006546109c2565b600654905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361053b5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016105329190611819565b60405180910390fd5b600061054f838361054a6109a8565b6109e0565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105c5578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105bc93929190611c85565b60405180910390fd5b50505050565b6105e68383836040518060200160405280600081525061075f565b505050565b60006105f6826108e3565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106705760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106679190611819565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546106c690611bdd565b80601f01602080910402602001604051908101604052809291908181526020018280546106f290611bdd565b801561073f5780601f106107145761010080835404028352916020019161073f565b820191906000526020600020905b81548152906001019060200180831161072257829003601f168201915b5050505050905090565b61075b6107546109a8565b8383610bfa565b5050565b61076a8484846104c9565b61077684848484610d69565b50505050565b6060610787826108e3565b506000610792610f20565b905060008151116107b257604051806020016040528060008152506107dd565b806107bc84610f37565b6040516020016107cd929190611cf8565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000806108ef83611005565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361096257826040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161095991906118af565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6109bd8383836001611042565b505050565b6109dc828260405180602001604052806000815250611207565b5050565b6000806109ec84611005565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a2e57610a2d818486611223565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610abf57610a70600085600080611042565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610b42576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c6b57816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610c629190611819565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d5c91906116a8565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115610f1a578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02610dad6109a8565b8685856040518563ffffffff1660e01b8152600401610dcf9493929190611d71565b6020604051808303816000875af1925050508015610e0b57506040513d601f19601f82011682018060405250810190610e089190611dd2565b60015b610e8f573d8060008114610e3b576040519150601f19603f3d011682016040523d82523d6000602084013e610e40565b606091505b506000815103610e8757836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610e7e9190611819565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610f1857836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f0f9190611819565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b606060006001610f46846112e7565b01905060008167ffffffffffffffff811115610f6557610f646119c0565b5b6040519080825280601f01601f191660200182016040528015610f975781602001600182028036833780820191505090505b509050600082602001820190505b600115610ffa578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581610fee57610fed611dff565b5b04945060008503610fa5575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061107b5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156111af57600061108b846108e3565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156110f657508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611109575061110781846107e5565b155b1561114b57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016111429190611819565b60405180910390fd5b81156111ad57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611211838361143a565b61121e6000848484610d69565b505050565b61122e838383611533565b6112e257600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036112a357806040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161129a91906118af565b60405180910390fd5b81816040517f177e802f0000000000000000000000000000000000000000000000000000000081526004016112d9929190611e2e565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611345577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161133b5761133a611dff565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611382576d04ee2d6d415b85acef8100000000838161137857611377611dff565b5b0492506020810190505b662386f26fc1000083106113b157662386f26fc1000083816113a7576113a6611dff565b5b0492506010810190505b6305f5e10083106113da576305f5e10083816113d0576113cf611dff565b5b0492506008810190505b61271083106113ff5761271083816113f5576113f4611dff565b5b0492506004810190505b60648310611422576064838161141857611417611dff565b5b0492506002810190505b600a8310611431576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036114ac5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016114a39190611819565b60405180910390fd5b60006114ba838360006109e0565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461152e5760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016115259190611819565b60405180910390fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156115eb57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806115ac57506115ab84846107e5565b5b806115ea57508273ffffffffffffffffffffffffffffffffffffffff166115d28361096b565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61163d81611608565b811461164857600080fd5b50565b60008135905061165a81611634565b92915050565b600060208284031215611676576116756115fe565b5b60006116848482850161164b565b91505092915050565b60008115159050919050565b6116a28161168d565b82525050565b60006020820190506116bd6000830184611699565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156116fd5780820151818401526020810190506116e2565b60008484015250505050565b6000601f19601f8301169050919050565b6000611725826116c3565b61172f81856116ce565b935061173f8185602086016116df565b61174881611709565b840191505092915050565b6000602082019050818103600083015261176d818461171a565b905092915050565b6000819050919050565b61178881611775565b811461179357600080fd5b50565b6000813590506117a58161177f565b92915050565b6000602082840312156117c1576117c06115fe565b5b60006117cf84828501611796565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611803826117d8565b9050919050565b611813816117f8565b82525050565b600060208201905061182e600083018461180a565b92915050565b61183d816117f8565b811461184857600080fd5b50565b60008135905061185a81611834565b92915050565b60008060408385031215611877576118766115fe565b5b60006118858582860161184b565b925050602061189685828601611796565b9150509250929050565b6118a981611775565b82525050565b60006020820190506118c460008301846118a0565b92915050565b6000806000606084860312156118e3576118e26115fe565b5b60006118f18682870161184b565b93505060206119028682870161184b565b925050604061191386828701611796565b9150509250925092565b600060208284031215611933576119326115fe565b5b60006119418482850161184b565b91505092915050565b6119538161168d565b811461195e57600080fd5b50565b6000813590506119708161194a565b92915050565b6000806040838503121561198d5761198c6115fe565b5b600061199b8582860161184b565b92505060206119ac85828601611961565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119f882611709565b810181811067ffffffffffffffff82111715611a1757611a166119c0565b5b80604052505050565b6000611a2a6115f4565b9050611a3682826119ef565b919050565b600067ffffffffffffffff821115611a5657611a556119c0565b5b611a5f82611709565b9050602081019050919050565b82818337600083830152505050565b6000611a8e611a8984611a3b565b611a20565b905082815260208101848484011115611aaa57611aa96119bb565b5b611ab5848285611a6c565b509392505050565b600082601f830112611ad257611ad16119b6565b5b8135611ae2848260208601611a7b565b91505092915050565b60008060008060808587031215611b0557611b046115fe565b5b6000611b138782880161184b565b9450506020611b248782880161184b565b9350506040611b3587828801611796565b925050606085013567ffffffffffffffff811115611b5657611b55611603565b5b611b6287828801611abd565b91505092959194509250565b60008060408385031215611b8557611b846115fe565b5b6000611b938582860161184b565b9250506020611ba48582860161184b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611bf557607f821691505b602082108103611c0857611c07611bae565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c4882611775565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611c7a57611c79611c0e565b5b600182019050919050565b6000606082019050611c9a600083018661180a565b611ca760208301856118a0565b611cb4604083018461180a565b949350505050565b600081905092915050565b6000611cd2826116c3565b611cdc8185611cbc565b9350611cec8185602086016116df565b80840191505092915050565b6000611d048285611cc7565b9150611d108284611cc7565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000611d4382611d1c565b611d4d8185611d27565b9350611d5d8185602086016116df565b611d6681611709565b840191505092915050565b6000608082019050611d86600083018761180a565b611d93602083018661180a565b611da060408301856118a0565b8181036060830152611db28184611d38565b905095945050505050565b600081519050611dcc81611634565b92915050565b600060208284031215611de857611de76115fe565b5b6000611df684828501611dbd565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000604082019050611e43600083018561180a565b611e5060208301846118a0565b939250505056fea264697066735822122044d72fc17f4dfd3a7565d5b2be45cc3feeeca32b6a7262196e702b1ac3efe3be64736f6c63430008140033";

type MyCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyCoin__factory extends ContractFactory {
  constructor(...args: MyCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyCoin> {
    return super.deploy(overrides || {}) as Promise<MyCoin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyCoin {
    return super.attach(address) as MyCoin;
  }
  override connect(signer: Signer): MyCoin__factory {
    return super.connect(signer) as MyCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyCoinInterface {
    return new utils.Interface(_abi) as MyCoinInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyCoin {
    return new Contract(address, _abi, signerOrProvider) as MyCoin;
  }
}
