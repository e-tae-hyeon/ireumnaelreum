import React from "react";

type Props = {
  title: string;
  description: string;
};

function BannerItem({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 text-white lg:p-12 bg-primary">
      <h1 className="h1 font-primary !font-medium">{title}</h1>
      <div className="h3">{description}</div>
    </div>
  );
}

export default BannerItem;
