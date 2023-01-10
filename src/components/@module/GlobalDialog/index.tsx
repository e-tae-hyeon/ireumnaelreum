import { Dialog } from "components/@base";
import React from "react";
import useDialogStore from "stores/useDialogStore";

function GlobalDialog() {
  const { isVisible, config } = useDialogStore();

  if (!config) return null;

  return (
    <Dialog
      isVisible={isVisible}
      title={config.title}
      description={config.description}
      cancelText={config.cancelText}
      confirmText={config.confirmText}
      onClose={config.onClose}
      onConfirm={config.onConfirm}
    />
  );
}

export default GlobalDialog;
