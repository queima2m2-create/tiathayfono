import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";

const V2 = lazy(() => import("./pages/V2.tsx"));
const V3 = lazy(() => import("./pages/V3.tsx"));
const V4 = lazy(() => import("./pages/V4.tsx"));
const V5 = lazy(() => import("./pages/V5.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v2" element={<Suspense fallback={null}><V2 /></Suspense>} />
          <Route path="/v3" element={<Suspense fallback={null}><V3 /></Suspense>} />
          <Route path="/v4" element={<Suspense fallback={null}><V4 /></Suspense>} />
          <Route path="/v5" element={<Suspense fallback={null}><V5 /></Suspense>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
