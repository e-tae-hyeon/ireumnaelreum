import React from "react";
import Button from "../Button";
import Modal from "../Modal";

export type DialogType = {
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm: () => void;
};

type Props = DialogType & {
  isVisible: boolean;
};

function Dialog({
  isVisible,
  title,
  description,
  cancelText,
  confirmText,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal isVisible={isVisible} onBackDrop={onClose}>
      <div className="flex flex-col gap-4 w-80">
        <h3 className="h3">{title}</h3>
        <div className="body1 text-neutral-400">{description}</div>
        <div className="flex items-center justify-end gap-2">
          <Button theme="secondary" onClick={onClose}>
            {cancelText ?? "취소"}
          </Button>
          <Button onClick={onConfirm}>{confirmText ?? "확인"}</Button>
        </div>
      </div>
    </Modal>
  );
}

export default Dialog;
