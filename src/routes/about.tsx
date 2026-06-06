import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Planicchio" },
      { name: "description", content: "The creative vision behind Planicchio: fashion, branding and digital culture, multilingual and internet-native, based in Italy." },
      { property: "og:title", content: "About Planicchio" },
      { property: "og:description", content: "A creative vision built for the internet age." },
      { property: "og:image", content: about },
    ],
  }),
  component: About,
});

function About() {
  const { c } = useLang();
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.about.eyebrow}</p>
          <h1 className="font-display mt-4 max-w-4xl text-balance text-5xl leading-[0.95] md:text-8xl">
            {c.about.title}
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img src={about} alt="Planicchio creative direction" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center gap-6 text-lg text-muted-foreground">
            <p>{c.about.p1}</p>
            <p>{c.about.p2}</p>
            <p>{c.about.p3}</p>
            <Link to="/services" className="inline-flex items-center gap-2 text-base font-medium text-primary hover:underline">
              {c.cta.discover} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        <Reveal className="rounded-[2.5rem] bg-ink px-8 py-14 text-cream md:px-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.about.originTitle}</p>
          <p className="font-display mt-5 max-w-3xl text-balance text-2xl leading-snug md:text-4xl">{c.about.origin}</p>
          <p className="mt-6 font-display text-xl italic text-primary md:text-2xl">{c.about.tagline}</p>
        </Reveal>
      </section>


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.about.values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <span className="font-display text-4xl text-primary">0{i + 1}</span>
                <h3 className="font-display mt-5 text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
