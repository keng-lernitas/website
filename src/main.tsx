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
import { optimism } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import merge from "lodash.merge";

import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export const WAGMICONFIG = getDefaultConfig({
  appName: "keng lernitas",
  projectId: "1337",
  chains: [optimism],
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
          <AppRoutes />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
