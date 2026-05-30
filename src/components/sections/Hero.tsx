import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { Particles } from "@/components/effects/Particles";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { personal, titles } from "@/lib/data";
import { scrollToId } from "@/lib/utils";

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    } else {
      const nextLen = deleting ? text.length - 1 : text.length + 1;
      timeout = window.setTimeout(
        () => setText(current.slice(0, nextLen)),
        deleting ? speed / 2 : speed,
      );
    }
    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(titles);

  const socialLinks = useMemo(
    () => [
      {
        label: "LinkedIn",
        href: personal.linkedin,
        icon: Linkedin,
      },
      {
        label: "GitHub",
        href: personal.github,
        icon: Github,
      },
      {
        label: "Email",
        href: `mailto:${personal.email}`,
        icon: Mail,
      },
    ],
    [],
  );

  return (
    <Section id="home" className="pt-32 pb-20 sm:pt-36 md:pt-44" aria-label="Hero">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <GradientBlobs variant="hero" />
      <Particles count={40} />

      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="gradient" className="gap-2">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                <span className="text-xs">Available for new opportunities</span>
                <span className="ml-1 inline-flex items-center gap-1.5">
                  <span className="relative grid place-items-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                </span>
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex h-9 items-center text-xl font-medium text-muted-foreground sm:text-2xl"
            >
              <span className="mr-2">I'm a</span>
              <span className="text-gradient">
                {typed}
                <span className="caret-blink ml-0.5 inline-block h-6 w-[2px] translate-y-1 bg-gradient-to-b from-violet-400 to-cyan-300 align-middle" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
            >
              {personal.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4" />
              <span>Based in {personal.location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="primary" size="lg">
                <a href={personal.resumePath} download="Hritik-Chauhan-Resume.pdf">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToId("contact")}
              >
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollToId("projects")}
                className="border border-transparent hover:border-border"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 pt-2"
            >
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <motion.a
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className="group grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </motion.a>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <ProfileAvatar />
        </div>

        <ScrollIndicator />
      </div>
    </Section>
  );
}

function ProfileAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex w-full max-w-[360px] items-center justify-center md:max-w-[420px]"
    >
      <div className="relative aspect-square w-full">
        <div
          className="absolute -inset-6 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(263 80% 70% / 0.45), hsl(217 91% 60% / 0.35), hsl(190 90% 60% / 0.45), hsl(263 80% 70% / 0.45))",
          }}
          aria-hidden="true"
        />

        <motion.div
          aria-hidden="true"
          className="absolute -inset-3 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(263 80% 70%), hsl(217 91% 60%), hsl(190 90% 60%), hsl(263 80% 70%))",
            filter: "blur(8px)",
            opacity: 0.7,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 rounded-full bg-background p-[3px]">
          <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-violet-950 via-slate-900 to-cyan-950">
            <img
              src={personal.avatarPath}
              alt={`${personal.name} avatar`}
              width={420}
              height={420}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 mix-blend-overlay opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 20%, hsl(263 80% 70% / 0.4), transparent 60%)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>

        <FloatingChip
          className="absolute -left-4 top-10 sm:-left-6"
          delay={0.8}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Node.js
        </FloatingChip>
        <FloatingChip
          className="absolute -right-2 top-24 sm:right-0"
          delay={1}
        >
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          TypeScript
        </FloatingChip>
        <FloatingChip
          className="absolute -left-2 bottom-16 sm:-left-4"
          delay={1.2}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          AWS
        </FloatingChip>
        <FloatingChip
          className="absolute -right-4 bottom-6 sm:-right-6"
          delay={1.4}
        >
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          Kafka
        </FloatingChip>
      </div>
    </motion.div>
  );
}

function FloatingChip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`pointer-events-none ${className ?? ""}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium backdrop-blur-xl shadow-lg shadow-black/20"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.button
      onClick={() => scrollToId("about")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="mt-16 mx-auto hidden h-12 w-7 items-start justify-center rounded-full border border-border bg-card/40 p-1.5 md:flex"
      aria-label="Scroll down"
    >
      <motion.span
        animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="h-2 w-1 rounded-full bg-gradient-to-b from-violet-400 to-cyan-300"
      />
    </motion.button>
  );
}
