import { unregister } from "apis/auth";
import { Button } from "components/@base";
import React from "react";
import useDialogStore from "stores/useDialogStore";

function UnregisterAction() {
  const { openDialog, closeDialog, setConfig } = useDialogStore();

  const onClick = () => {
    setConfig({
      title: "정말로 탈퇴하실건가요?",
      description: "당신의 능력이 필요해요!",
      cancelText: "취소",
      confirmText: "탈퇴",
      onClose: closeDialog,
      onConfirm: async () => {
        try {
          await unregister();
        } catch (err) {
          console.error(err);
        }
        window.location.href = "/";
      },
    });
    openDialog();
  };

  return (
    <div>
      <Button theme="danger" onClick={onClick}>
        회원탈퇴
      </Button>
    </div>
  );
}

export default UnregisterAction;
