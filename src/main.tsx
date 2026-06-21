import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router";
import { LangProvider } from "@/lib/i18n";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Loader } from "@/components/Loader";
import appCss from "./styles.css?url";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <Loader />
        <SiteNav />
        <main className="min-h-screen">
          <RouterProvider router={router} />
        </main>
        <SiteFooter />
      </LangProvider>
    </QueryClientProvider>
  </StrictMode>
);

// Inject styles
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = appCss;
document.head.appendChild(link);
