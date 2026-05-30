import { useMemo } from "react";
import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

type Props = {
  count?: number;
  className?: string;
};

export function Particles({ count = 30, className }: Props) {
  const reduced = typeof window !== "undefined" && prefersReducedMotion();

  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 8 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 60,
      opacity: 0.25 + Math.random() * 0.5,
    }));
  }, [count]);

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gradient-to-br from-violet-300 to-cyan-300 dark:from-violet-400 dark:to-cyan-300"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 8px currentColor",
            color: "hsl(217 91% 60% / 0.4)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, p.drift, 0],
            opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
