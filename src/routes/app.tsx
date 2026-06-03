import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import appShot from "@/assets/app.jpg";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Languages App — Planicchio" },
      { name: "description", content: "Learn languages the modern way with the Planicchio app. Free, Pro and VIP plans with live private classes." },
      { property: "og:title", content: "Planicchio Languages App" },
      { property: "og:description", content: "Learn languages the way the internet learns — fast, social and addictive." },
      { property: "og:image", content: appShot },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const { c } = useLang();
  return (
    <div className="pt-28">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.app.eyebrow}</p>
          <h1 className="font-display mt-4 text-balance text-5xl leading-[0.95] md:text-7xl">{c.app.title}</h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">{c.app.sub}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {c.app.features.map((f) => (
              <div key={f.t}>
                <h3 className="font-display text-xl text-primary">{f.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.img
            src={appShot}
            alt="Planicchio language app"
            loading="lazy"
            width={1200}
            height={1400}
            className="float-slow mx-auto w-full max-w-md rounded-[2rem]"
          />
        </Reveal>
      </section>

      {/* VIP */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal className="rounded-[2.5rem] bg-ink px-8 py-16 text-cream md:px-16 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-widest text-primary">
            <Star className="h-3 w-3" /> VIP
          </span>
          <h2 className="font-display mt-5 max-w-2xl text-balance text-4xl md:text-6xl">{c.app.vipTitle}</h2>
          <p className="mt-4 max-w-md text-cream/70">{c.app.vipSub}</p>
        </Reveal>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {c.app.pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 ${
                  p.featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
                }`}
              >
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-4 font-display text-5xl">
                  {p.price}
                  <span className={`text-base ${p.featured ? "opacity-70" : "text-muted-foreground"}`}>{p.period}</span>
                </p>
                <ul className="mt-6 flex flex-col gap-3 text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <Check className={`h-4 w-4 ${p.featured ? "" : "text-primary"}`} /> {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
                    p.featured ? "bg-ink text-cream" : "bg-foreground text-background"
                  }`}
                >
                  {c.cta.learnMore}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-5 md:grid-cols-3">
          {c.app.testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display mt-5 text-xl italic">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
