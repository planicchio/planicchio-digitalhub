import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Planicchio — Creative Studio · Fashion · Digital" },
      { name: "description", content: "Planicchio is a creative studio blending branding, content, fashion direction and internet culture. Based in Italy." },
      { property: "og:title", content: "Planicchio — Creative Studio" },
      { property: "og:description", content: "Branding, content & fashion direction for brands that want to feel alive online." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

function Home() {
  const { c } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const services = c.services.items.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative flex min-h-screen items-end overflow-hidden bg-ink">
        <motion.img
          src={hero}
          alt="Planicchio editorial"
          style={{ y, scale }}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
          width={1280}
          height={1600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-xs uppercase tracking-[0.4em] text-primary"
          >
            {c.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 max-w-5xl text-balance text-6xl leading-[0.9] text-cream md:text-8xl lg:text-9xl"
          >
            {c.hero.line1}<span className="text-primary">_</span>
            <span className="mt-2 block text-3xl italic text-primary md:text-5xl">{c.hero.tag}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm uppercase tracking-[0.3em] text-cream/70"
          >
            {c.hero.pillars.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="font-display mt-6 flex flex-wrap gap-x-4 text-xl italic text-cream md:text-2xl"
          >
            {c.hero.statements.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.8 }}
            className="mt-6 max-w-md text-cream/70 md:text-lg"
          >
            {c.hero.desc}
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {c.cta.work}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm text-cream transition-colors hover:border-primary hover:text-primary"
            >
              [ {c.cta.explore} ]
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-6 right-5 hidden items-center gap-2 text-xs uppercase tracking-widest text-cream/50 md:flex md:right-8">
          {c.hero.scroll} <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-background py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...c.marquee, ...c.marquee, ...c.marquee, ...c.marquee].map((m, i) => (
            <span key={i} className="font-display text-2xl italic text-muted-foreground md:text-3xl">
              {m} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-primary">{c.services.eyebrow}</p>
          <h2 className="font-display mt-3 max-w-2xl text-balance text-4xl md:text-6xl">{c.home.servicesTitle}</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">{c.home.servicesSub}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link
                to="/services"
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary">{s.tag}</span>
                  <h3 className="font-display mt-4 text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <ArrowUpRight className="mt-8 h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            {c.cta.viewAll} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:grid-cols-3 md:px-8">
          {[
            { n: c.home.statValue[0], l: c.home.statLabel[0] },
            { n: c.home.statValue[1], l: c.home.statLabel[1] },
            { n: c.home.based, l: c.home.statLabel[2] },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="font-display text-5xl text-primary md:text-7xl">{s.n}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-cream/60">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal className="rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground md:py-24">
          <h2 className="font-display mx-auto max-w-3xl text-balance text-4xl md:text-6xl">{c.contact.title}</h2>
          <p className="mx-auto mt-4 max-w-md opacity-80">{c.contact.sub}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream transition-transform hover:scale-[1.03]"
          >
            {c.cta.getInTouch} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
