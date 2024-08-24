import { Form, Button, Toast } from "@douyinfe/semi-ui";
import { useRef } from "react";
import { useWriteWithReceipt } from "../../hooks/useWriteWithReceipt";
import Contract from "../contracts";

export interface TextContractProps {
  onSuccess: () => void;
}

export function TextContract({ onSuccess }: TextContractProps) {
  const form = useRef<React.ElementRef<typeof Form>>(null);
  const { writeContractWithReceipt } = useWriteWithReceipt();

  const handleSubmit = async (val: any) => {
    await writeContractWithReceipt({
      address: Contract.Text.address,
      abi: Contract.Text.abi,
      functionName: "addArticle",
      args: [val.text],
    });

    form.current?.formApi.reset();
    Toast.success("提交成功");
    onSuccess?.();
  };

  return (
    <Form onSubmit={handleSubmit} ref={form}>
      <Form.TextArea
        field="text"
        label="请填写"
        rules={[{ required: true, message: "不能为空" }]}
      />
      <Button theme="solid" htmlType="submit" type="primary">
        提交
      </Button>
    </Form>
  );
}
