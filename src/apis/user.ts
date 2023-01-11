import clinet from "./@client";

export async function updateProfile(nickname: string) {
  const res = await clinet.put("/me/profile", { nickname });

  return res.data;
}
