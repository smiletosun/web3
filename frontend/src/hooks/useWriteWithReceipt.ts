import { useConfig } from "wagmi";
import { waitForTransactionReceipt, writeContract } from "wagmi/actions";

export function useWriteWithReceipt() {
  const config = useConfig();
  const writeContractWithReceipt = async (args: any) => {
    const writeRes = await writeContract(config, args);
    const receipt = await waitForTransactionReceipt(config, { hash: writeRes });
    return receipt;
  };

  return {
    writeContractWithReceipt,
  };
}
