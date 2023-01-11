import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Header, Layout } from "components/@module";
import { BannerSlider, RecentItemList } from "components/Home";
import { GetServerSideProps } from "next";
import React from "react";
import prefetchAuthSSR from "utils/prefetchAuthSSR";

function HomePage() {
  return (
    <div>
      <Layout>
        <Header />
      </Layout>
      <div className="pb-12">
        <BannerSlider />
      </div>
      <Layout>
        <main className="p-4">
          <RecentItemList />
        </main>
      </Layout>
    </div>
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
