import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "it" | "pt" | "fr" | "es";

type Service = { title: string; desc: string; tag: string };
type Product = { title: string; desc: string; price: string };
type Plan = { name: string; price: string; period: string; perks: string[]; featured?: boolean };
type Testimonial = { quote: string; name: string; role: string };
type Card = { title: string; desc: string };

type Content = {
  nav: { home: string; about: string; services: string; portfolio: string; app: string; products: string; contact: string };
  cta: {
    work: string;
    explore: string;
    discover: string;
    getInTouch: string;
    viewAll: string;
    comingSoon: string;
    learnMore: string;
    order: string;
    join: string;
    viewPortfolio: string;
    watch: string;
    visitApp: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    tag: string;
    sub: string;
    desc: string;
    pillars: string[];
    statements: string[];
    scroll: string;
  };
  marquee: string[];
  explore: { eyebrow: string; title: string; sub: string; cards: Card[] };
  home: { servicesTitle: string; servicesSub: string; statLabel: string[]; statValue: string[]; based: string };
  about: {
    eyebrow: string;
    title: string;
    greeting: string;
    founder: string;
    story: string[];
    closing: string;
    originTitle: string;
    origin: string;
    tagline: string;
    values: { t: string; d: string }[];
  };
  services: { eyebrow: string; title: string; sub: string; items: Service[]; editable: string };
  portfolio: { eyebrow: string; title: string; sub: string; filters: string[]; items: { title: string; cat: string }[]; reels: string };
  ugc: { eyebrow: string; title: string; sub: string; desc: string; services: string[] };
  app: {
    eyebrow: string;
    title: string;
    sub: string;
    learnFun: string;
    features: { t: string; d: string }[];
    vipTitle: string;
    vipSub: string;
    pricing: Plan[];
    testimonials: Testimonial[];
  };
  products: { eyebrow: string; title: string; sub: string; items: Product[]; shop: string; personalize: string; featured: { badge: string; title: string; desc: string; price: string } };
  social: { eyebrow: string; title: string; sub: string; handle: string };
  contact: { eyebrow: string; title: string; sub: string; beautiful: string; name: string; email: string; type: string; message: string; send: string; or: string; socials: string };
  footer: { tagline: string; rights: string; made: string };
};



const en: Content = {
  nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", app: "Languages", products: "Digital Goods", contact: "Contact" },
  cta: {
    work: "Work With Me",
    explore: "Explore the Universe",
    discover: "Discover",
    getInTouch: "Get in touch",
    viewAll: "View all",
    comingSoon: "Coming soon",
    learnMore: "Learn more",
    order: "Order via form",
    join: "Join Now",
    viewPortfolio: "View UGC Portfolio",
    watch: "Watch My Content",
    visitApp: "Open the App",
  },
  hero: {
    eyebrow: "Made in Italy · Thinking globally",
    line1: "Planicchio",
    tag: "a digital universe",
    sub: "Not a brand. Not an app. A universe.",
    desc: "Planning your niche with beauty, clarity and intention.",
    pillars: ["language", "fashion", "media", "internet culture"],
    statements: ["not a brand.", "not an app.", "a universe."],
    scroll: "scroll",
  },
  marquee: ["Branding", "UGC", "Photography", "Languages", "Events", "Digital Products", "Fashion"],
  explore: {
    eyebrow: "Explore the Universe",
    title: "Six worlds, one universe",
    sub: "Creativity, languages, organization, content creation and digital products — all in one beautiful ecosystem.",
    cards: [
      { title: "Languages", desc: "A modern language-learning experience built around quizzes, challenges and weekly updates." },
      { title: "Creative Studio", desc: "Branding, strategy and aesthetic direction to help you discover and communicate your identity." },
      { title: "UGC & Media", desc: "Reels, photography and content that connect brands with real people." },
      { title: "Digital Goods", desc: "Planners, templates, wallpapers and PDFs — a beautiful, personalisable catalogue." },
      { title: "Virtual Assistance", desc: "Save time and stay organised with reliable, human support." },
      { title: "Event Planning", desc: "From birthdays to launches — every detail, beautifully planned." },
    ],
  },
  home: {
    servicesTitle: "What I create",
    servicesSub: "A creative universe blending strategy, aesthetics, languages and internet culture.",
    statLabel: ["Projects & growing", "Languages supported", "Based in"],
    statValue: ["2", "5", "Italy"],
    based: "Italy",
  },
  about: {
    eyebrow: "About",
    title: "Behind every project, there is a person.",
    greeting: "Hi, I'm Ana Júlia Botelho.",
    founder: "Founder of Planicchio.",
    story: [
      "Born from a passion for languages, creativity and internet culture, Planicchio was created in Italy with the belief that every person, brand and idea deserves its own unique space.",
      "What started as a personal project grew into a digital universe where aesthetics, organisation, education and creativity meet.",
      "Today, Planicchio combines language learning, digital products, content creation, branding and personalised support — always with a human touch.",
    ],
    closing: "Because behind every project, there is a person. And every person deserves a plan for their niche.",
    originTitle: "Where the name comes from",
    origin: "The name Planicchio was born from the union of Plan (planning) and Nicchio (niche / space). In Italy we believe beauty lives in the details. Planicchio exists to plan your niche — your unique space in the world.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Internet-native", d: "Fluent in trends, aesthetics and the language of attention." },
      { t: "Multilingual", d: "Italian, Portuguese, English, Spanish & French — without borders." },
      { t: "Editorial", d: "Magazine-grade visuals with a modern, minimal soul." },
      { t: "Human", d: "Behind every project, there is a person." },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Everything you need to shine",
    sub: "Modular services — pick what you need, scale when you grow.",
    editable: "Editable card",
    items: [
      { title: "Branding & Marketing", desc: "Identity, strategy, content strategy, color guidance and personal brand development — a clear, multilingual vision.", tag: "Strategy" },
      { title: "UGC & Photography", desc: "Partnerships, creative photos and videos. I'm also an actress and dancer with a background in theatre, dance and styling.", tag: "Content" },
      { title: "Virtual Assistance", desc: "Email management, scheduling, research, social support and digital organisation for people and shops.", tag: "Support" },
      { title: "Event Planning", desc: "Checklists, timelines, guest organisation and personalised support — I plan the details, you enjoy the moment.", tag: "Events" },
      { title: "Languages Help", desc: "Support in Italian, English, Portuguese, Spanish and French — translations, tips and simple courses.", tag: "Languages" },
      { title: "Digital Stationery", desc: "Planners, templates, icons, menus and PDFs designed to be beautiful, useful and fully personalisable.", tag: "Products" },
      { title: "Fashion & Creative Direction", desc: "Styling, moodboards and full creative direction to bring your aesthetic vision to life.", tag: "Fashion" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Selected work & inspiration",
    sub: "A living gallery of videos, editorials and case studies.",
    filters: ["All", "Branding", "Fashion", "Social", "Before / After"],
    reels: "Reels preview",
    items: [
      { title: "Brand & Beyond", cat: "Branding" },
      { title: "Editorial No.7", cat: "Fashion" },
      { title: "Reel Series", cat: "Social" },
      { title: "Identity Refresh", cat: "Before / After" },
      { title: "Sunset Campaign", cat: "Fashion" },
      { title: "Studio Launch", cat: "Social" },
      { title: "Atelier Visuals", cat: "Branding" },
      { title: "Golden Hour", cat: "Fashion" },
    ],
  },
  ugc: {
    eyebrow: "UGC & Media",
    title: "Content that feels real",
    sub: "A mix of TikTok, Pinterest and a professional creator portfolio.",
    desc: "Creative content designed to connect brands with real people.",
    services: [
      "UGC Videos",
      "Product Reviews",
      "Unboxings",
      "Lifestyle Content",
      "Fashion Content",
      "Photography",
      "Short-form Videos",
      "Voiceovers",
      "Storytelling",
      "Brand Partnerships",
    ],
  },
  app: {
    eyebrow: "Planicchio Languages",
    title: "Learn with fun",
    sub: "Planicchio Languages is a modern language-learning experience designed around quizzes, challenges, practical learning and weekly updates.",
    learnFun: "Learn with fun",
    features: [
      { t: "Weekly updates", d: "Fresh lessons and challenges every week." },
      { t: "VIP area", d: "Exclusive content and personalised guidance." },
      { t: "Multiple languages", d: "Italian, English, Portuguese, Spanish and French." },
      { t: "Community-driven", d: "Learn together with a supportive community." },
      { t: "Interactive quizzes", d: "Test yourself and stay motivated." },
      { t: "Practical exercises", d: "Real-life learning you can actually use." },
    ],
    vipTitle: "A plan made just for you",
    vipSub: "Translations, tips and simple courses for a minimal price — plus personalised guidance whenever you need it.",
    pricing: [
      { name: "Free", price: "€0", period: "", perks: ["Daily basics", "Word of the week", "5 languages"] },
      { name: "Plus", price: "€2", period: "/mo", perks: ["More lessons & tips", "Translations help", "Practice resources"], featured: true },
      { name: "Personalised", price: "Custom", period: "", perks: ["A plan built for you", "Private guidance", "Goals at your pace"] },
    ],
    testimonials: [
      { quote: "It's really good and totally worth it.", name: "A.", role: "Learner" },
      { quote: "The creator made a special plan just for me — exactly what I needed.", name: "M.", role: "Personalised plan" },
      { quote: "Simple, beautiful and it actually works.", name: "L.", role: "Plus user" },
    ],
  },
  products: {
    eyebrow: "Digital Goods",
    title: "A beautiful visual catalogue",
    sub: "Everything online — and everything personalisable for you.",
    shop: "Shop now open",
    personalize: "Every product is fully personalisable — just €2 each.",
    featured: {
      badge: "Fixed product",
      title: "The Planicchio Planner",
      desc: "My signature planner with many options inside — vision board, mood tracker, language lessons, yearly & monthly calendars and more. Fully customisable to fit you.",
      price: "€2",
    },
    items: [
      { title: "Planners", desc: "Daily, weekly & yearly planners in warm tones.", price: "€2" },
      { title: "Journals", desc: "Journals and lists for everyday intention.", price: "€2" },
      { title: "Checklists", desc: "Clean checklists for any routine or project.", price: "€2" },
      { title: "Wallpapers", desc: "Phone & desktop wallpapers in the Planicchio mood.", price: "€2" },
      { title: "Templates", desc: "Editable templates for reels, posts and stories.", price: "€2" },
      { title: "Digital Stickers", desc: "Aesthetic sticker packs for your planners.", price: "€2" },
      { title: "Icons", desc: "Aesthetic icon packs for your apps & socials.", price: "€2" },
      { title: "Menu Planners", desc: "Beautiful menu layouts for shops & events.", price: "€2" },
      { title: "Travel Guides", desc: "Guides & lists to plan trips the smart way.", price: "€2" },
      { title: "Coloring Books", desc: "Printable coloring pages to slow down and create.", price: "€2" },
      { title: "E-books & PDFs", desc: "Readable, useful digital books and PDFs.", price: "€2" },
      { title: "Custom Designs", desc: "Bespoke digital pieces made just for you.", price: "€2" },
    ],
  },
  social: {
    eyebrow: "Social Media",
    title: "Follow the universe",
    sub: "Daily aesthetics, behind the scenes and new drops.",
    handle: "@planicchio",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's create something beautiful together.",
    sub: "Collaborations, inquiries and good ideas — I'm all ears.",
    beautiful: "Let's create something beautiful together.",
    name: "Name",
    email: "Email",
    type: "Service of Interest",
    message: "Message",
    send: "Send inquiry",
    or: "Or reach me directly",
    socials: "Follow the journey",
  },
  footer: { tagline: "A digital universe — a plain plan for every niche.", rights: "All rights reserved.", made: "Made with care in Italy" },
};

const it: Content = {
  nav: { home: "Home", about: "Chi sono", services: "Servizi", portfolio: "Portfolio", app: "Lingue", products: "Prodotti", contact: "Contatti" },
  cta: {
    work: "Lavora con me",
    explore: "Esplora l'universo",
    discover: "Scopri",
    getInTouch: "Contattami",
    viewAll: "Vedi tutto",
    comingSoon: "Prossimamente",
    learnMore: "Scopri di più",
    order: "Ordina dal form",
    join: "Iscriviti ora",
    viewPortfolio: "Vedi il portfolio UGC",
    watch: "Guarda i contenuti",
    visitApp: "Apri l'app",
  },
  hero: {
    eyebrow: "Made in Italy · Visione globale",
    line1: "Planicchio",
    tag: "un universo digitale",
    sub: "Non un brand. Non un'app. Un universo.",
    desc: "Pianifico il tuo nicchio con bellezza, chiarezza e intenzione.",
    pillars: ["lingua", "moda", "media", "cultura di internet"],
    statements: ["non un brand.", "non un'app.", "un universo."],
    scroll: "scorri",
  },
  marquee: ["Branding", "UGC", "Fotografia", "Lingue", "Eventi", "Prodotti Digitali", "Moda"],
  explore: {
    eyebrow: "Esplora l'universo",
    title: "Sei mondi, un universo",
    sub: "Creatività, lingue, organizzazione, contenuti e prodotti digitali — in un unico ecosistema.",
    cards: [
      { title: "Lingue", desc: "Un'esperienza moderna per imparare le lingue, fatta di quiz, sfide e aggiornamenti settimanali." },
      { title: "Studio Creativo", desc: "Branding, strategia e direzione estetica per scoprire e comunicare la tua identità." },
      { title: "UGC & Media", desc: "Reels, fotografia e contenuti che connettono i brand con persone reali." },
      { title: "Prodotti Digitali", desc: "Planner, template, wallpaper e PDF — un catalogo bello e personalizzabile." },
      { title: "Assistenza Virtuale", desc: "Risparmia tempo e resta organizzato con un supporto affidabile e umano." },
      { title: "Organizzazione Eventi", desc: "Dai compleanni ai lanci — ogni dettaglio, pianificato con cura." },
    ],
  },
  home: {
    servicesTitle: "Cosa creo",
    servicesSub: "Un universo creativo che unisce strategia, estetica, lingue e cultura di internet.",
    statLabel: ["Progetti & in crescita", "Lingue supportate", "Con sede in"],
    statValue: ["2", "5", "Italia"],
    based: "Italia",
  },
  about: {
    eyebrow: "Chi sono",
    title: "Dietro ogni progetto c'è una persona.",
    greeting: "Ciao, sono Ana Júlia Botelho.",
    founder: "Fondatrice di Planicchio.",
    story: [
      "Nata da una passione per le lingue, la creatività e la cultura di internet, Planicchio è stata creata in Italia con la convinzione che ogni persona, brand e idea meriti il proprio spazio unico.",
      "Quello che è iniziato come un progetto personale è cresciuto fino a diventare un universo digitale dove estetica, organizzazione, educazione e creatività si incontrano.",
      "Oggi Planicchio unisce apprendimento delle lingue, prodotti digitali, creazione di contenuti, branding e supporto personalizzato — sempre con un tocco umano.",
    ],
    closing: "Perché dietro ogni progetto c'è una persona. E ogni persona merita un piano per il proprio nicchio.",
    originTitle: "Da dove nasce il nome",
    origin: "Il nome Planicchio nasce dall'unione di Plan (pianificazione) e Nicchio (nicchia / spazio). In Italia crediamo che la bellezza viva nei dettagli. Planicchio esiste per pianificare il tuo nicchio — il tuo spazio unico nel mondo.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Nativa digitale", d: "Fluente in trend, estetica e linguaggio dell'attenzione." },
      { t: "Multilingue", d: "Italiano, portoghese, inglese, spagnolo e francese — senza confini." },
      { t: "Editoriale", d: "Visual da rivista con un'anima moderna e minimale." },
      { t: "Umana", d: "Dietro ogni progetto c'è una persona." },
    ],
  },
  services: {
    eyebrow: "Servizi",
    title: "Tutto ciò che ti serve per brillare",
    sub: "Servizi modulari — scegli ciò che ti serve, cresci quando vuoi.",
    editable: "Card modificabile",
    items: [
      { title: "Branding & Marketing", desc: "Identità, strategia, content strategy, guida ai colori e sviluppo del personal brand — una visione chiara e multilingue.", tag: "Strategia" },
      { title: "UGC & Fotografia", desc: "Collaborazioni, foto e video creativi. Sono anche attrice e ballerina, con un background in teatro, danza e styling.", tag: "Contenuti" },
      { title: "Assistenza Virtuale", desc: "Gestione email, agenda, ricerche, supporto social e organizzazione digitale per persone e negozi.", tag: "Supporto" },
      { title: "Organizzazione Eventi", desc: "Checklist, timeline, organizzazione ospiti e supporto personalizzato — io penso ai dettagli, tu goditi il momento.", tag: "Eventi" },
      { title: "Aiuto con le Lingue", desc: "Supporto in italiano, inglese, portoghese, spagnolo e francese — traduzioni, consigli e corsi semplici.", tag: "Lingue" },
      { title: "Cancelleria Digitale", desc: "Planner, template, icone, menu e PDF pensati per essere belli, utili e completamente personalizzabili.", tag: "Prodotti" },
      { title: "Moda & Direzione Creativa", desc: "Styling, moodboard e direzione creativa completa per dare vita alla tua visione estetica.", tag: "Moda" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Lavori selezionati & ispirazione",
    sub: "Una galleria viva di video, editoriali e case study.",
    filters: ["Tutti", "Branding", "Moda", "Social", "Prima / Dopo"],
    reels: "Anteprima reels",
    items: [
      { title: "Brand & Beyond", cat: "Branding" },
      { title: "Editorial No.7", cat: "Moda" },
      { title: "Serie Reel", cat: "Social" },
      { title: "Restyling Identità", cat: "Prima / Dopo" },
      { title: "Campagna Sunset", cat: "Moda" },
      { title: "Lancio Studio", cat: "Social" },
      { title: "Visual Atelier", cat: "Branding" },
      { title: "Golden Hour", cat: "Moda" },
    ],
  },
  ugc: {
    eyebrow: "UGC & Media",
    title: "Contenuti che sembrano veri",
    sub: "Un mix tra TikTok, Pinterest e un portfolio professionale da creator.",
    desc: "Contenuti creativi pensati per connettere i brand con persone reali.",
    services: [
      "Video UGC",
      "Recensioni Prodotti",
      "Unboxing",
      "Contenuti Lifestyle",
      "Contenuti Moda",
      "Fotografia",
      "Video Brevi",
      "Voiceover",
      "Storytelling",
      "Collaborazioni Brand",
    ],
  },
  app: {
    eyebrow: "Planicchio Lingue",
    title: "Impara divertendoti",
    sub: "Planicchio Lingue è un'esperienza moderna per imparare le lingue, costruita su quiz, sfide, apprendimento pratico e aggiornamenti settimanali.",
    learnFun: "Impara divertendoti",
    features: [
      { t: "Aggiornamenti settimanali", d: "Nuove lezioni e sfide ogni settimana." },
      { t: "Area VIP", d: "Contenuti esclusivi e guida personalizzata." },
      { t: "Più lingue", d: "Italiano, inglese, portoghese, spagnolo e francese." },
      { t: "Guidato dalla community", d: "Impara insieme a una community che ti sostiene." },
      { t: "Quiz interattivi", d: "Mettiti alla prova e resta motivato." },
      { t: "Esercizi pratici", d: "Apprendimento reale che puoi usare davvero." },
    ],
    vipTitle: "Un piano creato apposta per te",
    vipSub: "Traduzioni, consigli e corsi semplici a un prezzo minimo — più una guida personalizzata quando ti serve.",
    pricing: [
      { name: "Free", price: "€0", period: "", perks: ["Basi giornaliere", "Parola della settimana", "5 lingue"] },
      { name: "Plus", price: "€2", period: "/mese", perks: ["Più lezioni e consigli", "Aiuto con le traduzioni", "Risorse per esercitarsi"], featured: true },
      { name: "Personalizzato", price: "Su misura", period: "", perks: ["Un piano creato per te", "Guida privata", "Obiettivi al tuo ritmo"] },
    ],
    testimonials: [
      { quote: "È davvero bello e ne vale assolutamente la pena.", name: "A.", role: "Studente" },
      { quote: "La creatrice ha fatto un piano speciale solo per me — proprio ciò che mi serviva.", name: "M.", role: "Piano personalizzato" },
      { quote: "Semplice, bello e funziona davvero.", name: "L.", role: "Utente Plus" },
    ],
  },
  products: {
    eyebrow: "Prodotti Digitali",
    title: "Un catalogo visivo bellissimo",
    sub: "Tutto online — e tutto personalizzabile per te.",
    shop: "Shop ora aperto",
    personalize: "Ogni prodotto è completamente personalizzabile — solo €2 ciascuno.",
    featured: {
      badge: "Prodotto fisso",
      title: "Il Planner Planicchio",
      desc: "Il mio planner con tante opzioni all'interno — vision board, mood tracker, lezioni di lingua, calendari annuali e mensili e altro. Completamente personalizzabile su di te.",
      price: "€2",
    },
    items: [
      { title: "Planner", desc: "Planner giornalieri, settimanali e annuali in tonalità calde.", price: "€2" },
      { title: "Journal", desc: "Journal e liste per l'intenzione di ogni giorno.", price: "€2" },
      { title: "Checklist", desc: "Checklist pulite per ogni routine o progetto.", price: "€2" },
      { title: "Wallpaper", desc: "Sfondi per telefono e desktop in stile Planicchio.", price: "€2" },
      { title: "Template", desc: "Template modificabili per reel, post e storie.", price: "€2" },
      { title: "Sticker Digitali", desc: "Pacchetti di sticker estetici per i tuoi planner.", price: "€2" },
      { title: "Icone", desc: "Pacchetti di icone estetiche per app e social.", price: "€2" },
      { title: "Menu", desc: "Layout di menu eleganti per negozi ed eventi.", price: "€2" },
      { title: "Guide di Viaggio", desc: "Guide e liste per pianificare i viaggi in modo smart.", price: "€2" },
      { title: "Libri da Colorare", desc: "Pagine da colorare stampabili per rallentare e creare.", price: "€2" },
      { title: "E-book & PDF", desc: "Libri digitali e PDF utili e leggibili.", price: "€2" },
      { title: "Design Personalizzati", desc: "Pezzi digitali su misura creati apposta per te.", price: "€2" },
    ],
  },
  social: {
    eyebrow: "Social Media",
    title: "Segui l'universo",
    sub: "Estetica quotidiana, dietro le quinte e nuove uscite.",
    handle: "@planicchio",
  },
  contact: {
    eyebrow: "Contatti",
    title: "Creiamo insieme qualcosa di bello.",
    sub: "Collaborazioni, richieste e belle idee — sono tutta orecchie.",
    beautiful: "Creiamo insieme qualcosa di bello.",
    name: "Nome",
    email: "Email",
    type: "Servizio di interesse",
    message: "Messaggio",
    send: "Invia richiesta",
    or: "Oppure scrivimi direttamente",
    socials: "Segui il viaggio",
  },
  footer: { tagline: "Un universo digitale — a plain plan for every niche.", rights: "Tutti i diritti riservati.", made: "Fatto con cura in Italia" },
};

const pt: Content = {
  nav: { home: "Início", about: "Sobre", services: "Serviços", portfolio: "Portfólio", app: "Línguas", products: "Produtos", contact: "Contato" },
  cta: {
    work: "Trabalhe comigo",
    explore: "Explore o universo",
    discover: "Descobrir",
    getInTouch: "Fale comigo",
    viewAll: "Ver tudo",
    comingSoon: "Em breve",
    learnMore: "Saiba mais",
    order: "Pedir pelo formulário",
    join: "Participe agora",
    viewPortfolio: "Ver portfólio UGC",
    watch: "Assista ao conteúdo",
    visitApp: "Abrir o app",
  },
  hero: {
    eyebrow: "Feito na Itália · Pensando global",
    line1: "Planicchio",
    tag: "um universo digital",
    sub: "Não é uma marca. Não é um app. É um universo.",
    desc: "Planejo o seu nicho com beleza, clareza e intenção.",
    pillars: ["língua", "moda", "mídia", "cultura da internet"],
    statements: ["não é uma marca.", "não é um app.", "é um universo."],
    scroll: "rolar",
  },
  marquee: ["Branding", "UGC", "Fotografia", "Línguas", "Eventos", "Produtos Digitais", "Moda"],
  explore: {
    eyebrow: "Explore o universo",
    title: "Seis mundos, um universo",
    sub: "Criatividade, línguas, organização, criação de conteúdo e produtos digitais — em um só ecossistema.",
    cards: [
      { title: "Línguas", desc: "Uma experiência moderna de aprender línguas com quizzes, desafios e atualizações semanais." },
      { title: "Estúdio Criativo", desc: "Branding, estratégia e direção estética para descobrir e comunicar a sua identidade." },
      { title: "UGC & Mídia", desc: "Reels, fotografia e conteúdo que conectam marcas a pessoas reais." },
      { title: "Produtos Digitais", desc: "Planners, templates, wallpapers e PDFs — um catálogo lindo e personalizável." },
      { title: "Assistência Virtual", desc: "Ganhe tempo e fique organizado com um suporte confiável e humano." },
      { title: "Planejar Eventos", desc: "De aniversários a lançamentos — cada detalhe, lindamente planejado." },
    ],
  },
  home: {
    servicesTitle: "O que eu crio",
    servicesSub: "Um universo criativo que une estratégia, estética, línguas e cultura da internet.",
    statLabel: ["Projetos & crescendo", "Línguas suportadas", "Sediada na"],
    statValue: ["2", "5", "Itália"],
    based: "Itália",
  },
  about: {
    eyebrow: "Sobre",
    title: "Por trás de cada projeto, há uma pessoa.",
    greeting: "Oi, eu sou a Ana Júlia Botelho.",
    founder: "Fundadora da Planicchio.",
    story: [
      "Nascida de uma paixão por línguas, criatividade e cultura da internet, a Planicchio foi criada na Itália com a crença de que cada pessoa, marca e ideia merece o seu próprio espaço único.",
      "O que começou como um projeto pessoal cresceu até virar um universo digital onde estética, organização, educação e criatividade se encontram.",
      "Hoje, a Planicchio combina aprendizado de línguas, produtos digitais, criação de conteúdo, branding e suporte personalizado — sempre com um toque humano.",
    ],
    closing: "Porque por trás de cada projeto, há uma pessoa. E cada pessoa merece um plano para o seu nicho.",
    originTitle: "De onde vem o nome",
    origin: "O nome Planicchio nasceu da união de Plan (planejamento) com Nicchio (nicho / espaço). Na Itália, acreditamos que a beleza está nos detalhes. A Planicchio existe para planejar o seu nicho — o seu espaço único no mundo.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Nativa da internet", d: "Fluente em trends, estética e na linguagem da atenção." },
      { t: "Multilíngue", d: "Italiano, português, inglês, espanhol e francês — sem fronteiras." },
      { t: "Editorial", d: "Visual de revista com uma alma moderna e minimalista." },
      { t: "Humana", d: "Por trás de cada projeto, há uma pessoa." },
    ],
  },
  services: {
    eyebrow: "Serviços",
    title: "Tudo o que você precisa para brilhar",
    sub: "Serviços modulares — escolha o que precisa, cresça quando quiser.",
    editable: "Card editável",
    items: [
      { title: "Branding & Marketing", desc: "Identidade, estratégia, estratégia de conteúdo, orientação de cores e desenvolvimento de marca pessoal — uma visão clara e multilíngue.", tag: "Estratégia" },
      { title: "UGC & Fotografia", desc: "Parcerias, fotos e vídeos criativos. Também sou atriz e dançarina, com bagagem em teatro, dança e styling.", tag: "Conteúdo" },
      { title: "Assistência Virtual", desc: "Gestão de emails, agenda, pesquisas, suporte em redes e organização digital para pessoas e lojas.", tag: "Suporte" },
      { title: "Planejar Eventos", desc: "Checklists, cronogramas, organização de convidados e suporte personalizado — eu cuido dos detalhes, você aproveita o momento.", tag: "Eventos" },
      { title: "Ajuda com Línguas", desc: "Suporte em italiano, inglês, português, espanhol e francês — traduções, dicas e cursos simples.", tag: "Línguas" },
      { title: "Papelaria Digital", desc: "Planners, templates, ícones, cardápios e PDFs feitos para serem bonitos, úteis e totalmente personalizáveis.", tag: "Produtos" },
      { title: "Moda & Direção Criativa", desc: "Styling, moodboards e direção criativa completa para dar vida à sua visão estética.", tag: "Moda" },
    ],
  },
  portfolio: {
    eyebrow: "Portfólio",
    title: "Trabalhos selecionados & inspiração",
    sub: "Uma galeria viva de vídeos, editoriais e cases.",
    filters: ["Tudo", "Branding", "Moda", "Social", "Antes / Depois"],
    reels: "Prévia dos reels",
    items: [
      { title: "Brand & Beyond", cat: "Branding" },
      { title: "Editorial No.7", cat: "Moda" },
      { title: "Série de Reels", cat: "Social" },
      { title: "Renovação de Identidade", cat: "Antes / Depois" },
      { title: "Campanha Sunset", cat: "Moda" },
      { title: "Lançamento do Estúdio", cat: "Social" },
      { title: "Visuais de Atelier", cat: "Branding" },
      { title: "Golden Hour", cat: "Moda" },
    ],
  },
  ugc: {
    eyebrow: "UGC & Mídia",
    title: "Conteúdo que parece real",
    sub: "Uma mistura de TikTok, Pinterest e um portfólio profissional de criadora.",
    desc: "Conteúdo criativo feito para conectar marcas a pessoas reais.",
    services: [
      "Vídeos UGC",
      "Reviews de Produtos",
      "Unboxings",
      "Conteúdo Lifestyle",
      "Conteúdo de Moda",
      "Fotografia",
      "Vídeos Curtos",
      "Voiceovers",
      "Storytelling",
      "Parcerias com Marcas",
    ],
  },
  app: {
    eyebrow: "Planicchio Línguas",
    title: "Aprenda se divertindo",
    sub: "Planicchio Línguas é uma experiência moderna de aprender línguas, feita com quizzes, desafios, aprendizado prático e atualizações semanais.",
    learnFun: "Aprenda se divertindo",
    features: [
      { t: "Atualizações semanais", d: "Novas lições e desafios toda semana." },
      { t: "Área VIP", d: "Conteúdo exclusivo e orientação personalizada." },
      { t: "Várias línguas", d: "Italiano, inglês, português, espanhol e francês." },
      { t: "Movido pela comunidade", d: "Aprenda junto com uma comunidade que apoia." },
      { t: "Quizzes interativos", d: "Teste-se e fique motivado." },
      { t: "Exercícios práticos", d: "Aprendizado real que você realmente usa." },
    ],
    vipTitle: "Um plano feito só para você",
    vipSub: "Traduções, dicas e cursos simples por um preço mínimo — além de orientação personalizada sempre que precisar.",
    pricing: [
      { name: "Free", price: "€0", period: "", perks: ["Básico diário", "Palavra da semana", "5 línguas"] },
      { name: "Plus", price: "€2", period: "/mês", perks: ["Mais lições e dicas", "Ajuda com traduções", "Recursos para praticar"], featured: true },
      { name: "Personalizado", price: "Sob medida", period: "", perks: ["Um plano feito para você", "Orientação privada", "Objetivos no seu ritmo"] },
    ],
    testimonials: [
      { quote: "É muito bom e vale totalmente a pena.", name: "A.", role: "Aluna" },
      { quote: "A criadora fez um plano especial só para mim — exatamente o que eu precisava.", name: "M.", role: "Plano personalizado" },
      { quote: "Simples, bonito e realmente funciona.", name: "L.", role: "Usuária Plus" },
    ],
  },
  products: {
    eyebrow: "Produtos Digitais",
    title: "Um catálogo visual lindo",
    sub: "Tudo online — e tudo personalizável para você.",
    shop: "Loja aberta",
    personalize: "Cada produto é totalmente personalizável — apenas €2 cada.",
    featured: {
      badge: "Produto fixo",
      title: "O Planner Planicchio",
      desc: "Meu planner com várias opções dentro — vision board, mood tracker, lições de língua, calendários anuais e mensais e muito mais. Totalmente personalizável para você.",
      price: "€2",
    },
    items: [
      { title: "Planners", desc: "Planners diários, semanais e anuais em tons quentes.", price: "€2" },
      { title: "Journals", desc: "Journals e listas para a intenção do dia a dia.", price: "€2" },
      { title: "Checklists", desc: "Checklists limpas para qualquer rotina ou projeto.", price: "€2" },
      { title: "Wallpapers", desc: "Papéis de parede para celular e desktop no clima Planicchio.", price: "€2" },
      { title: "Templates", desc: "Templates editáveis para reels, posts e stories.", price: "€2" },
      { title: "Stickers Digitais", desc: "Packs de stickers estéticos para os seus planners.", price: "€2" },
      { title: "Ícones", desc: "Packs de ícones estéticos para apps e redes.", price: "€2" },
      { title: "Cardápios", desc: "Layouts de cardápio lindos para lojas e eventos.", price: "€2" },
      { title: "Guias de Viagem", desc: "Guias e listas para planejar viagens de um jeito esperto.", price: "€2" },
      { title: "Livros de Colorir", desc: "Páginas para colorir e imprimir, para desacelerar e criar.", price: "€2" },
      { title: "E-books & PDFs", desc: "Livros digitais e PDFs úteis e legíveis.", price: "€2" },
      { title: "Designs Personalizados", desc: "Peças digitais sob medida feitas só para você.", price: "€2" },
    ],
  },
  social: {
    eyebrow: "Redes Sociais",
    title: "Acompanhe o universo",
    sub: "Estética diária, bastidores e novidades.",
    handle: "@planicchio",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos criar algo lindo juntos.",
    sub: "Colaborações, pedidos e boas ideias — sou toda ouvidos.",
    beautiful: "Vamos criar algo lindo juntos.",
    name: "Nome",
    email: "Email",
    type: "Serviço de interesse",
    message: "Mensagem",
    send: "Enviar pedido",
    or: "Ou fale comigo diretamente",
    socials: "Acompanhe a jornada",
  },
  footer: { tagline: "Um universo digital — a plain plan for every niche.", rights: "Todos os direitos reservados.", made: "Feito com carinho na Itália" },
};

const fr: Content = {
  nav: { home: "Accueil", about: "À propos", services: "Services", portfolio: "Portfolio", app: "Langues", products: "Produits", contact: "Contact" },
  cta: {
    work: "Travaillez avec moi",
    explore: "Explorez l'univers",
    discover: "Découvrir",
    getInTouch: "Me contacter",
    viewAll: "Tout voir",
    comingSoon: "Bientôt",
    learnMore: "En savoir plus",
    order: "Commander via le formulaire",
    join: "Rejoignez-nous",
    viewPortfolio: "Voir le portfolio UGC",
    watch: "Voir mon contenu",
    visitApp: "Ouvrir l'app",
  },
  hero: {
    eyebrow: "Fabriqué en Italie · Vision globale",
    line1: "Planicchio",
    tag: "un univers numérique",
    sub: "Pas une marque. Pas une app. Un univers.",
    desc: "Je planifie votre niche avec beauté, clarté et intention.",
    pillars: ["langue", "mode", "média", "culture internet"],
    statements: ["pas une marque.", "pas une app.", "un univers."],
    scroll: "défiler",
  },
  marquee: ["Branding", "UGC", "Photographie", "Langues", "Événements", "Produits Numériques", "Mode"],
  explore: {
    eyebrow: "Explorez l'univers",
    title: "Six mondes, un univers",
    sub: "Créativité, langues, organisation, création de contenu et produits numériques — un seul écosystème.",
    cards: [
      { title: "Langues", desc: "Une expérience moderne d'apprentissage des langues : quiz, défis et mises à jour hebdomadaires." },
      { title: "Studio Créatif", desc: "Branding, stratégie et direction esthétique pour découvrir et exprimer votre identité." },
      { title: "UGC & Média", desc: "Reels, photographie et contenus qui relient les marques à de vraies personnes." },
      { title: "Produits Numériques", desc: "Agendas, templates, fonds d'écran et PDF — un beau catalogue personnalisable." },
      { title: "Assistance Virtuelle", desc: "Gagnez du temps et restez organisé grâce à un support fiable et humain." },
      { title: "Organisation d'Événements", desc: "Des anniversaires aux lancements — chaque détail, joliment planifié." },
    ],
  },
  home: {
    servicesTitle: "Ce que je crée",
    servicesSub: "Un univers créatif mêlant stratégie, esthétique, langues et culture internet.",
    statLabel: ["Projets & en croissance", "Langues prises en charge", "Basée en"],
    statValue: ["2", "5", "Italie"],
    based: "Italie",
  },
  about: {
    eyebrow: "À propos",
    title: "Derrière chaque projet, il y a une personne.",
    greeting: "Bonjour, je suis Ana Júlia Botelho.",
    founder: "Fondatrice de Planicchio.",
    story: [
      "Née d'une passion pour les langues, la créativité et la culture internet, Planicchio a été créée en Italie avec la conviction que chaque personne, marque et idée mérite son propre espace unique.",
      "Ce qui a commencé comme un projet personnel est devenu un univers numérique où esthétique, organisation, éducation et créativité se rencontrent.",
      "Aujourd'hui, Planicchio réunit apprentissage des langues, produits numériques, création de contenu, branding et accompagnement personnalisé — toujours avec une touche humaine.",
    ],
    closing: "Parce que derrière chaque projet, il y a une personne. Et chaque personne mérite un plan pour sa niche.",
    originTitle: "D'où vient le nom",
    origin: "Le nom Planicchio est né de l'union de Plan (planification) et Nicchio (niche / espace). En Italie, nous croyons que la beauté vit dans les détails. Planicchio existe pour planifier votre niche — votre espace unique dans le monde.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Native d'internet", d: "À l'aise avec les tendances, l'esthétique et le langage de l'attention." },
      { t: "Multilingue", d: "Italien, portugais, anglais, espagnol et français — sans frontières." },
      { t: "Éditoriale", d: "Des visuels dignes d'un magazine, à l'âme moderne et minimale." },
      { t: "Humaine", d: "Derrière chaque projet, il y a une personne." },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Tout ce qu'il faut pour briller",
    sub: "Services modulaires — choisissez ce dont vous avez besoin, évoluez ensuite.",
    editable: "Carte modifiable",
    items: [
      { title: "Branding & Marketing", desc: "Identité, stratégie, stratégie de contenu, conseils couleurs et développement de marque personnelle — une vision claire et multilingue.", tag: "Stratégie" },
      { title: "UGC & Photographie", desc: "Partenariats, photos et vidéos créatives. Je suis aussi actrice et danseuse, avec une formation en théâtre, danse et stylisme.", tag: "Contenu" },
      { title: "Assistance Virtuelle", desc: "Gestion des emails, planning, recherches, support social et organisation numérique pour les particuliers et les boutiques.", tag: "Support" },
      { title: "Organisation d'Événements", desc: "Checklists, plannings, organisation des invités et accompagnement personnalisé — je gère les détails, vous profitez du moment.", tag: "Événements" },
      { title: "Aide aux Langues", desc: "Support en italien, anglais, portugais, espagnol et français — traductions, conseils et cours simples.", tag: "Langues" },
      { title: "Papeterie Numérique", desc: "Agendas, templates, icônes, menus et PDF conçus pour être beaux, utiles et entièrement personnalisables.", tag: "Produits" },
      { title: "Mode & Direction Créative", desc: "Stylisme, moodboards et direction créative complète pour donner vie à votre vision esthétique.", tag: "Mode" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Travaux sélectionnés & inspiration",
    sub: "Une galerie vivante de vidéos, éditoriaux et études de cas.",
    filters: ["Tout", "Branding", "Mode", "Social", "Avant / Après"],
    reels: "Aperçu des reels",
    items: [
      { title: "Brand & Beyond", cat: "Branding" },
      { title: "Editorial No.7", cat: "Mode" },
      { title: "Série de Reels", cat: "Social" },
      { title: "Refonte d'Identité", cat: "Avant / Après" },
      { title: "Campagne Sunset", cat: "Mode" },
      { title: "Lancement Studio", cat: "Social" },
      { title: "Visuels d'Atelier", cat: "Branding" },
      { title: "Golden Hour", cat: "Mode" },
    ],
  },
  ugc: {
    eyebrow: "UGC & Média",
    title: "Du contenu qui sonne vrai",
    sub: "Un mélange de TikTok, Pinterest et d'un portfolio de créatrice professionnelle.",
    desc: "Du contenu créatif conçu pour relier les marques à de vraies personnes.",
    services: [
      "Vidéos UGC",
      "Avis Produits",
      "Unboxings",
      "Contenu Lifestyle",
      "Contenu Mode",
      "Photographie",
      "Vidéos Courtes",
      "Voix off",
      "Storytelling",
      "Partenariats de Marque",
    ],
  },
  app: {
    eyebrow: "Planicchio Langues",
    title: "Apprenez en vous amusant",
    sub: "Planicchio Langues est une expérience moderne d'apprentissage des langues, pensée autour de quiz, défis, apprentissage pratique et mises à jour hebdomadaires.",
    learnFun: "Apprenez en vous amusant",
    features: [
      { t: "Mises à jour hebdo", d: "De nouvelles leçons et défis chaque semaine." },
      { t: "Espace VIP", d: "Contenu exclusif et accompagnement personnalisé." },
      { t: "Plusieurs langues", d: "Italien, anglais, portugais, espagnol et français." },
      { t: "Portée par la communauté", d: "Apprenez avec une communauté bienveillante." },
      { t: "Quiz interactifs", d: "Testez-vous et restez motivé." },
      { t: "Exercices pratiques", d: "Un apprentissage concret et réutilisable." },
    ],
    vipTitle: "Un plan rien que pour vous",
    vipSub: "Traductions, conseils et cours simples à petit prix — plus un accompagnement personnalisé quand vous en avez besoin.",
    pricing: [
      { name: "Free", price: "€0", period: "", perks: ["Bases quotidiennes", "Mot de la semaine", "5 langues"] },
      { name: "Plus", price: "€2", period: "/mois", perks: ["Plus de leçons et conseils", "Aide aux traductions", "Ressources de pratique"], featured: true },
      { name: "Personnalisé", price: "Sur mesure", period: "", perks: ["Un plan créé pour vous", "Accompagnement privé", "Objectifs à votre rythme"] },
    ],
    testimonials: [
      { quote: "C'est vraiment bien et ça en vaut totalement la peine.", name: "A.", role: "Apprenante" },
      { quote: "La créatrice m'a fait un plan rien que pour moi — exactement ce qu'il me fallait.", name: "M.", role: "Plan personnalisé" },
      { quote: "Simple, beau et ça marche vraiment.", name: "L.", role: "Utilisatrice Plus" },
    ],
  },
  products: {
    eyebrow: "Produits Numériques",
    title: "Un magnifique catalogue visuel",
    sub: "Tout en ligne — et tout personnalisable pour vous.",
    shop: "Boutique ouverte",
    personalize: "Chaque produit est entièrement personnalisable — seulement 2 € pièce.",
    featured: {
      badge: "Produit fixe",
      title: "L'Agenda Planicchio",
      desc: "Mon agenda signature avec de nombreuses options à l'intérieur — vision board, suivi d'humeur, leçons de langue, calendriers annuels et mensuels et plus encore. Entièrement personnalisable.",
      price: "€2",
    },
    items: [
      { title: "Agendas", desc: "Agendas quotidiens, hebdomadaires et annuels en tons chauds.", price: "€2" },
      { title: "Journaux", desc: "Journaux et listes pour l'intention de chaque jour.", price: "€2" },
      { title: "Checklists", desc: "Des checklists nettes pour toute routine ou projet.", price: "€2" },
      { title: "Fonds d'écran", desc: "Fonds d'écran téléphone et bureau dans l'esprit Planicchio.", price: "€2" },
      { title: "Templates", desc: "Templates modifiables pour reels, posts et stories.", price: "€2" },
      { title: "Stickers Numériques", desc: "Packs de stickers esthétiques pour vos agendas.", price: "€2" },
      { title: "Icônes", desc: "Packs d'icônes esthétiques pour vos apps et réseaux.", price: "€2" },
      { title: "Menus", desc: "De beaux menus pour boutiques et événements.", price: "€2" },
      { title: "Guides de Voyage", desc: "Guides et listes pour planifier vos voyages intelligemment.", price: "€2" },
      { title: "Livres de Coloriage", desc: "Pages à colorier imprimables pour ralentir et créer.", price: "€2" },
      { title: "E-books & PDF", desc: "Livres numériques et PDF utiles et lisibles.", price: "€2" },
      { title: "Designs Sur Mesure", desc: "Des pièces numériques créées rien que pour vous.", price: "€2" },
    ],
  },
  social: {
    eyebrow: "Réseaux Sociaux",
    title: "Suivez l'univers",
    sub: "Esthétique au quotidien, coulisses et nouveautés.",
    handle: "@planicchio",
  },
  contact: {
    eyebrow: "Contact",
    title: "Créons ensemble quelque chose de beau.",
    sub: "Collaborations, demandes et bonnes idées — je suis tout ouïe.",
    beautiful: "Créons ensemble quelque chose de beau.",
    name: "Nom",
    email: "Email",
    type: "Service souhaité",
    message: "Message",
    send: "Envoyer la demande",
    or: "Ou contactez-moi directement",
    socials: "Suivez le voyage",
  },
  footer: { tagline: "Un univers numérique — a plain plan for every niche.", rights: "Tous droits réservés.", made: "Fait avec soin en Italie" },
};

const es: Content = {
  nav: { home: "Inicio", about: "Sobre mí", services: "Servicios", portfolio: "Portfolio", app: "Idiomas", products: "Productos", contact: "Contacto" },
  cta: {
    work: "Trabaja conmigo",
    explore: "Explora el universo",
    discover: "Descubrir",
    getInTouch: "Contáctame",
    viewAll: "Ver todo",
    comingSoon: "Próximamente",
    learnMore: "Saber más",
    order: "Pedir por formulario",
    join: "Únete ahora",
    viewPortfolio: "Ver portfolio UGC",
    watch: "Ver mi contenido",
    visitApp: "Abrir la app",
  },
  hero: {
    eyebrow: "Hecho en Italia · Pensando global",
    line1: "Planicchio",
    tag: "un universo digital",
    sub: "No es una marca. No es una app. Es un universo.",
    desc: "Planifico tu nicho con belleza, claridad e intención.",
    pillars: ["lengua", "moda", "media", "cultura de internet"],
    statements: ["no es una marca.", "no es una app.", "es un universo."],
    scroll: "desliza",
  },
  marquee: ["Branding", "UGC", "Fotografía", "Idiomas", "Eventos", "Productos Digitales", "Moda"],
  explore: {
    eyebrow: "Explora el universo",
    title: "Seis mundos, un universo",
    sub: "Creatividad, idiomas, organización, creación de contenido y productos digitales — en un solo ecosistema.",
    cards: [
      { title: "Idiomas", desc: "Una experiencia moderna para aprender idiomas con quizzes, retos y novedades semanales." },
      { title: "Estudio Creativo", desc: "Branding, estrategia y dirección estética para descubrir y comunicar tu identidad." },
      { title: "UGC & Media", desc: "Reels, fotografía y contenido que conectan marcas con personas reales." },
      { title: "Productos Digitales", desc: "Planners, plantillas, fondos y PDFs — un catálogo bonito y personalizable." },
      { title: "Asistencia Virtual", desc: "Ahorra tiempo y mantente organizado con un apoyo fiable y humano." },
      { title: "Organización de Eventos", desc: "De cumpleaños a lanzamientos — cada detalle, bellamente planificado." },
    ],
  },
  home: {
    servicesTitle: "Lo que creo",
    servicesSub: "Un universo creativo que une estrategia, estética, idiomas y cultura de internet.",
    statLabel: ["Proyectos & creciendo", "Idiomas disponibles", "Con sede en"],
    statValue: ["2", "5", "Italia"],
    based: "Italia",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Detrás de cada proyecto, hay una persona.",
    greeting: "Hola, soy Ana Júlia Botelho.",
    founder: "Fundadora de Planicchio.",
    story: [
      "Nacida de una pasión por los idiomas, la creatividad y la cultura de internet, Planicchio fue creada en Italia con la creencia de que cada persona, marca e idea merece su propio espacio único.",
      "Lo que empezó como un proyecto personal creció hasta convertirse en un universo digital donde la estética, la organización, la educación y la creatividad se encuentran.",
      "Hoy, Planicchio combina aprendizaje de idiomas, productos digitales, creación de contenido, branding y apoyo personalizado — siempre con un toque humano.",
    ],
    closing: "Porque detrás de cada proyecto, hay una persona. Y cada persona merece un plan para su nicho.",
    originTitle: "De dónde viene el nombre",
    origin: "El nombre Planicchio nació de la unión de Plan (planificación) y Nicchio (nicho / espacio). En Italia creemos que la belleza vive en los detalles. Planicchio existe para planificar tu nicho — tu espacio único en el mundo.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Nativa de internet", d: "Fluida en tendencias, estética y el lenguaje de la atención." },
      { t: "Multilingüe", d: "Italiano, portugués, inglés, español y francés — sin fronteras." },
      { t: "Editorial", d: "Visuales de revista con un alma moderna y minimalista." },
      { t: "Humana", d: "Detrás de cada proyecto, hay una persona." },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Todo lo que necesitas para brillar",
    sub: "Servicios modulares — elige lo que necesitas, crece cuando quieras.",
    editable: "Tarjeta editable",
    items: [
      { title: "Branding & Marketing", desc: "Identidad, estrategia, estrategia de contenido, guía de color y desarrollo de marca personal — una visión clara y multilingüe.", tag: "Estrategia" },
      { title: "UGC & Fotografía", desc: "Colaboraciones, fotos y vídeos creativos. También soy actriz y bailarina, con formación en teatro, danza y estilismo.", tag: "Contenido" },
      { title: "Asistencia Virtual", desc: "Gestión de emails, agenda, investigación, apoyo en redes y organización digital para personas y tiendas.", tag: "Apoyo" },
      { title: "Organización de Eventos", desc: "Checklists, cronogramas, organización de invitados y apoyo personalizado — yo cuido los detalles, tú disfrutas el momento.", tag: "Eventos" },
      { title: "Ayuda con Idiomas", desc: "Apoyo en italiano, inglés, portugués, español y francés — traducciones, consejos y cursos sencillos.", tag: "Idiomas" },
      { title: "Papelería Digital", desc: "Planners, plantillas, iconos, menús y PDFs diseñados para ser bonitos, útiles y totalmente personalizables.", tag: "Productos" },
      { title: "Moda & Dirección Creativa", desc: "Estilismo, moodboards y dirección creativa completa para dar vida a tu visión estética.", tag: "Moda" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Trabajos seleccionados & inspiración",
    sub: "Una galería viva de vídeos, editoriales y casos de estudio.",
    filters: ["Todo", "Branding", "Moda", "Social", "Antes / Después"],
    reels: "Vista previa de reels",
    items: [
      { title: "Brand & Beyond", cat: "Branding" },
      { title: "Editorial No.7", cat: "Moda" },
      { title: "Serie de Reels", cat: "Social" },
      { title: "Renovación de Identidad", cat: "Antes / Después" },
      { title: "Campaña Sunset", cat: "Moda" },
      { title: "Lanzamiento de Estudio", cat: "Social" },
      { title: "Visuales de Atelier", cat: "Branding" },
      { title: "Golden Hour", cat: "Moda" },
    ],
  },
  ugc: {
    eyebrow: "UGC & Media",
    title: "Contenido que se siente real",
    sub: "Una mezcla de TikTok, Pinterest y un portfolio profesional de creadora.",
    desc: "Contenido creativo diseñado para conectar marcas con personas reales.",
    services: [
      "Vídeos UGC",
      "Reseñas de Productos",
      "Unboxings",
      "Contenido Lifestyle",
      "Contenido de Moda",
      "Fotografía",
      "Vídeos Cortos",
      "Voz en off",
      "Storytelling",
      "Colaboraciones con Marcas",
    ],
  },
  app: {
    eyebrow: "Planicchio Idiomas",
    title: "Aprende divirtiéndote",
    sub: "Planicchio Idiomas es una experiencia moderna para aprender idiomas, diseñada en torno a quizzes, retos, aprendizaje práctico y novedades semanales.",
    learnFun: "Aprende divirtiéndote",
    features: [
      { t: "Novedades semanales", d: "Nuevas lecciones y retos cada semana." },
      { t: "Área VIP", d: "Contenido exclusivo y orientación personalizada." },
      { t: "Varios idiomas", d: "Italiano, inglés, portugués, español y francés." },
      { t: "Impulsado por la comunidad", d: "Aprende junto a una comunidad que apoya." },
      { t: "Quizzes interactivos", d: "Ponte a prueba y mantente motivado." },
      { t: "Ejercicios prácticos", d: "Aprendizaje real que de verdad usas." },
    ],
    vipTitle: "Un plan hecho solo para ti",
    vipSub: "Traducciones, consejos y cursos sencillos por un precio mínimo — más orientación personalizada cuando la necesites.",
    pricing: [
      { name: "Free", price: "€0", period: "", perks: ["Básico diario", "Palabra de la semana", "5 idiomas"] },
      { name: "Plus", price: "€2", period: "/mes", perks: ["Más lecciones y consejos", "Ayuda con traducciones", "Recursos para practicar"], featured: true },
      { name: "Personalizado", price: "A medida", period: "", perks: ["Un plan hecho para ti", "Orientación privada", "Objetivos a tu ritmo"] },
    ],
    testimonials: [
      { quote: "Es muy bueno y vale totalmente la pena.", name: "A.", role: "Estudiante" },
      { quote: "La creadora hizo un plan especial solo para mí — justo lo que necesitaba.", name: "M.", role: "Plan personalizado" },
      { quote: "Simple, bonito y de verdad funciona.", name: "L.", role: "Usuaria Plus" },
    ],
  },
  products: {
    eyebrow: "Productos Digitales",
    title: "Un catálogo visual precioso",
    sub: "Todo online — y todo personalizable para ti.",
    shop: "Tienda abierta",
    personalize: "Cada producto es totalmente personalizable — solo €2 cada uno.",
    featured: {
      badge: "Producto fijo",
      title: "El Planner Planicchio",
      desc: "Mi planner insignia con muchas opciones dentro — vision board, mood tracker, lecciones de idioma, calendarios anuales y mensuales y más. Totalmente personalizable para ti.",
      price: "€2",
    },
    items: [
      { title: "Planners", desc: "Planners diarios, semanales y anuales en tonos cálidos.", price: "€2" },
      { title: "Journals", desc: "Journals y listas para la intención del día a día.", price: "€2" },
      { title: "Checklists", desc: "Checklists limpias para cualquier rutina o proyecto.", price: "€2" },
      { title: "Fondos de pantalla", desc: "Fondos para móvil y escritorio en el mood Planicchio.", price: "€2" },
      { title: "Plantillas", desc: "Plantillas editables para reels, posts y stories.", price: "€2" },
      { title: "Stickers Digitales", desc: "Packs de stickers estéticos para tus planners.", price: "€2" },
      { title: "Iconos", desc: "Packs de iconos estéticos para tus apps y redes.", price: "€2" },
      { title: "Menús", desc: "Bonitos menús para tiendas y eventos.", price: "€2" },
      { title: "Guías de Viaje", desc: "Guías y listas para planificar viajes de forma inteligente.", price: "€2" },
      { title: "Libros para Colorear", desc: "Páginas para colorear imprimibles para frenar y crear.", price: "€2" },
      { title: "E-books & PDFs", desc: "Libros digitales y PDFs útiles y legibles.", price: "€2" },
      { title: "Diseños Personalizados", desc: "Piezas digitales a medida hechas solo para ti.", price: "€2" },
    ],
  },
  social: {
    eyebrow: "Redes Sociales",
    title: "Sigue el universo",
    sub: "Estética diaria, detrás de cámaras y novedades.",
    handle: "@planicchio",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Creemos juntos algo hermoso.",
    sub: "Colaboraciones, consultas y buenas ideas — soy toda oídos.",
    beautiful: "Creemos juntos algo hermoso.",
    name: "Nombre",
    email: "Email",
    type: "Servicio de interés",
    message: "Mensaje",
    send: "Enviar consulta",
    or: "O contáctame directamente",
    socials: "Sigue el viaje",
  },
  footer: { tagline: "Un universo digital — a plain plan for every niche.", rights: "Todos los derechos reservados.", made: "Hecho con cariño en Italia" },
};

const dictionaries: Record<Lang, Content> = { en, it, pt, fr, es };
export const LANGS: Lang[] = ["en", "it", "pt", "fr", "es"];
export const APP_URL = "https://planicchioapp.vercel.app";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; c: Content };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("planicchio-lang") as Lang | null) : null;
    if (saved && LANGS.includes(saved)) setLangState(saved);
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
