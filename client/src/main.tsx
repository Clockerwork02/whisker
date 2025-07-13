import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrivyProvider } from '@privy-io/react-auth';
import { Toaster } from "@/components/ui/toaster";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const PRIVY_APP_ID = import.meta.env.VITE_PRIVY_APP_ID || 'cmd09prlq01v8l50luhxjcxil';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivyProvider
      appId={PRIVY_APP_ID}
      config={{
        loginMethods: ['wallet'],
        appearance: {
          theme: 'dark',
          accentColor: '#00D4AA',
          logo: undefined,
          showWalletLoginFirst: true,
        },
        embeddedWallets: {
          createOnLogin: 'off',
        },
        defaultChain: {
          id: 999,
          name: 'HyperEVM',
          network: 'hyperevm',
          nativeCurrency: { name: 'HYPE', symbol: 'HYPE', decimals: 18 },
          rpcUrls: { default: { http: ['https://rpc.hyperliquid.xyz/evm'] } },
          blockExplorers: { default: { name: 'HyperEVM Explorer', url: 'https://explorer.hyperliquid.xyz' } },
        },
        _render: {
          inDialog: false,
        }
      }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
      </QueryClientProvider>
    </PrivyProvider>
  </StrictMode>
);
