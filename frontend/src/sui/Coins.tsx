import { useSignAndExecuteTransaction, useSuiClient } from "@mysten/dapp-kit";
import { FormButtons } from "@/components/FormButtons";
import { Transaction } from "@mysten/sui/transactions";
import { PACKAGE_ID, TREASURY } from "./constants";
import { useAllCoins } from "./hooks/useAllCoins";
import { Toast, Form, Table, Divider, Modal, Button } from "@douyinfe/semi-ui";
import { IconDelete } from "@douyinfe/semi-icons";
import { Address } from "@ant-design/web3";

const { Column } = Table;

export function Mint(props: any) {
  return (
    <Form
      onSubmit={props.onMint}
      title="mint sb coin"
      labelPosition={"left" as const}
    >
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

export function Coins() {
  const res = useAllCoins();
  const data = res.data;

  const client = useSuiClient();
  const { mutateAsync: execute } = useSignAndExecuteTransaction();

  const handleMint = async (val: any) => {
    const tx = new Transaction();
    tx.setGasBudget(100000000);
    await tx.moveCall({
      package: PACKAGE_ID,
      module: "my_coin",
      function: "mint",
      arguments: [tx.object(TREASURY), tx.pure.u64(val.amount)],
    });

    const result = await execute({
      transaction: tx,
    });

    await client.waitForTransaction({
      digest: result?.digest,
    });

    Toast.success("添加成功");
    res.refetch();
  };

  const handleBurn = async (record: any) => {
    Modal.confirm({
      title: `确定销毁代币？`,
      content: (
        <>
          <p>
            <Address address={record.coinType} />
          </p>
          <p>balance：{record.balance}</p>
        </>
      ),
      async onOk() {
        const tx = new Transaction();
        tx.setGasBudget(100000000);
        await tx.moveCall({
          package: PACKAGE_ID,
          module: "my_coin",
          function: "burn",
          arguments: [tx.object(TREASURY), tx.object(record.coinObjectId)],
        });

        const result = await execute({
          transaction: tx,
        });

        await client.waitForTransaction({
          digest: result?.digest,
        });

        Toast.success("销毁成功");
        res.refetch();
      },
    });
  };

  return (
    <>
      <Mint onMint={handleMint} />
      <Divider className="mt-4" />
      <Table
        loading={res.isLoading}
        title={<span className="text-lg text-black">当前用户拥有的代币</span>}
        dataSource={data?.data}
        pagination={true}
      >
        <Column
          title="objectId"
          dataIndex="coinObjectId"
          width="400"
          ellipsis={{ showTitle: true }}
        />
        <Column
          title="coinType"
          dataIndex="coinType"
          width="400"
          ellipsis={{ showTitle: true }}
        />
        <Column
          title="balance"
          dataIndex="balance"
          width="400"
          ellipsis={{ showTitle: true }}
        />
        <Column
          title="操作"
          width={150}
          render={(_, record) => {
            return (
              <Button
                icon={<IconDelete />}
                aria-label="注销"
                onClick={() => handleBurn(record)}
              />
            );
          }}
        />
      </Table>
    </>
  );
}
