import { Button, Divider, Form, Toast } from "@douyinfe/semi-ui";
import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { Transaction } from "@mysten/sui/transactions";
import { FormButtons } from "../components/FormButtons";
import { CounterType, PACKAGE_ID } from "./constants";
import { getFaucetHost, requestSuiFromFaucetV1 } from "@mysten/sui/faucet";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { Card, SideSheet, Table } from "@douyinfe/semi-ui";
import { useSuiClientQuery } from "@mysten/dapp-kit";
import ReactJson from "react-json-view";
import { useBatchState } from "@/hooks/useBatchState";
import { IconCamera } from "@douyinfe/semi-icons";

interface Props {
  dataSource?: any[];
  onSuccess?: () => void;
}

export function Counter(props: Props) {
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
    props.onSuccess?.();
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
    props.onSuccess?.();
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
          {props?.dataSource
            ?.filter((opt: any) => opt?.type === CounterType)
            .map((item: any) => (
              <Form.Select.Option value={item?.data?.objectId} />
            ))}
        </Form.Select>
        <FormButtons />
      </Form>
    </div>
  );
}

export function Faucet(props: Props) {
  const account = useCurrentAccount();
  const handleFaucet = async (val: any) => {
    const { address } = val;
    await requestSuiFromFaucetV1({
      host: getFaucetHost("localnet"),
      recipient: address,
    });

    Toast.success("获取成功");
    props.onSuccess?.();
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

const { Column } = Table;

function filterCounter(data?: any) {
  return data?.map((item: any) => item.data).filter(Boolean);
}

export function Tools() {
  const currentAccount = useCurrentAccount();
  const [state, setData] = useBatchState<{ visible: boolean; data?: any }>({
    visible: false,
    data: undefined,
  });

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

  const dataSource = filterCounter(data?.data) ?? [];

  return (
    <div className="container flex flex-col gap-4">
      <Card title="工具">
        <div className="grid grid-cols-2 gap-4">
          <Faucet onSuccess={refetch} />
          <Counter dataSource={dataSource} onSuccess={refetch} />
        </div>
      </Card>

      <Table
        title={<span className="text-lg text-black">当前用户拥有的Object</span>}
        dataSource={dataSource}
        pagination={true}
      >
        <Column
          title="objectId"
          dataIndex="objectId"
          width="400"
          ellipsis={{ showTitle: true }}
        />
        <Column
          title="type"
          dataIndex="content.type"
          width="400"
          ellipsis={{ showTitle: true }}
        />
        <Column
          title="value"
          dataIndex="content.fields"
          width={100}
          render={(_, record) => {
            return (
              <Button
                icon={<IconCamera />}
                aria-label="查看"
                onClick={() => setData({ visible: true, data: record })}
              />
            );
          }}
        />
      </Table>

      <SideSheet
        title="content"
        visible={state.visible}
        size="large"
        onCancel={() => setData({ visible: false, data: undefined })}
      >
        <ReactJson src={state?.data} />
      </SideSheet>
    </div>
  );
}
