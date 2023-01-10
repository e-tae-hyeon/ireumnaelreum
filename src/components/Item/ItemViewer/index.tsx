import { useQuery } from "@tanstack/react-query";
import { getItem } from "apis/item";
import useMe from "hooks/useMe";
import { useRouter } from "next/router";
import React from "react";
import ItemOwnActions from "../ItemOwnActions";

function ItemViewer() {
  const { id } = useRouter().query;
  const { me } = useMe();

  const { data: item } = useQuery(
    ["item"],
    () => getItem(parseInt(id as string, 10)),
    {
      enabled: !!id,
    }
  );

  if (!item) return null;

  const { title, body, updatedAt, user } = item;

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="h2">{title}</h1>
        {item.user.id === me?.userId && <ItemOwnActions />}
        <div className="flex items-center gap-1 body1">
          <span>{user.Profile.nickname}</span>
          <span>·</span>
          <span className="text-neutral-400">{updatedAt}</span>
        </div>
      </div>
      <p>{body}</p>
    </div>
  );
}

export default ItemViewer;
