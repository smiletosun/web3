import { Card, Divider, Table } from "@douyinfe/semi-ui";
import { Faucet, Mint } from "./Faucet";
import { Counter } from "./Counter";
import Column from "@douyinfe/semi-ui/lib/es/table/Column";
import { useCurrentAccount, useSuiClientQuery } from "@mysten/dapp-kit";
import ReactJson from "react-json-view";

function filterCounter(data?: any) {
  return data?.map((item: any) => item.data).filter(Boolean);
}

export function Sui() {
  const currentAccount = useCurrentAccount();
  const { data } = useSuiClientQuery(
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
      <Table
        title={
          <span className="text-lg text-black">当前用户拥有的Counter</span>
        }
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
          width="50%"
          render={(v) => {
            return <ReactJson src={v} collapsed />;
          }}
        />
      </Table>
      <Divider />
      <Card title="工具">
        <div className="grid grid-cols-2 gap-4">
          <Faucet />
          <Mint dataSource={dataSource} />
        </div>
      </Card>

      <Card title="Counter">
        <div className="flex flex-col gap-4 divide-y-2 divide-dashed divide-rose-300">
          <Counter dataSource={dataSource} />
        </div>
      </Card>
    </div>
  );
}
