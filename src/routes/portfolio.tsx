import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { UgcFeed } from "@/components/UgcFeed";

const UGC_PORTFOLIO_URL = "https://planicchiobrandingandmarketing.my.canva.site/portfolio-ana-botelho";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Planicchio" },
      { name: "description", content: "Selected creative work: branding, fashion editorials, social campaigns and before/after showcases." },
      { property: "og:title", content: "Portfolio — Planicchio" },
      { property: "og:description", content: "A living gallery of creative work and inspiration." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { c } = useLang();

  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.portfolio.eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl leading-[0.95] md:text-7xl">{c.portfolio.title}</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">{c.portfolio.sub}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
          <a
            href={UGC_PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <FileText className="h-4 w-4" /> {c.cta.viewPortfolio}
          </a>
          <a
            href="https://instagram.com/planicchio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {c.cta.watch} <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </section>

      {/* UGC & MEDIA */}
      <section className="mt-24 bg-ink py-24 text-cream md:mt-32 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.ugc.eyebrow}</p>
            <h2 className="font-display mt-4 max-w-3xl text-balance text-4xl leading-[0.95] md:text-7xl">{c.ugc.title}</h2>
            <p className="mt-5 max-w-xl text-cream/70">{c.ugc.sub}</p>
            <p className="mt-3 max-w-xl text-cream/60">{c.ugc.desc}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
            {c.ugc.services.map((s) => (
              <span key={s} className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/80">
                {s}
              </span>
            ))}
          </Reveal>

          <UgcFeed />

          <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-4">
            <a
              href={UGC_PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <FileText className="h-4 w-4" /> {c.cta.viewPortfolio}
            </a>
            <a
              href="https://instagram.com/planicchio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm text-cream transition-colors hover:border-primary hover:text-primary"
            >
              {c.cta.watch} <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
