import Link from "next/link";
import React from "react";

type Props = {
  isVisible: boolean;
};

const Nav = React.forwardRef<HTMLDivElement, Props>(({ isVisible }, ref) => {
  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      className="absolute z-10 flex flex-col p-4 bg-white border rounded-lg right-5 top-14 border-neutral-200"
    >
      <Link href="/write" className="p-1">
        작명 요청하기
      </Link>
      <Link href="/settings" className="p-1">
        설정
      </Link>
      <div className="p-1">서비스 소개</div>
      <div className="p-1">로그아웃</div>
    </div>
  );
});

export default Nav;
