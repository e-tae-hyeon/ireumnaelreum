import { SvgIcon } from "components/@base";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  action?: React.ReactNode;
};

function ActionsHeader({ action }: Props) {
  const { back } = useRouter();

  return (
    <header className="flex items-center justify-between p-4">
      <button type="button" onClick={back} className="p-4 m-[-1rem]">
        <SvgIcon name="chevronLeft" />
      </button>
      {action}
    </header>
  );
}

export default ActionsHeader;
