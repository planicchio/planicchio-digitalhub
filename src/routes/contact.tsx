import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, ArrowUpRight, Check } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Planicchio" },
      { name: "description", content: "Collaborations, work inquiries and good ideas. Reach Planicchio via Instagram, email or the contact form." },
      { property: "og:title", content: "Contact — Planicchio" },
      { property: "og:description", content: "Let's create something iconic together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { c } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.contact.eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl leading-[0.95] md:text-8xl">{c.contact.title}</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">{c.contact.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-7 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <input required placeholder={c.contact.name} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                <input required type="email" placeholder={c.contact.email} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <input placeholder={c.contact.type} className="mt-5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              <textarea required rows={5} placeholder={c.contact.message} className="mt-5 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              <button
                type="submit"
                disabled={sent}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> {c.contact.send} ✓
                  </>
                ) : (
                  <>
                    {c.contact.send} <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{c.contact.or}</p>
            <a
              href="mailto:planicchio@gmail.com"
              className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">planicchio@gmail.com</span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="https://instagram.com/planicchio"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-primary" />
                <span className="text-sm">@planicchio</span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45" />
            </a>
            <div className="mt-2 rounded-3xl bg-ink p-6 text-cream">
              <p className="text-sm uppercase tracking-widest text-primary">{c.contact.socials}</p>
              <p className="font-display mt-2 text-3xl">Italy · 🌍 4 languages</p>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}
