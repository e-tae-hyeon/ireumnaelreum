import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  layout?: "fit" | "full";
  theme?: "primary" | "secondary" | "danger";
};

const themeMap = {
  primary: "bg-primary text-white",
  secondary: "bg-white text-black",
  danger: "bg-red-500 text-white",
};

function Button({ layout = "fit", theme = "primary", ...rest }: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={`${layout === "fit" ? "w-fit" : "w-full"} 
      ${themeMap[theme]}
        px-4 py-2 rounded-lg body1`}
    />
  );
}

export default Button;
