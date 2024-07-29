import React from "react";
import { ethers } from "ethers";
import TokenArtifact from "../contracts/HelloWorld.json";
import contractAddress from "../contracts/contract-address.json";

import { NoWalletDetected } from "./NoWalletDetected";
import { ConnectWallet } from "./ConnectWallet";


export class Dapp extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      selectedAddress: undefined,
      text: "",
    };

    this.state = this.initialState;
  }

  componentDidMount() {
    window.ethereum.on("accountsChanged", ([newAddress]) => {
      this._stopPollingData();
      if (newAddress === undefined) {
        return this._resetState();
      }

      this.init(newAddress);
    });

    window.ethereum.on("networkChanged", (chainId) => {
      this.init(this.state.selectedAddress);
    });
  }

  render() {
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }

    if (!this.state.selectedAddress) {
      return (
        <ConnectWallet
          connectWallet={() => this.connectWallet()}
          networkError={this.state.networkError}
          dismiss={() => this._dismissNetworkError()}
        />
      );
    }

    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-12">
            <p>
              Welcome <b>{this.state.selectedAddress}</b>
              {this.state.text}
            </p>
          </div>
          <button onClick={() => this.getText()}>get text</button>
          <button onClick={() => this.updateText()}>update text</button>
        </div>
        <hr />
      </div >
    );
  }

  async connectWallet() {
    const [selectedAddress] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    this.init(selectedAddress);
  }

  init(userAddress) {
    this.setState({
      selectedAddress: userAddress,
    });
    this._provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

    this.helloWorld = new ethers.Contract(
      contractAddress.HelloWorld,
      TokenArtifact.abi,
      this._provider.getSigner(0),
    );
  }

  _stopPollingData() {
    clearInterval(this._pollDataInterval);
    this._pollDataInterval = undefined;
  }

  async getText() {
    const text = await this.helloWorld?.get();
    this.setState({ text });
  }

  async updateText() {
    const now = Date.now().valueOf();
    const tx = await this.helloWorld.update(`This is the new message. ${now}`)
    await tx.wait();
    this.getText();
  }

  // This method just clears part of the state.
  _dismissNetworkError() {
    this.setState({ networkError: undefined });
  }

  // This method resets the state
  _resetState() {
    this.setState(this.initialState);
  }
}
