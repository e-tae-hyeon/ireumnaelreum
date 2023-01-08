import { KAKAO_REDIRECT_URI } from "common/constants/string";
import { SvgIcon } from "components/@base";
import React from "react";

export type Provider = "kakao";

type Props = {
  provider: Provider;
};

const providerMap = {
  kakao: {
    to: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`,
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
      className="flex items-center justify-center w-full gap-2 px-8 py-4 rounded-lg"
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
