import clinet from "./@client";

export async function checkMe(accessToken?: string) {
  const res = await clinet.get<{ userId: number }>("/me", {
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });

  return res.data;
}
