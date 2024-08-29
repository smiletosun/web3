import {
  Button,
  Divider,
  Empty,
  Form,
  Layout,
  Modal,
  Toast,
} from "@douyinfe/semi-ui";
import { NFTCard } from "@ant-design/web3";
import { useRef } from "react";
import { REQUIRED } from "@/constants";
import { IconSend } from "@douyinfe/semi-icons";
import { NftType, PACKAGE_ID } from "../constants";
import { Transaction } from "@mysten/sui/transactions";
import {
  useCurrentAccount,
  useSignAndExecuteTransaction,
  useSuiClient,
  useSuiClientQuery,
} from "@mysten/dapp-kit";
import { Show } from "@/components/Show";
import { IllustrationConstruction } from "@douyinfe/semi-illustrations";

function useAllNfts() {
  const currentAccount = useCurrentAccount();
  const res = useSuiClientQuery(
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

  const records = res.data?.data

    ?.map((item: any) => item.data)
    ?.map((item) => item.content)
    ?.filter(Boolean)
    ?.filter((opt: any) => opt?.type === NftType);

  console.log("【records】-38-「index」", records);
  return { records, ...res };
}

export function Nft() {
  const client = useSuiClient();
  const { mutateAsync: execute } = useSignAndExecuteTransaction();
  const formRef = useRef<React.ElementRef<typeof Form>>(null);
  const nftService = useAllNfts();

  const addNft = () => {
    Modal.info({
      title: "添加 NFT",
      icon: <IconSend />,
      content: (
        <>
          <Form ref={formRef}>
            <Form.Input field="name" label="name" rules={[REQUIRED]} />
            <Form.Input field="url" label="url" rules={[REQUIRED]} />
            <Form.Input
              field="description"
              label="description"
              rules={[REQUIRED]}
            />
          </Form>
        </>
      ),
      async onOk() {
        const val = await formRef.current?.formApi.validate();
        console.log(val);
        if (val) {
          const tx = new Transaction();
          tx.setGasBudget(100000000);
          await tx.moveCall({
            package: PACKAGE_ID,
            module: "nft",
            function: "mintToSender",
            arguments: [
              tx.pure.string(val.name),
              tx.pure.string(val.description),
              tx.pure.string(val.url),
            ],
          });

          const result = await execute({
            transaction: tx,
          });

          await client.waitForTransaction({
            digest: result?.digest,
          });

          Toast.success("铸造成功");
        }
      },
    });
  };

  return (
    <div className="container">
      <Layout.Header
        style={{
          background: "var(--semi-color-fill-0)",
        }}
      >
        <h3 className="text-center p-4">Nft Market</h3>
      </Layout.Header>

      <Layout.Content className="mt-4">
        <div className="inline-flex gap-4">
          <Button
            theme="solid"
            type="primary"
            style={{ marginRight: 8 }}
            onClick={addNft}
          >
            铸造 NFT
          </Button>
        </div>

        <Divider className="my-4" />

        <Show
          when={nftService.records?.length}
          fallback={
            <Empty
              image={
                <IllustrationConstruction style={{ width: 150, height: 150 }} />
              }
              className="h-screen flex justify-center items-center"
              title={"暂无数据"}
            />
          }
        >
          <>
            {nftService.records?.map(({ fields: item }) => (
              <NFTCard
                name={item.name}
                tokenId={item.objectId}
                description={item.description}
                image={item.url}
                key={item.objectId}
              />
            ))}
          </>
        </Show>
      </Layout.Content>
    </div>
  );
}
