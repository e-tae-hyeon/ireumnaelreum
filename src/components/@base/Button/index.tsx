import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  layout?: "fit" | "full";
};

function Button({ layout = "fit", ...rest }: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={`${
        layout === "fit" ? "w-fit" : "w-full"
      } px-4 py-2 text-white rounded-lg bg-primary body1`}
    />
  );
}

export default Button;
