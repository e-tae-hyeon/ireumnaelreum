import { Header, Layout } from "components/@module";
import { ItemViewer } from "components/Item";
import React from "react";

function ItemDetailPage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col max-w-3xl gap-12 p-4 mx-auto">
        <ItemViewer />
      </main>
    </Layout>
  );
}

export default ItemDetailPage;
