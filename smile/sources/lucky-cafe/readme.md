## Lucky Cafe

## 实体定义

- 咖啡店（Cafe）
- 咖啡卡（Card）
- 咖啡（Coffee）
- 店主（Owner、Admin）
- 顾客

## 实体关系

- 任何用户都可以创建咖啡店（Cafe），成为店主（Owner、Admin）
- 顾客可以购买咖啡卡（Card）
- 咖啡卡（Card）可以1:1兑换咖啡（Coffee）

## 特点
- 每5 GAS可购买一张咖啡卡
- 一张咖啡卡可以兑换一杯咖啡，兑换咖啡后，这张咖啡卡失效
- 【TODO】每张咖啡卡都拥有一个唯一的幸运数字（Lucky Number），任何人都可以触发合约接口随 机抽取一个幸运数字。
