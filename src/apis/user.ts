import clinet from "./@client";
import { Item } from "./types";

export async function updateProfile(nickname: string) {
  const res = await clinet.put("/me/profile", { nickname });

  return res.data;
}

export async function getMyItems() {
  const res = await clinet.get<Item[]>("/me/item");

  return res.data;
}
