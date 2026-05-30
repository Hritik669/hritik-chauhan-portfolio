import { motion } from "framer-motion";
import { Coffee, Code2 } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CountUp } from "@/components/common/CountUp";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutSpecialties, personal, stats } from "@/lib/data";

export function About() {
  return (
    <Section id="about" aria-label="About">
      <GradientBlobs variant="soft" />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineer building scalable systems"
          description="A snapshot of who I am, what I build, and the impact I've delivered across production environments."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="gradient-border relative overflow-hidden bg-card/60 p-8 backdrop-blur-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                <Code2 className="h-3.5 w-3.5" />
                Software Engineer · {personal.location}
              </div>
              <p className="text-balance text-lg leading-relaxed text-foreground/90">
                {personal.longBio}
              </p>
              <p className="mt-4 text-balance text-base leading-relaxed text-muted-foreground">
                I specialize in designing distributed, event-driven backends and
                full-stack experiences that scale gracefully. From real-time payment
                pipelines to enterprise insurance migrations, I focus on systems that
                are reliable, observable and easy to evolve.
              </p>

              <div className="mt-7">
                <p className="mb-3 text-sm font-medium text-foreground/80">
                  I specialize in
                </p>
                <div className="flex flex-wrap gap-2">
                  {aboutSpecialties.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                    >
                      <Badge variant="default" className="border-border/80">
                        {s}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl"
                aria-hidden="true"
              />
            </Card>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <InfoTile label="Experience" value="3+ Years" />
              <InfoTile label="Current Role" value="Software Eng." />
              <InfoTile label="Coffee Powered" value="∞" icon={Coffee} />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className={
                    i === stats.length - 1 && stats.length % 2 === 1
                      ? "col-span-2 sm:col-span-2"
                      : ""
                  }
                >
                  <Card className="group gradient-border relative h-full overflow-hidden bg-card/60 p-5 backdrop-blur-xl transition-colors hover:bg-card/80">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-foreground/90">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Stat
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <CountUp
                        to={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                        className="text-3xl font-bold tracking-tight sm:text-4xl text-gradient"
                      />
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-foreground/90">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                    <div
                      className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoTile({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        {Icon ? <Icon className="h-3.5 w-3.5 text-muted-foreground" /> : null}
      </div>
      <p className="mt-1 text-base font-semibold">{value}</p>
    </div>
  );
}
