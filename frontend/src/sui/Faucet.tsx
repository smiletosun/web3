import { Button, Form, Toast } from "@douyinfe/semi-ui";
import { getFaucetHost, requestSuiFromFaucetV1 } from "@mysten/sui/faucet";
import { useCurrentAccount } from "@mysten/dapp-kit";

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
    <Form onSubmit={handleFaucet}>
      <Form.Input
        className="w-1/2"
        field="address"
        label="输入地址"
        required
        initValue={account?.address}
      />
      <Button htmlType="submit" theme="solid" type="primary">
        faucet
      </Button>
    </Form>
  );
}
