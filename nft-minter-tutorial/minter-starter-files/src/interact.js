export async function connectWallet() {
  if (window.ethereum) {
    const addressArr = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    const obj = {
      status: "👆🏽 Write a message in the text-field above.",
      address: addressArr[0],
    }

    return obj;
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            🦊 <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    }
  }

}

export async function getCurrentWalletConnected() {
  if (window.ethereum) {
    return {
      address: window.ethereum.selectedAddress,
      status: "👆🏽 Write a message in the text-field above.",
    }
  } else {
    return {
      address: "",
      status: "🦊 Connect to Metamask using the top right button.",
    }
  }
}
