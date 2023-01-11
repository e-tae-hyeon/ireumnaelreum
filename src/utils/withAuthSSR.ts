import { QueryClient } from "@tanstack/react-query";
import { checkMe, refresh } from "apis/auth";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export default async function withAuthSSR(
  ctx: GetServerSidePropsContext,
  queryClient: QueryClient
) {
  const cookies = nookies.get(ctx);
  const accessToken = cookies.access_token;
  let me = null;

  try {
    me = await checkMe(accessToken);
  } catch (err) {
    try {
      const refreshToken = cookies.refresh_token;

      const tokens = await refresh(refreshToken);

      nookies.set(ctx, "access_token", tokens.accessToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 3,
        path: "/",
      });
      nookies.set(ctx, "refresh_token", tokens.refreshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/",
      });

      me = await checkMe(tokens.accessToken);
    } catch (e) {
      console.log(e);
    }
  }
  queryClient.setQueryData(["me"], me);

  return ctx;
}
