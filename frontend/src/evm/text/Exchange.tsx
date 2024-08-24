import { Input } from "@douyinfe/semi-ui";
import { useEffect } from "react";
import { formatGwei, parseEther } from "viem";
import { useAccount, useConfig } from "wagmi";
import { getBalance } from "wagmi/actions";
import { useBatchState } from "../../hooks/useBatchState";

export function Exchange() {
  const config = useConfig();
  const account = useAccount();
  const [val, setVal] = useBatchState<{
    eth: string;
    gas: string;
  }>({
    eth: "",
    gas: "",
  });

  const { eth, gas } = val;

  useEffect(() => {
    if (account.address) {
      getBalance(config, {
        address: account.address,
        unit: "ether",
      }).then((balance) => setVal({ eth: `${balance.formatted}` }));
    }
  }, [account.address, account.chainId]);

  return (
    <>
      <h4 className="my-2">转换</h4>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <Input
            value={eth}
            onChange={(val) => setVal({ eth: val })}
            addonAfter="eth"
          />
          <span>{`=>`}</span>
          <Input
            value={`${eth ? parseEther(eth, "wei") : ""}`}
            disabled
            addonAfter="wei"
          />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Input
            value={gas}
            onChange={(val) => setVal({ gas: `${val}` })}
            addonAfter="wei"
          />
          <span>{`=>`}</span>
          <Input
            value={`${gas ? formatGwei(BigInt(gas)) : ""}`}
            disabled
            addonAfter="eth"
          />
        </div>
      </div>
    </>
  );
}
