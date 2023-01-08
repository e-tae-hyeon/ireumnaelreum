import { Logotypo } from "components/@base";
import Link from "next/link";

import React from "react";

function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <Logotypo />
      <Link href={{ query: { mode: "auth" } }} className="body1">
        로그인
      </Link>
    </header>
  );
}

export default Header;
