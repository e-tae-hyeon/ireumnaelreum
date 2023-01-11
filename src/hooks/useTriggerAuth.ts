import { useRouter } from "next/router";
import useDialogStore from "stores/useDialogStore";

function useTriggerAuth() {
  const { push } = useRouter();
  const { openDialog, closeDialog, setConfig } = useDialogStore();

  return (back?: string) => {
    setConfig({
      title: "로그인 후 이용해주세요!",
      description: "이름낼름은 당신이 필요해요!",
      cancelText: "닫기",
      confirmText: "로그인",
      onClose: closeDialog,
      onConfirm: () => {
        closeDialog();
        push(`/auth?back=${back}`);
      },
    });
    openDialog();
  };
}

export default useTriggerAuth;
