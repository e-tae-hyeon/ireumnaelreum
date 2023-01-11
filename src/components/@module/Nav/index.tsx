import { ABOUT_SERVICE_NOTION } from "common/constants/string";
import useLogout from "hooks/useLogout";
import useMe from "hooks/useMe";
import Link from "next/link";
import React from "react";

type Props = {
  isVisible: boolean;
};

function Nav({ isVisible }: Props) {
  const { me } = useMe();
  const logout = useLogout();

  if (!isVisible) return null;

  return (
    <div className="absolute right-0 z-10 flex flex-col bg-white border rounded-lg w-52 border-neutral-200 top-10">
      <Link href="/write" className="p-4 hover:bg-neutral-200 lg:hidden">
        작명 요청하기
      </Link>
      <Link href={`/user/${me?.userId}`} className="p-4 hover:bg-neutral-200">
        내가 작성한 글
      </Link>
      <a href={ABOUT_SERVICE_NOTION} className="p-4 hover:bg-neutral-200">
        서비스 소개 및 문의
      </a>
      <Link href="/settings" className="p-4 hover:bg-neutral-200">
        설정
      </Link>
      <button
        type="button"
        onClick={logout}
        className="flex p-4 hover:bg-neutral-200"
      >
        로그아웃
      </button>
    </div>
  );
}

export default Nav;
