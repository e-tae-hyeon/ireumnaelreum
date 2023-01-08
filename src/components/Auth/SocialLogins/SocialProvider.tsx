import { SvgIcon } from "components/@base";
import React from "react";

export type Provider = "kakao";

type Props = {
  provider: Provider;
};

const providerMap = {
  kakao: {
    to: "/",
    icon: "kakao" as const,
    description: "카카오로 시작하기",
    bgColor: "#FEE500",
    accentColor: "#000",
  },
};

function SocialProvider({ provider }: Props) {
  const { to, icon, description, bgColor, accentColor } = providerMap[provider];

  return (
    <a
      href={to}
      className="flex justify-center items-center gap-2 rounded-lg py-4 px-8 w-full"
      style={{ backgroundColor: bgColor }}
    >
      <SvgIcon name={icon} color={accentColor} />
      <div className="body1" style={{ color: accentColor }}>
        {description}
      </div>
    </a>
  );
}

export default SocialProvider;
