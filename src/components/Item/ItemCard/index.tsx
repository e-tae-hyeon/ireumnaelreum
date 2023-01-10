import React from "react";

type Props = {
  id: number;
  author: string;
  title: string;
  body: string;
  date: string;
};

function ItemCard({ id, author, title, body, date }: Props) {
  return (
    <div className="flex flex-col gap-2 p-8 border rounded-lg border-neutral-200">
      <div className="flex flex-col">
        <h3 className="body1 h-14">{title}</h3>
        <div className="truncate body2 text-neutral-400">{body}</div>
      </div>
      <div className="caption text-neutral-400">
        {author} | {date}
      </div>
    </div>
  );
}

export default ItemCard;
