import { Layout } from "components/@module";
import { WriteForm, WriteHeader } from "components/Write";
import React from "react";

function WritePage() {
  return (
    <Layout width="narrow">
      <div className="h-screen border border-neutral-200">
        <div className="border-b border-neutral-200">
          <WriteHeader />
        </div>
        <main className="flex flex-col gap-12 p-4 ">
          <WriteForm />
        </main>
      </div>
    </Layout>
  );
}

export default WritePage;
