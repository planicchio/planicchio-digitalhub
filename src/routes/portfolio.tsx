import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowUpRight, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { UgcFeed } from "@/components/UgcFeed";

// Replace with your Canva PDF portfolio link (Share → Public link)
const UGC_PORTFOLIO_PDF = "https://www.canva.com/design/DAG9wZePsWg/SgdvxS8jUg7KAE7-3LIppA/view";

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

const gradients = [
  "from-primary/40 to-secondary",
  "from-ink to-primary/60",
  "from-secondary to-primary/30",
  "from-primary/50 to-muted",
  "from-muted to-primary/40",
  "from-ink/80 to-secondary",
  "from-primary/30 to-secondary",
  "from-secondary to-ink/70",
];
const spans = ["row-span-2", "", "", "row-span-2", "", "row-span-2", "", ""];

function Portfolio() {
  const { c } = useLang();
  const [filter, setFilter] = useState(c.portfolio.filters[0]);
  const items = c.portfolio.items.filter((it) => filter === c.portfolio.filters[0] || it.cat === filter);

  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.portfolio.eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl leading-[0.95] md:text-7xl">{c.portfolio.title}</h1>
          <p className="mt-5 max-w-xl text-muted-foreground">{c.portfolio.sub}</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {c.portfolio.filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((it, i) => (
              <motion.div
                layout
                key={it.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradients[i % gradients.length]} ${spans[i % spans.length]}`}
              >
                <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute inset-0 bg-ink/40" />
                  <div className="relative text-cream">
                    <p className="text-xs uppercase tracking-widest text-primary">{it.cat}</p>
                    <p className="font-display text-2xl">{it.title}</p>
                  </div>
                </div>
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur">
                  <Play className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
              href={UGC_PORTFOLIO_PDF}
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
