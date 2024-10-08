import '@/styles/globals.css';

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import AppWrapper from '@/components/basic/AppWrapper';

interface ParamsT {
  method?: 'get' | 'post';
  [key: string]: unknown;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            queryFn: async ({ queryKey }) => {
              const [url, { method = 'get', ...params }] = queryKey as [
                string,
                ParamsT,
              ];

              let response;

              if (method.toLowerCase() === 'post') {
                response = await axios.post(url, params ?? {});
              } else {
                response = await axios.get(url, {
                  params,
                });
              }
              return response.data;
            },
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
