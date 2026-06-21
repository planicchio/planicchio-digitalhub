import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const BIO_LINK = "https://planicchiobrandingandmarketing.my.canva.site/bio-link-planicchio-all-services";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Planicchio" },
      { name: "description", content: "The creative vision behind Planicchio: fashion, branding and digital culture, multilingual and internet-native, based in Italy." },
      { property: "og:title", content: "About Planicchio" },
      { property: "og:description", content: "A creative vision built for the internet age." },
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
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src="/about_us copy copy.webp"
                  alt="About Planicchio"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-6">
                <img
                  src="/planicchio copy.jpg"
                  alt="Planicchio logo"
                  loading="lazy"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center gap-6 text-lg text-muted-foreground">
            <div>
              <p className="font-display text-3xl text-foreground md:text-4xl">{c.about.greeting}</p>
              <p className="mt-1 text-base uppercase tracking-widest text-primary">{c.about.founder}</p>
            </div>
            {c.about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="font-display text-xl italic text-foreground">{c.about.closing}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 text-base font-medium text-primary hover:underline">
                {c.cta.discover} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={BIO_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Saiba mais <ExternalLink className="h-4 w-4" />
              </a>
            </div>
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
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
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
