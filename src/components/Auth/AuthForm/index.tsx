import Link from "next/link";
import React from "react";
import SocialLogins from "../SocialLogins";

function AuthForm() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-12 p-8">
      <div className="flex flex-col gap-2 text-center">
        <Link href="/" className="h1 font-primary !font-medium text-primary">
          이름낼름
        </Link>
        <div className="body1">집단지성 작명 플랫폼</div>
      </div>
      <SocialLogins />
    </div>
  );
}

export default AuthForm;
