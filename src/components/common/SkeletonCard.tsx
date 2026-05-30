import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function SkeletonCard({ className }: Props) {
  return (
    <div
      className={cn(
        "shimmer relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-6",
        className,
      )}
      aria-hidden="true"
    >
      <div className="mb-4 h-10 w-10 rounded-xl bg-muted/60" />
      <div className="mb-2 h-4 w-3/4 rounded bg-muted/60" />
      <div className="mb-2 h-3 w-1/2 rounded bg-muted/40" />
      <div className="mt-6 space-y-2">
        <div className="h-2 w-full rounded bg-muted/40" />
        <div className="h-2 w-5/6 rounded bg-muted/40" />
        <div className="h-2 w-2/3 rounded bg-muted/40" />
      </div>
    </div>
  );
}
