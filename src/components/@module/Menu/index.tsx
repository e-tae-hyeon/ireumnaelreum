import { SvgIcon } from "components/@base";
import useClickOutside from "hooks/useClickOutside";
import React, { useRef, useState } from "react";
import Nav from "../Nav";

function Menu() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onClickMenu = () => {
    setIsVisible(true);
  };

  useClickOutside(navRef, () => setIsVisible(false));

  return (
    <>
      <button type="button" onClick={onClickMenu}>
        <SvgIcon name="menu" />
      </button>
      <Nav isVisible={isVisible} ref={navRef} />
    </>
  );
}

export default Menu;
