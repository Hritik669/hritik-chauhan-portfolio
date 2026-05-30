import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { achievements } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Achievements() {
  return (
    <Section id="achievements" aria-label="Achievements">
      <GradientBlobs variant="soft" />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognised for impact and craft"
          description="A few moments where my work and growth were recognised by teams and peers."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -6, rotate: -0.4 }}
              >
                <Card className="group gradient-border relative h-full overflow-hidden bg-card/60 p-6 backdrop-blur-xl">
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-500 group-hover:opacity-70",
                      a.accent,
                    )}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="mb-5 inline-flex">
                      <motion.span
                        whileHover={{ rotate: 8, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 220 }}
                        className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/20 via-orange-400/15 to-rose-400/20 backdrop-blur-sm"
                      >
                        <Icon className="h-7 w-7 text-amber-300" />
                      </motion.span>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
                  </div>

                  <div
                    className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl"
                    aria-hidden="true"
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
