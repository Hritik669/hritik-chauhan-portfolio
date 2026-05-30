type Props = {
  variant?: "hero" | "soft" | "aurora";
  className?: string;
};

export function GradientBlobs({ variant = "soft", className }: Props) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      >
        <div className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-violet-500/20 blur-3xl animate-blob-1" />
        <div className="absolute top-10 right-10 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl animate-blob-2" />
        <div className="absolute -bottom-24 left-10 h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-3xl animate-blob-1 [animation-delay:2s]" />
      </div>
    );
  }

  if (variant === "aurora") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      >
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/10 via-violet-500/15 to-cyan-500/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <div className="absolute -top-24 left-1/3 h-[360px] w-[360px] rounded-full bg-violet-500/10 blur-3xl animate-blob-1" />
      <div className="absolute top-1/2 right-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-3xl animate-blob-2" />
    </div>
  );
}
