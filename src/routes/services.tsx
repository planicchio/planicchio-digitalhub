import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Pencil } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const serviceGradients = [
  "from-primary/30 via-secondary to-muted",
  "from-ink/80 via-primary/30 to-secondary",
  "from-secondary via-muted to-primary/25",
  "from-primary/25 via-secondary to-ink/40",
  "from-muted via-secondary to-primary/30",
  "from-primary/35 via-muted to-secondary",
  "from-ink/50 via-primary/25 to-secondary",
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Planicchio" },
      { name: "description", content: "Branding, UGC, photography, virtual assistance, events, language classes, digital stationery and fashion direction." },
      { property: "og:title", content: "Services — Planicchio" },
      { property: "og:description", content: "Everything your brand needs to shine." },
    ],
  }),
  component: Services,
});

function Services() {
  const { c } = useLang();
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.services.eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl leading-[0.95] md:text-7xl">{c.services.title}</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">{c.services.sub}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {c.services.items.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary">
                <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Pencil className="h-3 w-3" /> {c.services.editable}
                </span>
                <span className="text-xs uppercase tracking-widest text-primary">{s.tag}</span>
                <h2 className="font-display mt-4 text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">{s.desc}</p>
                {serviceImages[i] ? (
                  <div className="mt-6 aspect-[16/7] w-full overflow-hidden rounded-2xl">
                    <img
                      src={serviceImages[i]}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                ) : (
                  <div className="mt-6 aspect-[16/7] w-full rounded-2xl bg-gradient-to-br from-primary/25 via-secondary to-muted transition-transform duration-500 group-hover:scale-[1.02]" />
                )}
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90"
                >
                  {c.cta.work} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}
