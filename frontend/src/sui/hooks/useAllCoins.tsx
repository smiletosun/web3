import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";

export function useAllCoins() {
  const currentAccount = useCurrentAccount();

  const res = useSuiClientQuery(
    "getAllCoins",
    {
      owner: currentAccount?.address as string,
    },
    {
      enabled: !!currentAccount,
    }
  );

  return res;
}
