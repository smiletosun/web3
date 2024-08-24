import { Button, Divider, Form, Toast } from "@douyinfe/semi-ui";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { FormButtons } from "../components/FormButtons";
import { CounterType, PACKAGE_ID } from "./constants";

export function Counter({ dataSource }: { dataSource: any[] }) {
  const client = useSuiClient();
  const { mutateAsync: execute } = useSignAndExecuteTransaction();
  const addCounter = async (val: any) => {
    const tx = new Transaction();

    tx.moveCall({
      target: `${PACKAGE_ID}::counter::addCount`,
      arguments: [tx.object(val.counter)],
    });

    const result = await execute({
      transaction: tx,
    });

    await client.waitForTransaction({
      digest: result?.digest,
    });

    Toast.success("添加成功");
    console.log("【result】-76-「Counter」", result);
  };

  const createCounter = async () => {
    const transaction = new Transaction();

    await transaction.moveCall({
      target: `${PACKAGE_ID}::counter::createCounter`,
    });

    const result = await execute({
      transaction,
    });

    await client.waitForTransaction({
      digest: result?.digest,
    });

    Toast.success("创建成功");
  };

  return (
    <div>
      <div className="flex flex-row gap-4">
        <Button
          onClick={createCounter}
          theme="solid"
          type="primary"
          htmlType="button"
        >
          创建 Counter
        </Button>
      </div>
      <Divider className="my-4" />
      <Form onSubmit={addCounter} className="w-1/2" title="添加 Counter">
        <h5 className="text-lg text-black">添加 Counter</h5>
        <Form.Select field="counter" noLabel className="w-full">
          {dataSource
            .filter((opt: any) => opt?.type === CounterType)
            .map((item: any) => (
              <Form.Select.Option value={item?.data?.objectId} />
            ))}
        </Form.Select>
        <FormButtons />
      </Form>
    </div>
  );
}
