import { Item } from "apis/types";
import React from "react";
import ItemCard from "../ItemCard";

type Props = {
  items: Item[];
};

function ItemList({ items }: Props) {
  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
      {items.map((I) => (
        <ItemCard
          id={I.id}
          author={I.user.Profile.nickname}
          title={I.title}
          body={I.body}
          date={I.updatedAt}
          key={I.id}
        />
      ))}
    </div>
  );
}

export default ItemList;
