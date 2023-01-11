import Link from "next/link";
import React from "react";
import formatDate from "utils/formatDate";

type Props = {
  id: number;
  author: string;
  title: string;
  body: string;
  date: string;
};

function ItemCard({ id, author, title, body, date }: Props) {
  return (
    <Link
      href={`/item/${id}`}
      className="flex flex-col gap-2 p-8 duration-150 border rounded-lg border-neutral-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex flex-col">
        <h3 className="body1 h-14">{title}</h3>
        <div className="truncate body2 text-neutral-400">{body}</div>
      </div>
      <div className="caption text-neutral-400">
        {author} | {formatDate(date)}
      </div>
    </Link>
  );
}

export default React.memo(ItemCard);
