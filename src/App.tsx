import { lazy, Suspense } from "react";
import Index from "./pages/Index.tsx";

const V2 = lazy(() => import("./pages/V2.tsx"));
const V3 = lazy(() => import("./pages/V3.tsx"));
const V4 = lazy(() => import("./pages/V4.tsx"));
const V5 = lazy(() => import("./pages/V5.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const App = () => {
  const path = window.location.pathname;

  if (path === "/") return <Index />;
  if (path === "/v2") return <Suspense fallback={null}><V2 /></Suspense>;
  if (path === "/v3") return <Suspense fallback={null}><V3 /></Suspense>;
  if (path === "/v4") return <Suspense fallback={null}><V4 /></Suspense>;
  if (path === "/v5") return <Suspense fallback={null}><V5 /></Suspense>;

  return (
    <Suspense fallback={null}>
      <NotFound />
    </Suspense>
  );
};

export default App;
