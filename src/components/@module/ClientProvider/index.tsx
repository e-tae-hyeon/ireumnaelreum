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
    </>
  );
}

export default ClientProvider;
