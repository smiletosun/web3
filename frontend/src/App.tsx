import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Empty, Layout, Nav } from "@douyinfe/semi-ui";
import { useBatchState } from "./hooks/useBatchState";
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";
import { Menus } from "./menus";

const { Header, Sider, Content } = Layout;
const DefaultKey = Menus[0].itemKey;

function App() {
  const [state, setState] = useBatchState({
    selectedKey: DefaultKey,
  });

  const Component = Menus.find(
    (item) => item.itemKey === state.selectedKey
  )?.component;

  return (
    <Layout className="w-screen h-screen" style={{ backgroundColor: "white" }}>
      <Header style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
        <Nav
          mode="horizontal"
          footer={
            <>
              <ConnectButton />
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
          style={{
            padding: "24px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          {Component ? (
            <Component />
          ) : (
            <Empty
              image={
                <IllustrationConstruction style={{ width: 150, height: 150 }} />
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
  );
}

export default App;
