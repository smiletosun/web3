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

export function Mint(props: any) {
  const { dataSource } = props;
  console.log("【dataSource】-41-「Faucet」", dataSource);

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
          "0xb8649434e07bf9e271f8ee6926643398df10c577c2f9c6c93492a770c7791dba"
        ),
        tx.pure.u64(val.amount),
        tx.pure.address(account?.address!),
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

  const handleBurn = async (val: any) => {
    const tx = new Transaction();
    tx.setGasBudget(3000);

    // await tx.moveCall({
    //   target: `${PACKAGE_ID}::my_coin::mint`,
    //   arguments: [
    //     tx.object(
    //       "0xb8649434e07bf9e271f8ee6926643398df10c577c2f9c6c93492a770c7791dba"
    //     ),
    //     tx.pure.u64(val.amount),
    //   ],
    // });

    // const result = await execute({
    //   transaction: tx,
    // });

    // await client.waitForTransaction({
    //   digest: result?.digest,
    // });

    // Toast.success("创建成功");
  };

  return (
    <>
      <Form onSubmit={handleMint} title="mint sb coin">
        <h5 className="text-lg text-black">mint</h5>
        <Form.InputNumber
          field="amount"
          label="amount"
          rules={[{ required: true, message: "数量" }]}
        />
        <FormButtons />
      </Form>

      <Form onSubmit={handleBurn} title="mint sb coin">
        <h5 className="text-lg text-black">销毁</h5>
        <Form.InputNumber
          field="amount"
          label="amount"
          rules={[{ required: true, message: "数量" }]}
        />
        <FormButtons />
      </Form>
    </>
  );
}
