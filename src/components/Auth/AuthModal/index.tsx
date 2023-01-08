import { Modal } from "components/@base";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SocialLogins from "../SocialLogins";

function AuthModal() {
  const { query, back } = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (query.mode === "auth") setIsVisible(true);
    else setIsVisible(false);
  }, [query]);

  return (
    <Modal isVisible={isVisible} onBackDrop={back}>
      <div className="w-screen h-screen lg:max-w-xl lg:max-h-96 flex">
        <div className="flex justify-center items-center flex-col flex-1 gap-4 p-8">
          <div className="text-center">
            <h1 className="h1 font-primary !font-medium text-primary">
              이름낼름
            </h1>
            <div className="body1">모두의 작명 플랫폼</div>
          </div>
          <SocialLogins />
        </div>
      </div>
    </Modal>
  );
}

export default AuthModal;
