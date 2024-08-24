import { Empty, Layout, Nav } from "@douyinfe/semi-ui";
import { useBatchState } from "./hooks/useBatchState";
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
import { Menus } from "./menus";
import { EvmWrapper, NetWrapperMap } from "./NetWrappers";
import { ConnectButton as EvmConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectButton as SuiConnectButton } from "@mysten/dapp-kit";
import { NetType } from "./constants";

const { Header, Sider, Content } = Layout;
const DefaultKey = Menus[0].itemKey;

function App() {
  const [state, setState] = useBatchState({
    selectedKey: DefaultKey,
  });

  const menu = Menus.find((item) => item.itemKey === state.selectedKey);
  const { component: Component, netType } = menu || {};
  const Wrapper = netType ? NetWrapperMap[netType] : EvmWrapper;
  return (
    <Wrapper>
      <Layout
        className="w-screen h-screen"
        style={{ backgroundColor: "white" }}
      >
        <Header style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
          <Nav
            mode="horizontal"
            footer={
              <>
                {netType === NetType.Evm && (
                  <EvmConnectButton
                    accountStatus="avatar"
                    chainStatus="icon"
                    showBalance
                  />
                )}
                {netType === NetType.Sui && (
                  <SuiConnectButton
                    connectText="链接钱包"
                    style={{
                      backgroundColor: "var(--semi-color-primary)",
                      color: "white",
                    }}
                  />
                )}
              </>
            }
          ></Nav>
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
            <Nav
              selectedKeys={[state.selectedKey]}
              style={{ maxWidth: 220, height: "100%" }}
              footer={{ collapseButton: true }}
              items={Menus}
              onSelect={(data) => {
                setState({
                  selectedKey: data?.selectedKeys?.[0] as string,
                });
              }}
            />
          </Sider>
          <Content
            className="p-5 w-full overflow-auto"
            style={{ height: "calc(100vh - 60px)" }}
          >
            {Component ? (
              <Component />
            ) : (
              <Empty
                image={
                  <IllustrationConstruction
                    style={{ width: 150, height: 150 }}
                  />
                }
                darkModeImage={
                  <IllustrationConstructionDark
                    style={{ width: 150, height: 150 }}
                  />
                }
                className="h-screen flex justify-center items-center"
                title={"功能建设中"}
                description="当前功能暂未开放，敬请期待。"
              />
            )}
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  );
}

export default App;
