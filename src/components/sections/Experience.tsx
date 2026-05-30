import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" aria-label="Experience">
      <GradientBlobs variant="soft" />
      <div className="container-px relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title="A journey of building production systems"
          description="Companies and roles where I've shipped impact, mentored teams and grown as an engineer."
        />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/40 via-blue-400/40 to-cyan-300/30 md:left-1/2"
          />

          <ul className="space-y-12">
            {experiences.map((exp, i) => {
              const isRight = i % 2 === 0;
              return (
                <li key={`${exp.company}-${i}`} className="relative">
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-4 top-3 z-10 grid h-3 w-3 -translate-x-[5px] place-items-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-300 ring-4 ring-background md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <span className="absolute inset-0 animate-ping rounded-full bg-violet-400/40" />
                  </motion.span>

                  <div
                    className={`grid grid-cols-1 gap-6 pl-12 md:grid-cols-2 md:pl-0 ${
                      isRight ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                      className={`md:px-8 ${isRight ? "md:text-right" : "md:text-left"}`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm ${
                          isRight ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.duration}
                      </div>
                      <h3 className="mt-3 text-xl font-bold tracking-tight">
                        {exp.position}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-gradient">
                        <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                        {exp.company}
                      </p>
                      {exp.location ? (
                        <p
                          className={`mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground ${
                            isRight ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </p>
                      ) : null}
                      <p
                        className={`mt-3 text-sm text-muted-foreground md:max-w-md ${
                          isRight ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                        }`}
                      >
                        {exp.description}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6 }}
                      className="md:px-8"
                    >
                      <Card className="gradient-border relative overflow-hidden bg-card/60 p-6 backdrop-blur-xl">
                        <div className="mb-4 flex items-center gap-2">
                          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                            <Briefcase className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold">Responsibilities</span>
                        </div>
                        <ul className="space-y-2.5">
                          {exp.responsibilities.map((r, ri) => (
                            <motion.li
                              key={r}
                              initial={{ opacity: 0, x: -6 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: ri * 0.04 }}
                              className="flex items-start gap-2 text-sm text-foreground/85"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                              <span>{r}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <Badge key={t} variant="default" className="text-[11px]">
                              {t}
                            </Badge>
                          ))}
                        </div>

                        <div
                          className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl"
                          aria-hidden="true"
                        />
                      </Card>
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
