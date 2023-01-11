import { AuthModal } from "components/Auth";
import React from "react";
import GlobalDialog from "../GlobalDialog";

type Props = {
  children: React.ReactNode;
};

function ClientProvider({ children }: Props) {
  return (
    <>
      {children}
      <GlobalDialog />
      <AuthModal />
    </>
  );
}

export default ClientProvider;
