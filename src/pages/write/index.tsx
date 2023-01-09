import { Layout } from "components/@module";
import { WriteForm, WriteHeader } from "components/Write";
import React from "react";

function WritePage() {
  return (
    <Layout width="narrow">
      <WriteHeader />
      <main className="flex flex-col gap-12 p-4">
        <WriteForm />
      </main>
    </Layout>
  );
}

export default WritePage;
