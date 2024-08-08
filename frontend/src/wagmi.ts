import { defineChain } from "viem";
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

let chains: any = [mainnet, sepolia];
let transports: any = { [mainnet.id]: http(), [sepolia.id]: http() };

console.log("【process.env.NODE_ENV】-9-「wagmi」", process.env.NODE_ENV);
if (process.env.NODE_ENV === "local") {
  const local = defineChain({
    id: 31337,
    name: "local",
    nativeCurrency: { name: "Local Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: {
        http: ["http://127.0.0.1:8545"],
      },
    },
  });

  chains = [...chains, local];
  transports = {
    ...transports,
    [local.id]: http(),
  };
}

export const config = createConfig({
  chains,
  transports,
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
