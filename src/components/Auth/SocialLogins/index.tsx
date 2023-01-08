import React from "react";
import SocialProvider from "./SocialProvider";

function SocialLogins() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <SocialProvider provider="kakao" />
    </div>
  );
}

export default SocialLogins;
