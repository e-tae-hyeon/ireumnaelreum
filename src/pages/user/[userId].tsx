import { Header, Layout } from "components/@module";
import { WrittenItemList } from "components/User";
import React from "react";

function UserPage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-12 p-4">
        <h2 className="h2">내가 작성한 글</h2>
        <WrittenItemList />
      </main>
    </Layout>
  );
}

export default UserPage;
