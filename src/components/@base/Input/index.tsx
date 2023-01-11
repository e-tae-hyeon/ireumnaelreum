import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {};

function Input({ ...rest }: Props) {
  return (
    <input
      {...rest}
      className="p-4 border rounded-lg outline-none border-neutral-200 placeholder:text-neutral-200"
    />
  );
}

export default Input;
