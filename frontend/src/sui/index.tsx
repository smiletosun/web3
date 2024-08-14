import { Card } from "@douyinfe/semi-ui";
import { Faucet } from "./Faucet";

export function Sui() {
  return (
    <div className="container">
      <Card title="工具">{process.env.NODE_ENV === "local" && <Faucet />}</Card>
    </div>
  );
}
