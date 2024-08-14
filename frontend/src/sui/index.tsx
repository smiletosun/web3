import { Card } from "@douyinfe/semi-ui";
import { Faucet } from "./Faucet";
import { Counter } from "./Counter";

export function Sui() {
  return (
    <div className="container flex flex-col gap-4">
      <Card title="工具">{process.env.NODE_ENV === "local" && <Faucet />}</Card>
      <Card title="Counter">
        <div className="flex flex-col gap-4 divide-y-2 divide-dashed divide-rose-300">
          <Counter />
        </div>
      </Card>
    </div>
  );
}
