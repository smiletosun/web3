import { Button, Divider, Form, Table, Toast } from "@douyinfe/semi-ui";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useSuiClient,
  useSuiClientQuery,
} from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { CounterType, PACKAGE_ID } from "./constants";
import { FormButtons } from "../components/FormButtons";

const { Column } = Table;

function filterCounter(data?: any) {
  return data
    ?.map((item: any) => {
      if (
        item?.data?.content?.dataType === "moveObject" &&
        item?.data?.content?.type === CounterType
      ) {
        return {
          ...item,
          counterValue: item.data?.content?.fields?.value,
        };
      }
    })
    .filter(Boolean);
}

export function Counter() {
  const client = useSuiClient();
  const currentAccount = useCurrentAccount();
  const { mutateAsync: execute } = useSignAndExecuteTransaction();
  const { data, refetch } = useSuiClientQuery(
    "getOwnedObjects",
    {
      owner: currentAccount?.address as string,
      options: {
        showContent: true,
      },
    },
    {
      enabled: !!currentAccount,
    }
  );

  const addCounter = async (val: any) => {
    console.log("【val】-46-「Counter」", val);
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
    refetch();
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

    refetch();
    Toast.success("创建成功");
  };

  const dataSource = filterCounter(data?.data) ?? [];
  return (
    <div>
      <Table
        title={
          <span className="text-lg text-black">当前用户拥有的Counter</span>
        }
        dataSource={dataSource}
        pagination={true}
      >
        <Column title="digest" dataIndex="data.digest" />
        <Column title="objectId" dataIndex="data.objectId" />
        <Column title="version" dataIndex="data.version" />
        <Column title="value" dataIndex="counterValue" />
      </Table>

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
          {dataSource.map((item: any) => (
            <Form.Select.Option value={item?.data?.objectId} />
          ))}
        </Form.Select>
        <FormButtons />
      </Form>
    </div>
  );
}
