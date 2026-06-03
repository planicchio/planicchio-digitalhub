import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Digital Products — Planicchio" },
      { name: "description", content: "Planners, templates, PDFs and workbooks to organise your creative life. Future shop ready." },
      { property: "og:title", content: "Digital Products — Planicchio" },
      { property: "og:description", content: "Tools to organise your creative life." },
    ],
  }),
  component: Products,
});

function Products() {
  const { c } = useLang();
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.products.eyebrow}</p>
              <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl leading-[0.95] md:text-7xl">{c.products.title}</h1>
              <p className="mt-5 max-w-xl text-muted-foreground">{c.products.sub}</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
              <ShoppingBag className="h-4 w-4 text-primary" /> {c.products.shop}
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.products.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/30 via-secondary to-muted">
                  <span className="absolute left-4 top-4 rounded-full bg-cream/80 px-3 py-1 text-xs font-medium text-ink">{p.price}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:underline"
                  >
                    {c.cta.comingSoon} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}
