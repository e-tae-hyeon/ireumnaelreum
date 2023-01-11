import { ActionsHeader, Layout } from "components/@module";
import { NicknameUpdateForm } from "components/Settings";
import React from "react";

function SettingsPage() {
  return (
    <Layout width="narrow">
      <ActionsHeader />
      <main className="flex flex-col gap-12 p-4">
        <h1 className="h1">내 정보 수정</h1>
        <NicknameUpdateForm />
      </main>
    </Layout>
  );
}

export default SettingsPage;
