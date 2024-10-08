/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Math",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Math__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "Ballout",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ballout__factory>;
    getContractFactory(
      name: "Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Callee__factory>;
    getContractFactory(
      name: "Caller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Caller__factory>;
    getContractFactory(
      name: "Car",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Car__factory>;
    getContractFactory(
      name: "Deploy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Deploy__factory>;
    getContractFactory(
      name: "Helper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Helper__factory>;
    getContractFactory(
      name: "TestContract1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestContract1__factory>;
    getContractFactory(
      name: "TestContract2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestContract2__factory>;
    getContractFactory(
      name: "IEventSubscriber",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEventSubscriber__factory>;
    getContractFactory(
      name: "Subscribe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Subscribe__factory>;
    getContractFactory(
      name: "HelloWorld",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HelloWorld__factory>;
    getContractFactory(
      name: "MinimalProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinimalProxy__factory>;
    getContractFactory(
      name: "MyCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyCoin__factory>;
    getContractFactory(
      name: "MyNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MyNFT__factory>;
    getContractFactory(
      name: "OnlyOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OnlyOwner__factory>;
    getContractFactory(
      name: "Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Test__factory>;
    getContractFactory(
      name: "BuggyProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BuggyProxy__factory>;
    getContractFactory(
      name: "CounterV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CounterV1__factory>;
    getContractFactory(
      name: "CounterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CounterV2__factory>;
    getContractFactory(
      name: "Dev",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Dev__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ProxyAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>;
    getContractFactory(
      name: "Wallet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Wallet__factory>;

    getContractAt(
      name: "IERC1155Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Math",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Math>;
    getContractAt(
      name: "Strings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "Ballout",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ballout>;
    getContractAt(
      name: "Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Callee>;
    getContractAt(
      name: "Caller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Caller>;
    getContractAt(
      name: "Car",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Car>;
    getContractAt(
      name: "Deploy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Deploy>;
    getContractAt(
      name: "Helper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Helper>;
    getContractAt(
      name: "TestContract1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestContract1>;
    getContractAt(
      name: "TestContract2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestContract2>;
    getContractAt(
      name: "IEventSubscriber",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEventSubscriber>;
    getContractAt(
      name: "Subscribe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Subscribe>;
    getContractAt(
      name: "HelloWorld",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HelloWorld>;
    getContractAt(
      name: "MinimalProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinimalProxy>;
    getContractAt(
      name: "MyCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyCoin>;
    getContractAt(
      name: "MyNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MyNFT>;
    getContractAt(
      name: "OnlyOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OnlyOwner>;
    getContractAt(
      name: "Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Test>;
    getContractAt(
      name: "BuggyProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BuggyProxy>;
    getContractAt(
      name: "CounterV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CounterV1>;
    getContractAt(
      name: "CounterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CounterV2>;
    getContractAt(
      name: "Dev",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Dev>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "ProxyAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyAdmin>;
    getContractAt(
      name: "Wallet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Wallet>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
