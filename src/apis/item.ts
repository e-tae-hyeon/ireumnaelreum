import clinet from "./@client";
import { GetItemsResult, WriteItemParam } from "./types";

export async function writeItem(param: WriteItemParam) {
  const res = await clinet.post("/item", param);

  return res.data;
}

export async function getItems(cursor?: number) {
  const res = await clinet.get<GetItemsResult>("/item", { params: { cursor } });
  return res.data;
}
