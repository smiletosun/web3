import { Button, Form } from "@douyinfe/semi-ui";
import { parseEther } from "viem";
import { useSendTransaction } from "wagmi";

export function Transfer() {
  const sendService = useSendTransaction();

  const handleTransfer = async (val: any) => {
    console.log("【val】-34-「index」", val);
    const { account, amount } = val;

    console.log("【address】-36-「index」", account);
    console.log("【account.address】-40-「index」", account);

    await sendService.sendTransactionAsync({
      to: account,
      value: parseEther(`${amount}`),
    });
  };

  return (
    <Form
      onSubmit={handleTransfer}
      onReset={() => {
        sendService.reset();
      }}
    >
      <Form.Input
        field="account"
        label="目标账户"
        rules={[{ required: true, message: "不能为空" }]}
      />
      <Form.InputNumber
        field="amount"
        label="金额"
        rules={[{ required: true, message: "不能为空" }]}
      />
      <div className="flex flex-row gap-2">
        <Button
          theme="solid"
          htmlType="submit"
          type="primary"
          disabled={sendService.isPending}
        >
          提交
        </Button>

        <Button
          htmlType="reset"
          type="primary"
          disabled={sendService.isPending}
        >
          重置
        </Button>
      </div>
      {sendService.data && <div>Transaction Hash: {sendService.data}</div>}
    </Form>
  );
}
