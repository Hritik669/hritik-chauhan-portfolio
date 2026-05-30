import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Loader2, Mail, MessageSquare, Send, User } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/toast";
import { GradientBlobs } from "@/components/effects/GradientBlobs";
import { contactDetails, personal } from "@/lib/data";
import { cn, isEmail } from "@/lib/utils";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const ENV = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const formMountedAt = useRef<number>(Date.now());

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!isEmail(form.email)) next.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 12)
      next.message = "Tell me a bit more — at least 12 characters.";
    return next;
  };

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const formData = new FormData(e.currentTarget);
    if ((formData.get("website") as string)?.trim().length) {
      toast({
        title: "Submission blocked",
        description: "Spam check failed. Please try again.",
        variant: "error",
      });
      return;
    }

    const elapsed = Date.now() - formMountedAt.current;
    if (elapsed < 1500) {
      toast({
        title: "Too fast",
        description: "Please take a moment before submitting.",
        variant: "error",
      });
      return;
    }

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast({
        title: "Check the form",
        description: "Some fields need a quick fix.",
        variant: "error",
      });
      return;
    }

    setSubmitting(true);
    try {
      if (!ENV.serviceId || !ENV.templateId || !ENV.publicKey) {
        throw new Error(
          "EmailJS environment variables are not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.",
        );
      }

      await emailjs.send(
        ENV.serviceId,
        ENV.templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          reply_to: form.email.trim(),
          to_name: personal.name,
          message: form.message.trim(),
        },
        { publicKey: ENV.publicKey },
      );

      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll get back to you soon.",
        variant: "success",
      });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      formMountedAt.current = Date.now();
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email me directly.";
      toast({
        title: "Could not send message",
        description: message,
        variant: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact" aria-label="Contact">
      <GradientBlobs variant="soft" />
      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Open to engineering roles, contract work and collaborations. Drop a message below or reach out directly."
        />

        <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Card className="gradient-border bg-card/60 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold">Reach me directly</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Prefer email or LinkedIn? Use any of the channels below.
              </p>
              <ul className="mt-5 space-y-3">
                {contactDetails.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          c.href.startsWith("http") ? "noopener noreferrer" : undefined
                        }
                        className="group flex items-center gap-4 rounded-xl border border-border bg-background/40 p-3 transition-all hover:border-primary/40 hover:bg-accent/60"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="truncate text-sm font-medium text-foreground">
                            {c.value}
                          </p>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Card>

            <Card className="gradient-border relative overflow-hidden bg-card/60 p-6 backdrop-blur-xl">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-500/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex items-start gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                  <span className="relative grid place-items-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                </span>
                <div>
                  <p className="text-sm font-semibold">Currently available</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Open to full-time roles, contracts and interesting collaborations.
                    Average response time within 24 hours.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="gradient-border bg-card/60 p-6 backdrop-blur-xl sm:p-8">
              <form noValidate onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    id="contact-name"
                    label="Your Name"
                    icon={User}
                    error={errors.name}
                  >
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      required
                    />
                  </FormField>

                  <FormField
                    id="contact-email"
                    label="Email"
                    icon={Mail}
                    error={errors.email}
                  >
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      required
                    />
                  </FormField>
                </div>

                <FormField
                  id="contact-message"
                  label="Message"
                  icon={MessageSquare}
                  error={errors.message}
                >
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project, role, or what you're building..."
                    rows={6}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    required
                  />
                </FormField>

                <div className="hidden" aria-hidden="true">
                  <label>
                    Website
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      defaultValue=""
                    />
                  </label>
                </div>

                <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                  <p className="text-xs text-muted-foreground">
                    Your details stay private. Powered by EmailJS.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={submitting}
                    className="sm:min-w-[180px]"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function FormField({
  id,
  label,
  error,
  icon: Icon,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={cn(
          "mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider",
          error ? "text-rose-300" : "text-muted-foreground",
        )}
      >
        <Icon className="h-3.5 w-3.5" />
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 text-xs font-medium text-rose-300"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
