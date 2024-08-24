import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { merge } from "lodash-es";
import { config } from "./wagmi";
import { RainbowKitProvider, lightTheme, Theme } from "@rainbow-me/rainbowkit";
import { PropsWithChildren } from "react";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";
import { NetType } from "./constants";

const queryClientEvm = new QueryClient();
const queryClientSui = new QueryClient();

const rainbowTheme: Theme = merge(lightTheme(), {
  colors: {
    accentColor: "var(--semi-color-primary)",
  },
});

export function EvmWrapper({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClientEvm}>
        <RainbowKitProvider theme={rainbowTheme}>{children}</RainbowKitProvider>
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
