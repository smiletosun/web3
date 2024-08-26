import { Layout } from "@douyinfe/semi-ui";
import { NFTCard } from "@ant-design/web3";

export function Nft() {
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
        <NFTCard
          name="My NFT"
          tokenId={16}
          price={{
            value: 1230000000000000000n,
          }}
          like={{
            totalLikes: 1600,
          }}
          description="This is description"
          showAction
          footer="This is footer"
          image="https://api.our-metaverse.xyz/ourms/6_pnghash_0cecc6d080015b34f60bdd253081f36e277ce20ceaf7a6340de3b06d2defad6a_26958469.webp"
        />
      </Layout.Content>
    </div>
  );
}
