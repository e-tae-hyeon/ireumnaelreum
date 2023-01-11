import useLogout from "hooks/useLogout";
import useMe from "hooks/useMe";
import Link from "next/link";
import React from "react";

type Props = {
  isVisible: boolean;
};

const Nav = React.forwardRef<HTMLDivElement, Props>(({ isVisible }, ref) => {
  const { me } = useMe();
  const logout = useLogout();

  if (!isVisible) return null;

  return (
    <div
      ref={ref}
      className="absolute z-10 flex flex-col p-4 bg-white border rounded-lg right-5 top-14 border-neutral-200"
    >
      <Link href="/write" className="p-1">
        작명 요청하기
      </Link>
      <Link href={`/user/${me?.userId}`} className="p-1">
        내가 작성한 글
      </Link>
      <Link href="/settings" className="p-1">
        설정
      </Link>
      <div className="p-1">서비스 소개</div>
      <button type="button" onClick={logout} className="flex p-1">
        로그아웃
      </button>
    </div>
  );
});

export default Nav;
