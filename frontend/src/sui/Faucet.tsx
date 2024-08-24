import { Form, Toast } from "@douyinfe/semi-ui";
import { getFaucetHost, requestSuiFromFaucetV1 } from "@mysten/sui/faucet";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useSuiClient,
} from "@mysten/dapp-kit";
import { FormButtons } from "../components/FormButtons";
import { Transaction } from "@mysten/sui/transactions";
import { PACKAGE_ID } from "./constants";

export function Faucet() {
  const account = useCurrentAccount();
  const handleFaucet = async (val: any) => {
    const { address } = val;
    await requestSuiFromFaucetV1({
      host: getFaucetHost("localnet"),
      recipient: address,
    });

    Toast.success("获取成功");
  };
  return (
    <Form onSubmit={handleFaucet} title="faucet">
      <h5 className="text-lg text-black">充值</h5>
      <Form.Input
        field="address"
        label="address"
        initValue={account?.address}
        placeholder="0x..."
        rules={[{ required: true, message: "不能为空" }]}
      />
      <FormButtons />
    </Form>
  );
}

export function Mint() {
  const account = useCurrentAccount();
  const client = useSuiClient();
  const { mutateAsync: execute } = useSignAndExecuteTransaction();

  const handleMint = async (val: any) => {
    console.log("【val】-44-「Faucet」", val);
    const tx = new Transaction();
    tx.setGasBudget(1000000);
    await tx.moveCall({
      target: `${PACKAGE_ID}::my_coin::mint`,
      arguments: [
        tx.object(
          "0x6884b2fe26e637ed41a974d74cbaaeef9ee73be42fafdb6f6de04f220e97ed54"
        ),
        tx.pure.address(account?.address!),
        tx.pure.u256(val.amount),
      ],
    });

    const result = await execute({
      transaction: tx,
    });

    await client.waitForTransaction({
      digest: result?.digest,
    });

    Toast.success("创建成功");
  };

  return (
    <Form onSubmit={handleMint} title="mint sb coin">
      <h5 className="text-lg text-black">mint</h5>
      <Form.InputNumber
        field="amount"
        label="amount"
        rules={[{ required: true, message: "数量" }]}
      />
      <FormButtons />
    </Form>
  );
}
