import { removeItem } from "apis/item";
import useItemId from "hooks/useItemId";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useDialogStore from "stores/useDialogStore";

function ItemOwnActions() {
  const { replace } = useRouter();
  const itemId = useItemId();
  const { openDialog, closeDialog, setConfig } = useDialogStore();

  const onClickRemove = () => {
    setConfig({
      title: "정말 삭제하실건가요?",
      description: "삭제하면 복구할 수 없어요!",
      cancelText: "취소",
      confirmText: "삭제",
      onClose: closeDialog,
      onConfirm: async () => {
        try {
          await removeItem(itemId!);
          replace("/");
          closeDialog();
        } catch (err) {
          console.error(err);
        }
      },
    });
    openDialog();
  };

  return (
    <div className="flex items-center justify-end gap-4">
      <Link
        href={{ pathname: "/write", query: { edit: itemId } }}
        className="body2 text-neutral-400"
      >
        수정
      </Link>
      <button
        type="button"
        onClick={onClickRemove}
        className="body2 text-neutral-400"
      >
        삭제
      </button>
    </div>
  );
}

export default ItemOwnActions;
