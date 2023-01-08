import { AuthModal } from "components/Auth";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <div className="mx-auto max-w-5xl">{children}</div>
      <AuthModal />
    </>
  );
}

export default Layout;
