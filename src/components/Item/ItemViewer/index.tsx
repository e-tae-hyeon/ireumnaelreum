import { useQuery } from "@tanstack/react-query";
import { getComments, getItem } from "apis/item";
import useItemId from "hooks/useItemId";
import useMe from "hooks/useMe";
import React from "react";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import ItemOwnActions from "../ItemOwnActions";

function ItemViewer() {
  const itemId = useItemId();
  const { me } = useMe();

  const { data: item } = useQuery(["item", itemId], () => getItem(itemId!), {
    enabled: !!itemId,
  });

  const { data: comments } = useQuery(
    ["comments", itemId],
    () => getComments(itemId!),
    {
      enabled: !!itemId,
      initialData: [],
    }
  );

  if (!item) return null;

  const { title, body, updatedAt, user } = item;
  const isOwnItem = item.user.id === me?.userId;

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="h2">{title}</h1>
        {isOwnItem && <ItemOwnActions />}
        <div className="flex items-center gap-1 body1">
          <span>{user.Profile.nickname}</span>
          <span>·</span>
          <span className="text-neutral-400">{updatedAt}</span>
        </div>
      </div>
      <p className="min-h-[8rem]">{body}</p>
      <CommentForm />
      <CommentList comments={comments} />
    </div>
  );
}

export default ItemViewer;
