import {
  IconCart,
  IconMark,
  IconMoneyExchangeStroked,
  IconText,
  IconUserGroup,
} from "@douyinfe/semi-icons";

import { Text } from "./evm/text";
import { Nft } from "./nft";
import { Vote } from "./evm/vote";
import { Coins, Tools, RedPacket, Nft as NftSui } from "./sui";
import { NetType } from "./constants";

export const Menus = [
  {
    itemKey: "sui-nft",
    text: "sui nft",
    component: NftSui,
    icon: <IconMark />,
    netType: NetType.Sui,
  },
  {
    itemKey: "sui-red-packet",
    text: "sui red packet",
    component: RedPacket,
    icon: <IconMoneyExchangeStroked />,
    netType: NetType.Sui,
  },
  {
    itemKey: "sui-coin",
    text: "sui coin",
    component: Coins,
    icon: <IconMoneyExchangeStroked />,
    netType: NetType.Sui,
  },
  {
    itemKey: "sui",
    text: "sui tools",
    component: Tools,
    icon: <IconCart />,
    netType: NetType.Sui,
  },
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
];
