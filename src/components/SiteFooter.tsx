import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { c } = useLang();
  const links = [
    { to: "/about", label: c.nav.about },
    { to: "/services", label: c.nav.services },
    { to: "/portfolio", label: c.nav.portfolio },
    { to: "/app", label: c.nav.app },
    { to: "/products", label: c.nav.products },
    { to: "/contact", label: c.nav.contact },
  ] as const;

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl md:text-6xl">
              Planicchio<span className="text-primary">.</span>
            </p>
            <p className="mt-3 max-w-sm text-cream/60">{c.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-cream/70 transition-colors hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-primary hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@planicchio.com"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Planicchio. {c.footer.rights}</span>
          <span>{c.footer.made} 🇮🇹</span>
        </div>
      </div>
    </footer>
  );
}
