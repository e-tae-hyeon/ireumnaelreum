import { RefObject, useEffect } from "react";

function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (e: Event) => void
) {
  useEffect(() => {
    const listener = (e: Event) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
}

export default useClickOutside;
