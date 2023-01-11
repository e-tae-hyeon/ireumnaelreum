import { Button, Logotypo } from "components/@base";
import useMe from "hooks/useMe";
import Link from "next/link";

import React from "react";
import Menu from "../Menu";

function Header() {
  const { me } = useMe();

  return (
    <header className="flex items-center justify-between p-4">
      <Logotypo />
      {me ? (
        <div className="flex items-center gap-4">
          <Link href="/write" className="hidden lg:block">
            <Button>작명 요청하기</Button>
          </Link>
          <Menu />
        </div>
      ) : (
        <Link href={{ query: { mode: "auth" } }} className="body1">
          로그인
        </Link>
      )}
    </header>
  );
}

export default Header;
