import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" aria-label="Projects">
      <GradientBlobs variant="aurora" />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work I'm proud of"
          description="A handful of production systems and tools I've designed, built and shipped."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent>
          {active ? <ProjectDialogContent project={active} /> : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const Icon = project.icon;
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group text-left"
      aria-label={`Open details for ${project.title}`}
    >
      <Card className="gradient-border relative h-full overflow-hidden bg-card/60 p-6 backdrop-blur-xl transition-all">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-500 group-hover:opacity-70",
            project.accent,
          )}
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-500/15 blur-3xl opacity-40 transition-opacity group-hover:opacity-100"
        />

        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-card/80 text-foreground backdrop-blur-sm">
              <Icon className="h-5 w-5" />
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all group-hover:border-primary/40 group-hover:text-foreground">
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            {project.title}
          </h3>
          {project.subtitle ? (
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {project.subtitle}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge key={t} variant="default" className="text-[11px]">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Click for full details
          </div>
        </div>
      </Card>
    </motion.button>
  );
}

function ProjectDialogContent({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <>
      <DialogHeader>
        <div className="mb-2 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <DialogTitle>{project.title}</DialogTitle>
            {project.subtitle ? (
              <DialogDescription className="mt-0.5 text-xs uppercase tracking-wider">
                {project.subtitle}
              </DialogDescription>
            ) : null}
          </div>
        </div>
      </DialogHeader>

      <p className="text-sm leading-relaxed text-foreground/90">{project.longDescription}</p>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Highlights
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 rounded-xl border border-border bg-background/40 p-3 text-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
              <span className="text-foreground/85">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="primary">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {(project.link || project.repo) && (
        <div className="flex flex-wrap gap-2 pt-2">
          {project.link ? (
            <Button asChild variant="primary" size="sm">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View Live
              </a>
            </Button>
          ) : null}
          {project.repo ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Source Code
              </a>
            </Button>
          ) : null}
        </div>
      )}
    </>
  );
}
