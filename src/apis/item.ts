import clinet from "./@client";
import { WriteItemParam } from "./types";

export async function writeItem(param: WriteItemParam) {
  const res = await clinet.post("/item", param);

  return res.data;
}
