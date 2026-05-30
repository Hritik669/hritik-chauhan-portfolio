import { motion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { skillGroups, type SkillGroup } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" aria-label="Skills">
      <GradientBlobs variant="soft" />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit for production engineering"
          description="Languages, frameworks and platforms I've shipped with at scale — grouped by domain."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = group.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="group gradient-border relative h-full overflow-hidden bg-card/60 p-6 backdrop-blur-xl transition-all">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            group.accent,
          )}
          aria-hidden="true"
        />

        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 via-blue-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold leading-tight">{group.title}</h3>
              <p className="text-xs text-muted-foreground">{group.description}</p>
            </div>
          </div>

          <ul className="space-y-3">
            {group.skills.map((skill, i) => (
              <li key={skill.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground/90">{skill.name}</span>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + i * 0.05,
                    }}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 shadow-[0_0_12px_hsl(217_91%_60%/0.45)]"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}
