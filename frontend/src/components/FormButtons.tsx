import { Button } from "@douyinfe/semi-ui";

export function FormButtons() {
  return (
    <>
      <Button type="primary" htmlType="reset" className="mr-2">
        重置
      </Button>

      <Button theme="solid" type="primary" htmlType="submit">
        确认
      </Button>
    </>
  );
}
