import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ShoppingBag, Sparkles, BookOpen, BookMarked, SquareCheck as CheckSquare, Smartphone, LayoutGrid as Layout, Star, Grid2x2, Coffee, Map, Brush, FileText, Wand as Wand2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const SHOP_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSdDatTiwREHiput5HDqBd9KuvKYUNEeNFynmdL1pH_8gwAx5g/viewform";

const productIcons = [
  BookOpen, BookMarked, CheckSquare, Smartphone,
  Layout, Star, Grid2x2, Coffee,
  Map, Brush, FileText, Wand2,
];

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
            <a
              href={SHOP_FORM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ShoppingBag className="h-4 w-4" /> {c.products.shop}
            </a>
          </div>
        </Reveal>

        {/* FEATURED PLANNER */}
        <Reveal className="mt-12">
          <article className="flex flex-col items-center rounded-[2.5rem] border border-border bg-card p-10 text-center md:flex-row md:items-stretch md:p-0 md:text-left">
            <div className="flex w-full items-center justify-center rounded-3xl bg-primary/8 p-12 md:w-2/5 md:rounded-l-[2.5rem] md:rounded-r-none">
              <div className="flex flex-col items-center gap-3">
                <BookOpen className="h-20 w-20 text-primary" />
                <span className="font-display text-5xl font-bold text-primary">€2</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                <Sparkles className="h-3 w-3" /> {c.products.featured.badge}
              </span>
              <h2 className="font-display mt-5 text-4xl md:text-5xl">{c.products.featured.title}</h2>
              <p className="mt-4 text-muted-foreground">{c.products.featured.desc}</p>
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
          {c.products.items.map((p, i) => {
            const Icon = productIcons[i % productIcons.length];
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card transition-all hover:border-primary">
                  <div className="flex items-center justify-center rounded-t-3xl bg-primary/8 px-6 py-8 transition-colors group-hover:bg-primary/12">
                    <div className="flex flex-col items-center gap-2">
                      <Icon className="h-10 w-10 text-primary" />
                      <span className="rounded-full bg-primary/15 px-3 py-0.5 text-xs font-medium text-primary">{p.price}</span>
                    </div>
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
            );
          })}
        </div>
      </section>
      <div className="h-24" />
    </div>
  );
}
