import clinet from "./@client";

export async function checkMe(accessToken?: string) {
  const res = await clinet.get<{ userId: number }>("/me", {
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });

  return res.data;
}

export async function logout() {
  const res = await clinet.delete("/auth/logout");

  return res.data;
}

export async function unregister() {
  const res = await clinet.delete("/auth");

  return res.data;
}
