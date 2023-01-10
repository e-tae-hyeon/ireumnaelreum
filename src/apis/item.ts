import clinet from "./@client";
import {
  Comment,
  GetItemsResult,
  Item,
  WriteCommentParam,
  WriteItemParam,
} from "./types";

export async function writeItem(param: WriteItemParam) {
  const res = await clinet.post("/item", param);

  return res.data;
}

export async function getItems(cursor?: number) {
  const res = await clinet.get<GetItemsResult>("/item", { params: { cursor } });

  return res.data;
}

export async function getItem(id: number) {
  const res = await clinet.get<Item>(`/item/${id}`);

  return res.data;
}

export async function writeComment({ itemId, text }: WriteCommentParam) {
  const res = await clinet.post(`/item/${itemId}/comment`, { text });

  return res.data;
}

export async function getComments(itemId: number) {
  const res = await clinet.get<Comment[]>(`/item/${itemId}/comment`);

  return res.data;
}

export async function likeComment({
  itemId,
  commentId,
}: {
  itemId: number;
  commentId: number;
}) {
  const res = await clinet.post(`/item/${itemId}/comment/${commentId}/like`);

  return res.data;
}
