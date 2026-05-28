import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import { firePageViewWithDedup } from "@/lib/pageView";

const V2 = lazy(() => import("./pages/V2.tsx"));
const V3 = lazy(() => import("./pages/V3.tsx"));
const V4 = lazy(() => import("./pages/V4.tsx"));
const V5 = lazy(() => import("./pages/V5.tsx"));
const V6 = lazy(() => import("./pages/V6.tsx"));
const V6Es = lazy(() => import("./pages/V6Es.tsx"));
const V7 = lazy(() => import("./pages/V7.tsx"));
const V5Espana = lazy(() => import("./pages/V5Espana.tsx"));
const DownsellEs = lazy(() => import("./pages/DownsellEs.tsx"));
const Quiz = lazy(() => import("./pages/Quiz.tsx"));
const QuizResultado = lazy(() => import("./pages/QuizResultado.tsx"));
const QuizLatam = lazy(() => import("./pages/QuizLatam.tsx"));
const QuizLatamResultado = lazy(() => import("./pages/QuizLatamResultado.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const PageViewTracker = () => {
  const location = useLocation();
  useEffect(() => {
    firePageViewWithDedup();
  }, [location.pathname]);
  return null;
};

const App = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get("fbclid");
    if (fbclid) {
      localStorage.setItem("_fbclid", fbclid);
      localStorage.setItem("_fbclid_ts", Date.now().toString());
    }
  }, []);

  return (
    <BrowserRouter>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/v2" element={<Suspense fallback={null}><V2 /></Suspense>} />
        <Route path="/v3" element={<Suspense fallback={null}><V3 /></Suspense>} />
        <Route path="/v4" element={<Suspense fallback={null}><V4 /></Suspense>} />
        <Route path="/v5" element={<Suspense fallback={null}><V5 /></Suspense>} />
        <Route path="/downsell" element={<Suspense fallback={null}><V6 /></Suspense>} />
        <Route path="/v6" element={<Suspense fallback={null}><V6Es /></Suspense>} />
        <Route path="/v7" element={<Suspense fallback={null}><V7 /></Suspense>} />
        <Route path="/es-espana" element={<Suspense fallback={null}><V5Espana /></Suspense>} />
        <Route path="/downsell-es" element={<Suspense fallback={null}><DownsellEs /></Suspense>} />
        <Route path="/quiz" element={<Suspense fallback={null}><Quiz /></Suspense>} />
        <Route path="/quiz/resultado" element={<Suspense fallback={null}><QuizResultado /></Suspense>} />
        <Route path="/quiz-latam" element={<Suspense fallback={null}><QuizLatam /></Suspense>} />
        <Route path="/quiz-latam/resultado" element={<Suspense fallback={null}><QuizLatamResultado /></Suspense>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
