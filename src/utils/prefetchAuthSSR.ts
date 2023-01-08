import { QueryClient } from "@tanstack/react-query";
import { checkMe } from "apis/auth";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";

export default async function prefetchAuthSSR(
  ctx: GetServerSidePropsContext,
  queryClient: QueryClient
) {
  const cookies = nookies.get(ctx);
  const accessToken = cookies.access_token;

  await queryClient.prefetchQuery(["me"], () => checkMe(accessToken));
}
