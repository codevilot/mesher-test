import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { Modal } from "./components/Modal";
import { Swap } from "./components/Swap";
export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Swap />
        <Modal />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
