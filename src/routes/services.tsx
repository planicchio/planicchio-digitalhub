import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Palette, Camera, Headphones, CalendarDays, Globe, BookOpen, Sparkles, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const serviceIcons = [Palette, Camera, Headphones, CalendarDays, Globe, BookOpen, Sparkles];

const serviceInfoLinks: Record<number, string> = {
  0: "https://planicchiobrandingandmarketing.my.canva.site/planicchiobrandingmarketing",
  2: "https://planicchiobrandingandmarketing.my.canva.site/virtual-assistance-and-events-planner-planicchio",
  3: "https://planicchiobrandingandmarketing.my.canva.site/virtual-assistance-and-events-planner-planicchio",
};

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
          {c.services.items.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const infoUrl = serviceInfoLinks[i];
            return (
              <Reveal key={s.title} delay={(i % 2) * 0.08}>
                <article className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-primary">{s.tag}</span>
                  <h2 className="font-display mt-3 text-3xl md:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-md flex-1 text-muted-foreground">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 self-start rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90"
                    >
                      {c.cta.work} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {infoUrl && (
                      <a
                        href={infoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {c.cta.learnMore} <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}
