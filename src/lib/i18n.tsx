import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "it";

type Service = { title: string; desc: string; tag: string };
type Product = { title: string; desc: string; price: string };
type Plan = { name: string; price: string; period: string; perks: string[]; featured?: boolean };
type Testimonial = { quote: string; name: string; role: string };

type Content = {
  nav: { home: string; about: string; services: string; portfolio: string; app: string; products: string; contact: string };
  cta: { work: string; explore: string; discover: string; getInTouch: string; viewAll: string; comingSoon: string; learnMore: string };
  hero: { eyebrow: string; line1: string; line2: string; sub: string; scroll: string };
  marquee: string[];
  home: { servicesTitle: string; servicesSub: string; statLabel: string[]; based: string };
  about: { eyebrow: string; title: string; p1: string; p2: string; p3: string; values: { t: string; d: string }[] };
  services: { eyebrow: string; title: string; sub: string; items: Service[]; editable: string };
  portfolio: { eyebrow: string; title: string; sub: string; filters: string[]; items: { title: string; cat: string }[]; reels: string };
  app: { eyebrow: string; title: string; sub: string; features: { t: string; d: string }[]; vipTitle: string; vipSub: string; pricing: Plan[]; testimonials: Testimonial[] };
  products: { eyebrow: string; title: string; sub: string; items: Product[]; shop: string };
  contact: { eyebrow: string; title: string; sub: string; name: string; email: string; type: string; message: string; send: string; or: string; socials: string };
  footer: { tagline: string; rights: string; made: string };
};

const en: Content = {
  nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", app: "Languages App", products: "Products", contact: "Contact" },
  cta: { work: "Work with me", explore: "explore the universe", discover: "Discover", getInTouch: "Get in touch", viewAll: "View all", comingSoon: "Coming soon", learnMore: "Learn more" },
  hero: {
    eyebrow: "Creative Studio · Fashion · Digital",
    line1: "Planicchio",
    line2: "the art of internet creativity",
    sub: "Branding, content & fashion direction for brands that want to feel alive online.",
    scroll: "scroll",
  },
  marquee: ["Branding", "UGC", "Fashion Direction", "Photography", "Events", "Digital Products", "Languages"],
  home: {
    servicesTitle: "What I create",
    servicesSub: "A creative studio blending strategy, aesthetics and internet culture.",
    statLabel: ["Projects shipped", "Languages spoken", "Based in"],
    based: "Italy",
  },
  about: {
    eyebrow: "About Planicchio",
    title: "A creative vision built for the internet age",
    p1: "Planicchio is a one-person creative studio at the intersection of fashion, branding and digital culture. I help brands and creators turn ideas into immersive visual stories.",
    p2: "Living in Italy and speaking Italian, Portuguese, English and more, I bring a multicultural, internet-native perspective to every project — fluent in trends, aesthetics and the language of attention.",
    p3: "From scroll-stopping content to full brand worlds, everything is crafted to feel premium, human and unmistakably yours.",
    values: [
      { t: "Internet-native", d: "Fluent in trends, memes and aesthetics that actually convert." },
      { t: "Multilingual", d: "Italian, Portuguese, English — storytelling without borders." },
      { t: "Editorial", d: "Magazine-grade visuals with a modern, minimal soul." },
      { t: "Hands-on", d: "Strategy, shooting and editing, all under one roof." },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Everything your brand needs to shine",
    sub: "Editable service modules — pick what you need, scale when you grow.",
    editable: "Editable card",
    items: [
      { title: "Branding & Marketing", desc: "Identity, strategy and campaigns that make your brand unforgettable.", tag: "Strategy" },
      { title: "UGC & Photography", desc: "Authentic content and editorial photography crafted to convert.", tag: "Content" },
      { title: "Virtual Assistance", desc: "Reliable remote support to keep your business running smoothly.", tag: "Support" },
      { title: "Event Planning", desc: "Curated, aesthetic events from concept to the final detail.", tag: "Events" },
      { title: "Languages App & Classes", desc: "Learn languages with a modern app and personalised classes.", tag: "Education" },
      { title: "Digital Stationery", desc: "Planners, templates and PDFs designed to be beautiful and useful.", tag: "Products" },
      { title: "Fashion & Creative Direction", desc: "Styling, moodboards and full creative direction for shoots.", tag: "Fashion" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Selected work & inspiration",
    sub: "A living gallery — videos and case studies dropping soon.",
    filters: ["All", "Branding", "Fashion", "Social", "Before / After"],
    reels: "Reels preview",
    items: [
      { title: "Citrus Rebrand", cat: "Branding" },
      { title: "Editorial No.7", cat: "Fashion" },
      { title: "Reel Series", cat: "Social" },
      { title: "Café Identity", cat: "Before / After" },
      { title: "Sunset Campaign", cat: "Fashion" },
      { title: "Studio Launch", cat: "Social" },
      { title: "Atelier Visuals", cat: "Branding" },
      { title: "Golden Hour", cat: "Fashion" },
    ],
  },
  app: {
    eyebrow: "Languages App",
    title: "Learn languages the modern way",
    sub: "A beautifully designed app to learn the way the internet learns — fast, social and addictive.",
    features: [
      { t: "Bite-sized lessons", d: "Micro-lessons designed for real life and short attention spans." },
      { t: "Native immersion", d: "Real audio from native speakers across multiple languages." },
      { t: "Track your streak", d: "Gamified progress that keeps you coming back." },
    ],
    vipTitle: "Planicchio VIP",
    vipSub: "Private classes, personalised plans and priority support for serious learners.",
    pricing: [
      { name: "Free", price: "€0", period: "/mo", perks: ["Daily lessons", "3 languages", "Community access"] },
      { name: "Pro", price: "€9", period: "/mo", perks: ["All languages", "Offline mode", "No ads", "Progress insights"], featured: true },
      { name: "VIP", price: "€49", period: "/mo", perks: ["Everything in Pro", "Live private classes", "Personal tutor", "Priority support"] },
    ],
    testimonials: [
      { quote: "Finally an app that feels like Instagram but teaches me Italian.", name: "Sofia R.", role: "Student" },
      { quote: "The VIP classes changed how I speak Portuguese completely.", name: "Marco L.", role: "VIP member" },
      { quote: "Beautiful, addictive and actually effective.", name: "Lena K.", role: "Pro user" },
    ],
  },
  products: {
    eyebrow: "Digital Products",
    title: "Tools to organise your creative life",
    sub: "Editable product cards — your future shop, ready when you are.",
    shop: "Shop opening soon",
    items: [
      { title: "Aesthetic Planner", desc: "A minimal daily & weekly planner in warm tones.", price: "€12" },
      { title: "Content Templates", desc: "Editable templates for reels, posts and stories.", price: "€18" },
      { title: "Brand Starter PDF", desc: "Everything to launch a brand identity yourself.", price: "€24" },
      { title: "Language Workbook", desc: "Printable workbook to practice on the go.", price: "€9" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's create something iconic",
    sub: "Collaborations, inquiries and good ideas — I'm all ears.",
    name: "Your name",
    email: "Email",
    type: "Project type",
    message: "Tell me about your project",
    send: "Send inquiry",
    or: "Or reach me directly",
    socials: "Follow the journey",
  },
  footer: { tagline: "Creative studio for the internet age.", rights: "All rights reserved.", made: "Made with care in Italy" },
};

const it: Content = {
  nav: { home: "Home", about: "Chi sono", services: "Servizi", portfolio: "Portfolio", app: "App Lingue", products: "Prodotti", contact: "Contatti" },
  cta: { work: "Lavora con me", explore: "esplora l'universo", discover: "Scopri", getInTouch: "Contattami", viewAll: "Vedi tutto", comingSoon: "Prossimamente", learnMore: "Scopri di più" },
  hero: {
    eyebrow: "Studio Creativo · Moda · Digitale",
    line1: "Planicchio",
    line2: "l'arte della creatività online",
    sub: "Branding, contenuti e direzione moda per brand che vogliono sentirsi vivi online.",
    scroll: "scorri",
  },
  marquee: ["Branding", "UGC", "Direzione Moda", "Fotografia", "Eventi", "Prodotti Digitali", "Lingue"],
  home: {
    servicesTitle: "Cosa creo",
    servicesSub: "Uno studio creativo che unisce strategia, estetica e cultura di internet.",
    statLabel: ["Progetti realizzati", "Lingue parlate", "Con sede in"],
    based: "Italia",
  },
  about: {
    eyebrow: "Chi è Planicchio",
    title: "Una visione creativa pensata per l'era di internet",
    p1: "Planicchio è uno studio creativo all'incrocio tra moda, branding e cultura digitale. Aiuto brand e creator a trasformare le idee in storie visive immersive.",
    p2: "Vivo in Italia e parlo italiano, portoghese, inglese e altro: porto una prospettiva multiculturale e nativa di internet in ogni progetto — fluente in trend, estetica e linguaggio dell'attenzione.",
    p3: "Dai contenuti che fermano lo scroll a interi mondi di brand, tutto è creato per sembrare premium, umano e inconfondibilmente tuo.",
    values: [
      { t: "Nativo digitale", d: "Fluente in trend, meme ed estetiche che convertono davvero." },
      { t: "Multilingue", d: "Italiano, portoghese, inglese — storytelling senza confini." },
      { t: "Editoriale", d: "Visual da rivista con un'anima moderna e minimale." },
      { t: "Hands-on", d: "Strategia, shooting ed editing, tutto sotto lo stesso tetto." },
    ],
  },
  services: {
    eyebrow: "Servizi",
    title: "Tutto ciò che serve al tuo brand per brillare",
    sub: "Moduli di servizio modificabili — scegli ciò che ti serve, cresci quando vuoi.",
    editable: "Card modificabile",
    items: [
      { title: "Branding & Marketing", desc: "Identità, strategia e campagne che rendono il tuo brand indimenticabile.", tag: "Strategia" },
      { title: "UGC & Fotografia", desc: "Contenuti autentici e fotografia editoriale creati per convertire.", tag: "Contenuti" },
      { title: "Assistenza Virtuale", desc: "Supporto da remoto affidabile per far girare il tuo business.", tag: "Supporto" },
      { title: "Organizzazione Eventi", desc: "Eventi curati ed estetici dal concept all'ultimo dettaglio.", tag: "Eventi" },
      { title: "App Lingue & Lezioni", desc: "Impara le lingue con un'app moderna e lezioni personalizzate.", tag: "Formazione" },
      { title: "Cancelleria Digitale", desc: "Planner, template e PDF pensati per essere belli e utili.", tag: "Prodotti" },
      { title: "Moda & Direzione Creativa", desc: "Styling, moodboard e direzione creativa completa per gli shooting.", tag: "Moda" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Lavori selezionati & ispirazione",
    sub: "Una galleria viva — video e case study in arrivo.",
    filters: ["Tutti", "Branding", "Moda", "Social", "Prima / Dopo"],
    reels: "Anteprima reels",
    items: [
      { title: "Citrus Rebrand", cat: "Branding" },
      { title: "Editorial No.7", cat: "Moda" },
      { title: "Serie Reel", cat: "Social" },
      { title: "Identità Café", cat: "Prima / Dopo" },
      { title: "Campagna Sunset", cat: "Moda" },
      { title: "Lancio Studio", cat: "Social" },
      { title: "Visual Atelier", cat: "Branding" },
      { title: "Golden Hour", cat: "Moda" },
    ],
  },
  app: {
    eyebrow: "App Lingue",
    title: "Impara le lingue in modo moderno",
    sub: "Un'app dal design curato per imparare come impara internet — veloce, social e coinvolgente.",
    features: [
      { t: "Lezioni brevi", d: "Micro-lezioni pensate per la vita reale e l'attenzione breve." },
      { t: "Immersione nativa", d: "Audio reali da madrelingua in più lingue." },
      { t: "Segui la streak", d: "Progressi gamificati che ti fanno tornare ogni giorno." },
    ],
    vipTitle: "Planicchio VIP",
    vipSub: "Lezioni private, piani personalizzati e supporto prioritario per chi fa sul serio.",
    pricing: [
      { name: "Free", price: "€0", period: "/mese", perks: ["Lezioni giornaliere", "3 lingue", "Accesso community"] },
      { name: "Pro", price: "€9", period: "/mese", perks: ["Tutte le lingue", "Modalità offline", "Niente pubblicità", "Statistiche progressi"], featured: true },
      { name: "VIP", price: "€49", period: "/mese", perks: ["Tutto di Pro", "Lezioni private dal vivo", "Tutor personale", "Supporto prioritario"] },
    ],
    testimonials: [
      { quote: "Finalmente un'app che sembra Instagram ma mi insegna l'italiano.", name: "Sofia R.", role: "Studentessa" },
      { quote: "Le lezioni VIP hanno cambiato totalmente il mio portoghese.", name: "Marco L.", role: "Membro VIP" },
      { quote: "Bella, coinvolgente e davvero efficace.", name: "Lena K.", role: "Utente Pro" },
    ],
  },
  products: {
    eyebrow: "Prodotti Digitali",
    title: "Strumenti per organizzare la tua vita creativa",
    sub: "Card prodotto modificabili — il tuo futuro shop, pronto quando vuoi.",
    shop: "Shop in apertura",
    items: [
      { title: "Planner Estetico", desc: "Un planner giornaliero e settimanale minimal in tonalità calde.", price: "€12" },
      { title: "Template Contenuti", desc: "Template modificabili per reel, post e storie.", price: "€18" },
      { title: "Brand Starter PDF", desc: "Tutto per lanciare da solo la tua brand identity.", price: "€24" },
      { title: "Workbook Lingue", desc: "Workbook stampabile per esercitarti ovunque.", price: "€9" },
    ],
  },
  contact: {
    eyebrow: "Contatti",
    title: "Creiamo qualcosa di iconico",
    sub: "Collaborazioni, richieste e belle idee — sono tutta orecchie.",
    name: "Il tuo nome",
    email: "Email",
    type: "Tipo di progetto",
    message: "Raccontami del tuo progetto",
    send: "Invia richiesta",
    or: "Oppure scrivimi direttamente",
    socials: "Segui il viaggio",
  },
  footer: { tagline: "Studio creativo per l'era di internet.", rights: "Tutti i diritti riservati.", made: "Fatto con cura in Italia" },
};

const dictionaries: Record<Lang, Content> = { en, it };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; c: Content };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("planicchio-lang") as Lang | null) : null;
    if (saved === "en" || saved === "it") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("planicchio-lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang, c: dictionaries[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
