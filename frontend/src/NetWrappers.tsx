import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { PropsWithChildren } from "react";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { NetType } from "./constants";

const queryClientEvm = new QueryClient();
const queryClientSui = new QueryClient();

export function EvmWrapper({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClientEvm}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const SuiNetWorks = {
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
};

export function SuiWrapper({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClientSui}>
      <SuiClientProvider networks={SuiNetWorks} defaultNetwork="localnet">
        <WalletProvider>{children}</WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}

export const NetWrapperMap = {
  [NetType.Evm]: EvmWrapper,
  [NetType.Sui]: SuiWrapper,
};
