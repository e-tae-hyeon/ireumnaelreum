import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Header, Layout } from "components/@module";
import { BannerSlider } from "components/Home";
import { GetServerSideProps } from "next";
import React from "react";
import prefetchAuthSSR from "utils/prefetchAuthSSR";

function HomePage() {
  return (
    <Layout>
      <Header />
      <BannerSlider />
    </Layout>
  );
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClinet = new QueryClient();
  await prefetchAuthSSR(ctx, queryClinet);

  return {
    props: {
      dehydratedState: dehydrate(queryClinet),
    },
  };
};
