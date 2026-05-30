import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { SkeletonCard } from "@/components/common/SkeletonCard";

const About = lazy(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Achievements = lazy(() =>
  import("@/components/sections/Achievements").then((m) => ({ default: m.Achievements })),
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);

function SectionFallback({ rows = 3 }: { rows?: number }) {
  return (
    <section className="container-px mx-auto max-w-6xl py-24" aria-busy="true">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: rows }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback rows={2} />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Achievements />
      </Suspense>
      <Suspense fallback={<SectionFallback rows={2} />}>
        <Contact />
      </Suspense>
    </>
  );
}
