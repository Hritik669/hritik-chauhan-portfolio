import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlobs } from "@/components/effects/GradientBlobs";

export default function NotFound() {
  return (
    <main className="relative grid min-h-[100vh] place-items-center overflow-hidden">
      <GradientBlobs variant="hero" />
      <div className="container-px relative z-10 mx-auto max-w-xl text-center">
        <p className="bg-gradient-to-br from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-7xl font-extrabold tracking-tighter text-transparent sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild variant="primary">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4" />
            Go back
          </Button>
        </div>
      </div>
    </main>
  );
}
