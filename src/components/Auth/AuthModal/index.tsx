import { Modal, SvgIcon } from "components/@base";
import Link from "next/link";
import React from "react";
import useAuthStore from "stores/useAuthStore";
import SocialLogins from "../SocialLogins";

function AuthModal() {
  const { isVisible, close } = useAuthStore();

  return (
    <Modal isVisible={isVisible} onBackDrop={close}>
      <div className="flex flex-col w-screen h-screen p-8 lg:max-w-2xl lg:max-h-96 lg:p-0">
        <div className="flex items-center justify-end">
          <button type="button" onClick={close}>
            <SvgIcon name="xClose" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-12">
          <div className="flex flex-col gap-2 text-center">
            <Link
              href="/"
              className="h1 font-primary !font-medium text-primary"
            >
              이름낼름
            </Link>
            <div className="body1">집단지성 작명 플랫폼</div>
          </div>
          <SocialLogins />
        </div>
      </div>
    </Modal>
  );
}

export default AuthModal;
