import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ShoppingBag, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import planner from "@/assets/about.jpg";

const SHOP_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSdDatTiwREHiput5HDqBd9KuvKYUNEeNFynmdL1pH_8gwAx5g/viewform";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Digital Products — Planicchio" },
      { name: "description", content: "Planners, icons, templates, menus, checklists, wallpapers, coloring books and more — all online, all personalisable, just €2 each." },
      { property: "og:title", content: "Digital Products — Planicchio" },
      { property: "og:description", content: "Tools to organise your creative life — everything online and personalisable." },
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

        {/* FEATURED PLANNER */}
        <Reveal className="mt-12">
          <article className="grid overflow-hidden rounded-[2.5rem] border border-border bg-card md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto">
              <img src={planner} alt={c.products.featured.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                <Sparkles className="h-3 w-3" /> {c.products.featured.badge}
              </span>
              <h2 className="font-display mt-5 text-4xl md:text-5xl">{c.products.featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{c.products.featured.desc}</p>
              <p className="font-display mt-6 text-3xl text-primary">{c.products.featured.price}</p>
              <a
                href={SHOP_FORM}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {c.cta.order} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-10">
          <p className="font-display text-xl italic text-primary md:text-2xl">{c.products.personalize}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.products.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/30 via-secondary to-muted">
                  <span className="absolute left-4 top-4 rounded-full bg-cream/80 px-3 py-1 text-xs font-medium text-ink">{p.price}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href={SHOP_FORM}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:underline"
                  >
                    {c.cta.order} <ArrowUpRight className="h-4 w-4" />
                  </a>
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
