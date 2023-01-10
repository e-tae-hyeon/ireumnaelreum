import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  layout?: "fit" | "full";
  theme?: "primary" | "secondary";
};

function Button({ layout = "fit", theme = "primary", ...rest }: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={`${layout === "fit" ? "w-fit" : "w-full"} 
      ${theme === "primary" ? "bg-primary text-white" : "bg-white text-black"}
        px-4 py-2  rounded-lg body1`}
    />
  );
}

export default Button;
