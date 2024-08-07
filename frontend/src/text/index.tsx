import { Card, Divider, List } from "@douyinfe/semi-ui";
import { useAccount, useReadContract } from "wagmi";
import Contract from "../contracts";
import { Transfer } from "./Transfer";
import { TextContract } from "./Text";

export default function Text() {
  const account = useAccount();

  const articles = useReadContract({
    abi: Contract.Text.abi,
    address: Contract.Text.address,
    functionName: "getArticles",
    account: account.address,
  });

  /**
   *
   * 监听 EVM 事件
   *
   useWatchContractEvent({
    address: Contract.Text.address,
    abi: Contract.Text.abi,
    eventName: "AddArticle",
    args: {
      user: account.address,
    },
    onLogs(logs) {
      console.log("【logs】-44-「index」", logs);
      if (logs.some((item) => (item as any).args?.user === account.address)) {
        articles.refetch();
        form.current?.formApi.reset();
        addArticle.reset();
      }
    },
    fromBlock: block.data?.number,
  });
   */
  let listData = [...((articles.data as string[]) ?? [])]?.reverse();

  return (
    <div className="flex flex-row gap-2 h-full">
      <Card className="flex-1" title="工具">
        <TextContract
          onSuccess={() => {
            articles.refetch();
          }}
        />
        <Divider className="my-4" />
        <Transfer />
      </Card>

      <div className="flex-1 h-full overflow-auto">
        <List
          header="历史记录"
          bordered
          loading={articles.isPending}
          dataSource={listData}
          renderItem={(item, idx) => <List.Item key={idx}>{item}</List.Item>}
        />
      </div>
    </div>
  );
}
