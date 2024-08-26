import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";

export function useAllCoins() {
  const currentAccount = useCurrentAccount();
  const { data } = useSuiClientQuery(
    "getAllCoins",
    {
      owner: currentAccount?.address as string,
    },
    {
      enabled: !!currentAccount,
    }
  );

  return data;
}
