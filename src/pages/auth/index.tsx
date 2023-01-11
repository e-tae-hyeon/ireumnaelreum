import { Layout } from "components/@module";
import { AuthForm } from "components/Auth";
import React from "react";

function AuthPage() {
  return (
    <Layout width="narrow">
      <main className="flex flex-col h-screen p-4">
        <AuthForm />
      </main>
    </Layout>
  );
}

export default AuthPage;
