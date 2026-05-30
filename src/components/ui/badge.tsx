import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-border bg-card/60 text-foreground backdrop-blur-sm",
        outline: "border-border bg-transparent text-foreground",
        primary:
          "border-primary/30 bg-primary/10 text-primary",
        gradient:
          "border-transparent bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 text-foreground",
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
