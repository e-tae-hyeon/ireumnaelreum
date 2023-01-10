import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "common/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ClientProvider } from "components/@module";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <ClientProvider>
          <Component {...pageProps} />
        </ClientProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
