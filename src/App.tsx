import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { SpotlightCursor } from "@/components/effects/SpotlightCursor";
import { SkeletonCard } from "@/components/common/SkeletonCard";
import Home from "@/pages/Home";

const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-background text-foreground noise">
      <ScrollProgress />
      <SpotlightCursor />
      <Navbar />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <div className="container-px mx-auto max-w-md py-40">
                    <SkeletonCard />
                  </div>
                }
              >
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
