import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { personal, socials } from "@/lib/data";
import { scrollToId } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-md flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card/70">
                <span className="bg-gradient-to-br from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-sm font-extrabold text-transparent">
                  HC
                </span>
              </span>
              <span className="text-sm font-semibold">{personal.name}</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Software Engineer building scalable systems across fintech, insurance and
              SaaS. Always open to interesting product and engineering problems.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <ul className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => scrollToId("home")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Back to top
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
