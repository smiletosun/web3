import { Form, Toast } from "@douyinfe/semi-ui";
import { getFaucetHost, requestSuiFromFaucetV1 } from "@mysten/sui/faucet";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { FormButtons } from "../components/FormButtons";

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
        className="w-1/2"
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
