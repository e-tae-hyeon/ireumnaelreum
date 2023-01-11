import React from "react";

type Props = {
  width?: "wide" | "narrow";
  children: React.ReactNode;
};

function Layout({ width = "wide", children }: Props) {
  return (
    <div className={`${width === "wide" ? "max-w-5xl" : "max-w-3xl"} mx-auto`}>
      {children}
    </div>
  );
}

export default Layout;
