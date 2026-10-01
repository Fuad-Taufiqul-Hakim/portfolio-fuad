import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/RootLayout";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: NotFoundPage,
    children: [
      { index: true, Component: HomePage },
      // Code-split: certificate images/data only load when this page is visited.
      {
        path: "certificates",
        lazy: async () => ({ Component: (await import("@/pages/CertificatesPage")).default }),
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
