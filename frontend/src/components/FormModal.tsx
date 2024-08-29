import { Form, Modal } from "@douyinfe/semi-ui";
import { useRef } from "react";

interface FormModalProps extends React.ComponentProps<typeof Modal> {
  onOk?: (data: any) => Promise<any>;
}

export function FormModal(props: FormModalProps) {
  const { children, onOk, ...rest } = props;
  const formRef = useRef<React.ElementRef<typeof Form>>(null);

  const handleOk = async () => {
    const val = formRef.current?.formApi.getValues();
    return onOk(val);
  };

  const modalProps = {
    ...rest,
    onOk: handleOk,
  };

  return (
    <Modal {...modalProps}>
      <Form ref={formRef}>{children}</Form>
    </Modal>
  );
}
