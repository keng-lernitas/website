import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes";

import {
  getDefaultConfig,
  darkTheme,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { optimism, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

import merge from "lodash.merge";

import "@rainbow-me/rainbowkit/styles.css";

import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export const WAGMICONFIG = getDefaultConfig({
  appName: "keng lernitas",
  projectId: "1",
  chains: [base],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

const LernitasTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#ff3a3a",
  },
} as Theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={WAGMICONFIG}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={LernitasTheme}>
          <RecoilRoot>
            <Toaster />
            <AppRoutes />

            <ReactQueryDevtools initialIsOpen={false} position="right" />
          </RecoilRoot>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
