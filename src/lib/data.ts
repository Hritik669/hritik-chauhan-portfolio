import type { ComponentType } from "react";
import {
  Award,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Github,
  Layers,
  Linkedin,
  Mail,
  Package,
  Phone,
  Rocket,
  Server,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Wrench,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const personal = {
  name: "Hritik Chauhan",
  fullName: "Hritik Chauhan",
  shortBio:
    "Software Engineer with 3+ years of experience building scalable production-grade applications across fintech, insurance and SaaS domains.",
  longBio:
    "I am a Software Engineer with 3+ years of experience building scalable systems and production applications. I design and ship distributed backends, payment systems and full-stack experiences that serve millions of users.",
  email: "chritik6@gmail.com",
  phone: "+91 7906000100",
  phoneRaw: "+917906000100",
  location: "India",
  linkedin: "https://www.linkedin.com/in/hritik-chauhan-505466205",
  github: "https://github.com/Hritik669",
  resumePath: "/resume.pdf",
  avatarPath: "/profile.svg",
};

export const titles = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Specialist",
  "Node.js Engineer",
];

export const socials: SocialLink[] = [
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
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export const stats: Stat[] = [
  {
    label: "Years Experience",
    value: 3,
    suffix: "+",
    description: "Shipping production systems",
    icon: Briefcase,
  },
  {
    label: "Users Served",
    value: 15,
    suffix: "L+",
    description: "Across fintech & insurance",
    icon: Sparkles,
  },
  {
    label: "Microservices Built",
    value: 15,
    suffix: "+",
    description: "From monolith to distributed",
    icon: Layers,
  },
  {
    label: "Projects",
    value: 10,
    suffix: "+",
    description: "Delivered end-to-end",
    icon: Rocket,
  },
  {
    label: "Performance Boost",
    value: 38,
    suffix: "%",
    description: "Data retrieval improvement",
    icon: Star,
  },
];

export type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "APIs, services and distributed systems",
    icon: Server,
    accent: "from-violet-500/30 to-indigo-500/10",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 92 },
      { name: "Hapi.js", level: 85 },
      { name: "gRPC", level: 82 },
      { name: "REST API", level: 95 },
      { name: "JWT", level: 90 },
      { name: "Microservices", level: 92 },
    ],
  },
  {
    title: "Frontend",
    description: "Modern, interactive interfaces",
    icon: Code2,
    accent: "from-sky-500/30 to-blue-500/10",
    skills: [
      { name: "React.js", level: 88 },
      { name: "JSX", level: 90 },
      { name: "React Hooks", level: 88 },
      { name: "Axios", level: 90 },
      { name: "React Router", level: 88 },
    ],
  },
  {
    title: "Databases",
    description: "SQL, NoSQL and caching layers",
    icon: Database,
    accent: "from-emerald-500/30 to-teal-500/10",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "PostgreSQL", level: 86 },
      { name: "Redis", level: 88 },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure, queues and observability",
    icon: Cloud,
    accent: "from-cyan-500/30 to-sky-500/10",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Datadog", level: 82 },
      { name: "Kafka", level: 88 },
      { name: "RabbitMQ", level: 85 },
      { name: "Docker", level: 85 },
    ],
  },
  {
    title: "Tools",
    description: "Productivity & engineering workflow",
    icon: Wrench,
    accent: "from-amber-500/30 to-orange-500/10",
    skills: [
      { name: "Git", level: 95 },
      { name: "GitLab", level: 90 },
      { name: "Jira", level: 90 },
      { name: "Cursor AI", level: 92 },
      { name: "Linux", level: 88 },
      { name: "Jest", level: 86 },
      { name: "SonarQube", level: 82 },
    ],
  },
  {
    title: "Security",
    description: "Encryption and auth hardening",
    icon: Shield,
    accent: "from-rose-500/30 to-pink-500/10",
    skills: [
      { name: "AES Encryption", level: 86 },
      { name: "JWT Rotation", level: 88 },
    ],
  },
];

export type Experience = {
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  responsibilities: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Appinventiv Technologies Pvt Ltd",
    position: "Software Engineer",
    duration: "June 2022 – Present",
    location: "India",
    description:
      "Working on large-scale production systems across fintech, insurance and SaaS. Designing distributed backends and mentoring engineers.",
    responsibilities: [
      "Re-architected monolithic applications into 10+ microservices",
      "Built REST APIs and gRPC services for inter-service communication",
      "Improved data retrieval performance by 38% via query and cache optimisation",
      "Worked extensively with AWS cloud services (EC2, S3, SQS, Lambda, CloudWatch)",
      "Built async event-driven systems using Kafka and RabbitMQ",
      "Reduced production defects by 35% through testing and code quality gates",
      "Mentored junior developers and led code reviews",
      "Leveraged Cursor AI to accelerate development and code quality",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "Microservices",
      "AWS",
      "Kafka",
      "RabbitMQ",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
];

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  icon: ComponentType<{ className?: string }>;
  accent: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Toki – Payment Super App",
    subtitle: "Fintech · Payments · Wallet",
    description:
      "Built 10+ microservices powering payment and wallet systems for production-scale fintech applications.",
    longDescription:
      "Engineered the backend platform for Toki, a payment super-app. Designed event-driven microservices, real-time messaging pipelines and resilient multi-database storage to handle high-throughput wallet, KYC and transaction workloads across the region.",
    tech: ["Node.js", "TypeScript", "Kafka", "MongoDB", "AWS", "Redis"],
    highlights: [
      "Real-time communication across services",
      "Kafka event pipelines for transactions",
      "Multi-database architecture (Mongo, Postgres, Redis)",
      "Deep AWS integrations (SQS, S3, Lambda, CloudWatch)",
    ],
    icon: Rocket,
    accent: "from-violet-500/30 via-indigo-500/20 to-blue-500/30",
  },
  {
    title: "Generali Central Life Insurance",
    subtitle: "Insurance · Enterprise Migration",
    description:
      "Contributed to migration of an enterprise insurance platform to modern, stateless microservices architecture.",
    longDescription:
      "Migrated legacy enterprise insurance workflows to a stateless, secure microservices platform. Implemented encryption middleware, payment integrations and modular services to meet strict compliance and reliability requirements.",
    tech: ["React", "Node.js", "Microservices", "AES"],
    highlights: [
      "Encryption middleware (AES) for PII",
      "Payment gateway integration",
      "Stateless service architecture",
      "Enterprise-grade compliance",
    ],
    icon: Shield,
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  },
  {
    title: "Wicket.ai Platform",
    subtitle: "SaaS · Billing · Observability",
    description:
      "Built subscription and billing systems with scalable microservices, Stripe flows and full observability.",
    longDescription:
      "Designed and shipped subscription, billing and metering services for Wicket.ai. Implemented Stripe subscription lifecycles, CI/CD pipelines and end-to-end observability with Datadog for production confidence.",
    tech: ["Node.js", "Express", "Stripe", "AWS", "Datadog"],
    highlights: [
      "Stripe subscription & webhook flows",
      "CI/CD pipelines for safe shipping",
      "Datadog monitoring & alerting",
      "Scalable, multi-tenant architecture",
    ],
    icon: Star,
    accent: "from-amber-500/30 via-orange-500/20 to-rose-500/30",
  },
  {
    title: "Logging-Colorify",
    subtitle: "Open Source · npm Package",
    description:
      "Open source npm package for colorized, structured logging for Node.js applications.",
    longDescription:
      "Authored and maintain an open source npm package that provides ergonomic, colorized and structured logging for Node.js. Lightweight, zero-dependency and production-friendly.",
    tech: ["Node.js", "TypeScript", "Open Source"],
    highlights: [
      "Published on npm",
      "Colorized & structured log output",
      "Zero-dependency",
      "TypeScript-first API",
    ],
    icon: Package,
    accent: "from-sky-500/30 via-cyan-500/20 to-blue-500/30",
    link: "https://www.npmjs.com/package/logging-colorify",
  },
];

export type Achievement = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent: string;
};

export const achievements: Achievement[] = [
  {
    title: "Budding Star Award",
    description:
      "Recognised for outstanding contribution and rapid impact in delivering production-grade systems.",
    icon: Star,
    accent: "from-amber-400/40 to-orange-500/20",
  },
  {
    title: "Squad Award",
    description:
      "Awarded to the squad for shipping a critical platform initiative with exceptional collaboration.",
    icon: Trophy,
    accent: "from-violet-400/40 to-indigo-500/20",
  },
  {
    title: "Ranked in Technical Training Program",
    description:
      "Achieved a top rank in the company-wide technical training program among peer engineers.",
    icon: Award,
    accent: "from-cyan-400/40 to-blue-500/20",
  },
];

export type ContactDetail = {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const contactDetails: ContactDetail[] = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phoneRaw}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hritik-chauhan-505466205",
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Hritik669",
    href: personal.github,
    icon: Github,
  },
];

export const aboutSpecialties = [
  "Node.js",
  "TypeScript",
  "Microservices",
  "Distributed Systems",
  "AWS",
  "React.js",
  "Kafka",
  "Payment Systems",
];
