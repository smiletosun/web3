import { IconCart, IconText, IconUserGroup } from "@douyinfe/semi-icons";
import { Text } from "./text";
import { Nft } from "./nft";
import { Vote } from "./vote";

export const Menus = [
  {
    itemKey: "vote",
    text: "投票",
    component: Vote,
    icon: <IconUserGroup />,
  },
  {
    itemKey: "nfg",
    text: "NFT",
    component: Nft,
    icon: <IconCart />,
  },
  {
    itemKey: "text",
    text: "记事本",
    component: Text,
    icon: <IconText />,
  },
];
