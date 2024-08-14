import { IconCart, IconText, IconUserGroup } from "@douyinfe/semi-icons";
import { Text } from "./text";
import { Nft } from "./nft";
import { Vote } from "./vote";
import { Sui } from "./sui";
import { NetType } from "./constants";

export const Menus = [
  {
    itemKey: "vote",
    text: "投票",
    component: Vote,
    icon: <IconUserGroup />,
    netType: NetType.Evm,
  },
  {
    itemKey: "nfg",
    text: "NFT",
    component: Nft,
    icon: <IconCart />,
    netType: NetType.Evm,
  },
  {
    itemKey: "text",
    text: "记事本",
    component: Text,
    icon: <IconText />,
    netType: NetType.Evm,
  },
  {
    itemKey: "sui",
    text: "SUI",
    component: Sui,
    icon: <IconCart />,
    netType: NetType.Sui,
  },
];
