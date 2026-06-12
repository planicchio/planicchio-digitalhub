import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowUpRight, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

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

      {/* REELS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl">{c.portfolio.reels}</h2>
        </Reveal>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="relative aspect-[9/16] w-44 shrink-0 overflow-hidden rounded-3xl bg-gradient-to-b from-primary/40 to-ink md:w-56">
                <span className="absolute bottom-3 left-3 rounded-full bg-cream/20 px-3 py-1 text-xs text-cream backdrop-blur">
                  {c.cta.comingSoon}
                </span>
                <Play className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-cream/80" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
