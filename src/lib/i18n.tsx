import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "it" | "pt";

type Service = { title: string; desc: string; tag: string };
type Product = { title: string; desc: string; price: string };
type Plan = { name: string; price: string; period: string; perks: string[]; featured?: boolean };
type Testimonial = { quote: string; name: string; role: string };

type Content = {
  nav: { home: string; about: string; services: string; portfolio: string; app: string; products: string; contact: string };
  cta: { work: string; explore: string; discover: string; getInTouch: string; viewAll: string; comingSoon: string; learnMore: string; order: string };
  hero: { eyebrow: string; line1: string; tag: string; pillars: string[]; statements: string[]; sub: string; scroll: string };
  marquee: string[];
  home: { servicesTitle: string; servicesSub: string; statLabel: string[]; statValue: string[]; based: string };
  about: { eyebrow: string; title: string; p1: string; p2: string; p3: string; originTitle: string; origin: string; p4: string; tagline: string; values: { t: string; d: string }[] };
  services: { eyebrow: string; title: string; sub: string; items: Service[]; editable: string };
  portfolio: { eyebrow: string; title: string; sub: string; filters: string[]; items: { title: string; cat: string }[]; reels: string };
  app: { eyebrow: string; title: string; sub: string; features: { t: string; d: string }[]; vipTitle: string; vipSub: string; pricing: Plan[]; testimonials: Testimonial[] };
  products: { eyebrow: string; title: string; sub: string; items: Product[]; shop: string; personalize: string; featured: { badge: string; title: string; desc: string; price: string } };
  contact: { eyebrow: string; title: string; sub: string; name: string; email: string; type: string; message: string; send: string; or: string; socials: string };
  footer: { tagline: string; rights: string; made: string };
};

const en: Content = {
  nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", app: "Languages App", products: "Products", contact: "Contact" },
  cta: { work: "Work with me", explore: "explore the universe", discover: "Discover", getInTouch: "Get in touch", viewAll: "View all", comingSoon: "Coming soon", learnMore: "Learn more", order: "Order via form" },
  hero: {
    eyebrow: "Creative Studio · Made in Italy · Thinking globally",
    line1: "Planicchio",
    tag: "a digital universe",
    pillars: ["language", "fashion", "media", "internet culture"],
    statements: ["not a brand.", "not an app.", "a universe."],
    sub: "Planning, aesthetics and creativity for your unique space online. A plain plan for every niche.",
    scroll: "scroll",
  },
  marquee: ["Branding", "UGC", "Photography", "Languages", "Events", "Digital Products", "Fashion"],
  home: {
    servicesTitle: "What I create",
    servicesSub: "A creative universe blending strategy, aesthetics, languages and internet culture.",
    statLabel: ["Projects & growing", "Languages supported", "Based in"],
    statValue: ["2", "5", "Italy"],
    based: "Italy",
  },
  about: {
    eyebrow: "About Planicchio",
    title: "Plan your niche — your unique space in the world",
    p1: "Planicchio is a creative universe at the intersection of fashion, branding, languages and digital culture. I help people and brands turn ideas into immersive visual stories — with clarity, aesthetics and intention.",
    p2: "Living in Italy and speaking Italian, Portuguese, English, Spanish and French, I bring a multicultural, internet-native perspective to every project — thinking locally, but always globally.",
    p3: "I'm also a young mum, so I know how to make every need work and adapt it to real life. From scroll-stopping content to full creative worlds, everything is crafted to feel premium, human and unmistakably yours.",
    originTitle: "Where the name comes from",
    origin: "The name Planicchio was born from the union of Plan (planning) and Nicchio (niche / space). In Italy we believe beauty lives in the details. Planicchio exists to plan your niche — your unique space in the world.",
    p4: "A plain plan for every niche.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Internet-native", d: "Fluent in trends, aesthetics and the language of attention." },
      { t: "Multilingual", d: "Italian, Portuguese, English, Spanish & French — without borders." },
      { t: "Editorial", d: "Magazine-grade visuals with a modern, minimal soul." },
      { t: "Adaptable", d: "A young mum's eye for making every need work in real life." },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Everything you need to shine",
    sub: "Modular services — pick what you need, scale when you grow.",
    editable: "Editable card",
    items: [
      { title: "Branding & Marketing", desc: "I help you reach the best of yourself and/or your brand, with identity, strategy and a clear, multilingual vision.", tag: "Strategy" },
      { title: "UGC & Photography", desc: "Partnerships, creative photos and videos with real quality. I'm also an actress, dancer and into fashion — I studied theatre, dance and styling — so I can help with anything that involves it.", tag: "Content" },
      { title: "Virtual Assistance", desc: "For people or shops who need help answering emails, getting organised, or who don't quite know how to navigate social media and the internet.", tag: "Support" },
      { title: "Event Planning", desc: "Need to throw an event but have no time to organise it? I plan the details so you can simply enjoy the moment.", tag: "Events" },
      { title: "Languages Help", desc: "A shop in Italy thinking globally: support in Italian, English, Portuguese, Spanish and French — translations, tips and simple courses for a minimal price.", tag: "Languages" },
      { title: "Digital Stationery", desc: "Planners, templates, icons, menus and PDFs designed to be beautiful, useful and fully personalisable.", tag: "Products" },
      { title: "Fashion & Creative Direction", desc: "Styling, moodboards and full creative direction — drawing on a background in theatre, dance and fashion.", tag: "Fashion" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Selected work & inspiration",
    sub: "A living gallery — videos and case studies dropping soon.",
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
  app: {
    eyebrow: "Languages App",
    title: "Learn languages the modern way",
    sub: "A beautifully designed app to learn languages — with translations, tips and simple courses, plus personalised plans made just for you.",
    features: [
      { t: "5 languages", d: "Italian, English, Portuguese, Spanish and French — pick where you start." },
      { t: "Bite-sized lessons", d: "Word of the week, tips and micro-lessons designed for real life." },
      { t: "Personalised plans", d: "The creator builds a special plan for each person and goal." },
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
    eyebrow: "Digital Products",
    title: "Tools to organise your creative life",
    sub: "Everything online — and everything personalisable for you.",
    shop: "Shop opening soon",
    personalize: "Every product is fully personalisable — just €2 each.",
    featured: {
      badge: "Fixed product",
      title: "The Planicchio Planner",
      desc: "My signature planner with many options inside — vision board, mood tracker, language lessons, yearly & monthly calendars and more. Fully customisable to fit you.",
      price: "€2",
    },
    items: [
      { title: "Planners", desc: "Daily, weekly & yearly planners in warm tones.", price: "€2" },
      { title: "Icons", desc: "Aesthetic icon packs for your apps & socials.", price: "€2" },
      { title: "Templates", desc: "Editable templates for reels, posts and stories.", price: "€2" },
      { title: "Menus", desc: "Beautiful menu layouts for shops & events.", price: "€2" },
      { title: "Checklists", desc: "Clean checklists for any routine or project.", price: "€2" },
      { title: "Wallpapers", desc: "Phone & desktop wallpapers in the Planicchio mood.", price: "€2" },
      { title: "Coloring Books", desc: "Printable coloring pages to slow down and create.", price: "€2" },
      { title: "Travel Hacks", desc: "Guides & lists to plan trips the smart way.", price: "€2" },
      { title: "Lists & Journals", desc: "Journals and lists for everyday intention.", price: "€2" },
      { title: "And more", desc: "New digital goodies added all the time.", price: "€2" },
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
  footer: { tagline: "A digital universe — a plain plan for every niche.", rights: "All rights reserved.", made: "Made with care in Italy" },
};

const it: Content = {
  nav: { home: "Home", about: "Chi sono", services: "Servizi", portfolio: "Portfolio", app: "App Lingue", products: "Prodotti", contact: "Contatti" },
  cta: { work: "Lavora con me", explore: "esplora l'universo", discover: "Scopri", getInTouch: "Contattami", viewAll: "Vedi tutto", comingSoon: "Prossimamente", learnMore: "Scopri di più", order: "Ordina dal form" },
  hero: {
    eyebrow: "Studio Creativo · Made in Italy · Visione globale",
    line1: "Planicchio",
    tag: "un universo digitale",
    pillars: ["lingua", "moda", "media", "cultura di internet"],
    statements: ["non un brand.", "non un'app.", "un universo."],
    sub: "Pianificazione, estetica e creatività per il tuo spazio unico online. A plain plan for every niche.",
    scroll: "scorri",
  },
  marquee: ["Branding", "UGC", "Fotografia", "Lingue", "Eventi", "Prodotti Digitali", "Moda"],
  home: {
    servicesTitle: "Cosa creo",
    servicesSub: "Un universo creativo che unisce strategia, estetica, lingue e cultura di internet.",
    statLabel: ["Progetti & in crescita", "Lingue supportate", "Con sede in"],
    statValue: ["2", "5", "Italia"],
    based: "Italia",
  },
  about: {
    eyebrow: "Chi è Planicchio",
    title: "Pianifica il tuo nicchio — il tuo spazio unico nel mondo",
    p1: "Planicchio è un universo creativo all'incrocio tra moda, branding, lingue e cultura digitale. Aiuto persone e brand a trasformare le idee in storie visive immersive — con chiarezza, estetica e intenzione.",
    p2: "Vivo in Italia e parlo italiano, portoghese, inglese, spagnolo e francese: porto una prospettiva multiculturale e nativa di internet in ogni progetto — pensando in locale, ma sempre in globale.",
    p3: "Sono anche una giovane mamma, quindi so come far funzionare ogni esigenza e adattarla alla vita reale. Dai contenuti che fermano lo scroll a interi mondi creativi, tutto è creato per sembrare premium, umano e inconfondibilmente tuo.",
    originTitle: "Da dove nasce il nome",
    origin: "Il nome Planicchio nasce dall'unione di Plan (pianificazione) e Nicchio (nicchia / spazio). In Italia crediamo che la bellezza viva nei dettagli. Planicchio esiste per pianificare il tuo nicchio — il tuo spazio unico nel mondo.",
    p4: "A plain plan for every niche.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Nativo digitale", d: "Fluente in trend, estetica e linguaggio dell'attenzione." },
      { t: "Multilingue", d: "Italiano, portoghese, inglese, spagnolo e francese — senza confini." },
      { t: "Editoriale", d: "Visual da rivista con un'anima moderna e minimale." },
      { t: "Adattabile", d: "Lo sguardo di una giovane mamma per far funzionare ogni esigenza." },
    ],
  },
  services: {
    eyebrow: "Servizi",
    title: "Tutto ciò che ti serve per brillare",
    sub: "Servizi modulari — scegli ciò che ti serve, cresci quando vuoi.",
    editable: "Card modificabile",
    items: [
      { title: "Branding & Marketing", desc: "Ti aiuto a tirare fuori il meglio di te e/o del tuo brand, con identità, strategia e una visione chiara e multilingue.", tag: "Strategia" },
      { title: "UGC & Fotografia", desc: "Collaborazioni, foto e video creativi di buona qualità. Sono anche attrice, ballerina e mi occupo di moda — ho studiato teatro, danza e styling — quindi posso aiutarti in tutto ciò che li riguarda.", tag: "Contenuti" },
      { title: "Assistenza Virtuale", desc: "Per persone o negozi che hanno bisogno di aiuto a rispondere alle email, organizzarsi o che non sanno bene come muoversi tra social e internet.", tag: "Supporto" },
      { title: "Organizzazione Eventi", desc: "Devi organizzare un evento ma non hai tempo? Penso io ai dettagli, così tu ti godi solo il momento.", tag: "Eventi" },
      { title: "Aiuto con le Lingue", desc: "Un negozio in Italia che pensa globalmente: supporto in italiano, inglese, portoghese, spagnolo e francese — traduzioni, consigli e corsi semplici a un prezzo minimo.", tag: "Lingue" },
      { title: "Cancelleria Digitale", desc: "Planner, template, icone, menu e PDF pensati per essere belli, utili e completamente personalizzabili.", tag: "Prodotti" },
      { title: "Moda & Direzione Creativa", desc: "Styling, moodboard e direzione creativa completa — con un background in teatro, danza e moda.", tag: "Moda" },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Lavori selezionati & ispirazione",
    sub: "Una galleria viva — video e case study in arrivo.",
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
  app: {
    eyebrow: "App Lingue",
    title: "Impara le lingue in modo moderno",
    sub: "Un'app dal design curato per imparare le lingue — con traduzioni, consigli e corsi semplici, più piani personalizzati creati apposta per te.",
    features: [
      { t: "5 lingue", d: "Italiano, inglese, portoghese, spagnolo e francese — scegli da dove partire." },
      { t: "Lezioni brevi", d: "Parola della settimana, consigli e micro-lezioni pensate per la vita reale." },
      { t: "Piani personalizzati", d: "La creatrice costruisce un piano speciale per ogni persona e obiettivo." },
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
    title: "Strumenti per organizzare la tua vita creativa",
    sub: "Tutto online — e tutto personalizzabile per te.",
    shop: "Shop in apertura",
    personalize: "Ogni prodotto è completamente personalizzabile — solo €2 ciascuno.",
    featured: {
      badge: "Prodotto fisso",
      title: "Il Planner Planicchio",
      desc: "Il mio planner con tante opzioni all'interno — vision board, mood tracker, lezioni di lingua, calendari annuali e mensili e altro. Completamente personalizzabile su di te.",
      price: "€2",
    },
    items: [
      { title: "Planner", desc: "Planner giornalieri, settimanali e annuali in tonalità calde.", price: "€2" },
      { title: "Icone", desc: "Pacchetti di icone estetiche per app e social.", price: "€2" },
      { title: "Template", desc: "Template modificabili per reel, post e storie.", price: "€2" },
      { title: "Menu", desc: "Layout di menu eleganti per negozi ed eventi.", price: "€2" },
      { title: "Checklist", desc: "Checklist pulite per ogni routine o progetto.", price: "€2" },
      { title: "Wallpaper", desc: "Sfondi per telefono e desktop in stile Planicchio.", price: "€2" },
      { title: "Libri da Colorare", desc: "Pagine da colorare stampabili per rallentare e creare.", price: "€2" },
      { title: "Travel Hacks", desc: "Guide e liste per pianificare i viaggi in modo smart.", price: "€2" },
      { title: "Liste & Journal", desc: "Journal e liste per l'intenzione di ogni giorno.", price: "€2" },
      { title: "E altro ancora", desc: "Nuove chicche digitali aggiunte di continuo.", price: "€2" },
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
  footer: { tagline: "Un universo digitale — a plain plan for every niche.", rights: "Tutti i diritti riservati.", made: "Fatto con cura in Italia" },
};

const pt: Content = {
  nav: { home: "Início", about: "Sobre", services: "Serviços", portfolio: "Portfólio", app: "App de Línguas", products: "Produtos", contact: "Contato" },
  cta: { work: "Trabalhe comigo", explore: "explore o universo", discover: "Descobrir", getInTouch: "Fale comigo", viewAll: "Ver tudo", comingSoon: "Em breve", learnMore: "Saiba mais", order: "Pedir pelo formulário" },
  hero: {
    eyebrow: "Estúdio Criativo · Feito na Itália · Pensando global",
    line1: "Planicchio",
    tag: "um universo digital",
    pillars: ["língua", "moda", "mídia", "cultura da internet"],
    statements: ["não é uma marca.", "não é um app.", "é um universo."],
    sub: "Planejamento, estética e criatividade para o seu espaço único online. A plain plan for every niche.",
    scroll: "rolar",
  },
  marquee: ["Branding", "UGC", "Fotografia", "Línguas", "Eventos", "Produtos Digitais", "Moda"],
  home: {
    servicesTitle: "O que eu crio",
    servicesSub: "Um universo criativo que une estratégia, estética, línguas e cultura da internet.",
    statLabel: ["Projetos & crescendo", "Línguas suportadas", "Sediada na"],
    statValue: ["2", "5", "Itália"],
    based: "Itália",
  },
  about: {
    eyebrow: "Sobre a Planicchio",
    title: "Planeje o seu nicho — o seu espaço único no mundo",
    p1: "A Planicchio é um universo criativo no cruzamento entre moda, branding, línguas e cultura digital. Ajudo pessoas e marcas a transformar ideias em histórias visuais imersivas — com clareza, estética e intenção.",
    p2: "Moro na Itália e falo italiano, português, inglês, espanhol e francês: trago uma perspectiva multicultural e nativa da internet para cada projeto — pensando local, mas sempre global.",
    p3: "Sou também mãe e jovem, então sei como fazer cada necessidade funcionar e adaptá-la à vida real. De conteúdos que param o scroll a mundos criativos inteiros, tudo é feito para parecer premium, humano e inconfundivelmente seu.",
    originTitle: "De onde vem o nome",
    origin: "O nome Planicchio nasceu da união de Plan (planejamento) com Nicchio (nicho / espaço). Na Itália, acreditamos que a beleza está nos detalhes. A Planicchio existe para planejar o seu nicho — o seu espaço único no mundo, com clareza, estética e intenção.",
    p4: "A plain plan for every niche.",
    tagline: "A plain plan for every niche.",
    values: [
      { t: "Nativa da internet", d: "Fluente em trends, estética e na linguagem da atenção." },
      { t: "Multilíngue", d: "Italiano, português, inglês, espanhol e francês — sem fronteiras." },
      { t: "Editorial", d: "Visual de revista com uma alma moderna e minimalista." },
      { t: "Adaptável", d: "O olhar de uma mãe jovem para fazer cada necessidade funcionar." },
    ],
  },
  services: {
    eyebrow: "Serviços",
    title: "Tudo o que você precisa para brilhar",
    sub: "Serviços modulares — escolha o que precisa, cresça quando quiser.",
    editable: "Card editável",
    items: [
      { title: "Branding & Marketing", desc: "Ajudo você a atingir o melhor de si mesmo e/ou da sua marca, com identidade, estratégia e uma visão clara e multilíngue.", tag: "Estratégia" },
      { title: "UGC & Fotografia", desc: "Aceito parcerias e tiro fotos e crio vídeos criativos com boa qualidade. Também sou atriz e dançarina e faço moda — estudei teatro, dança e moda — então posso ajudar em trabalhos que envolvam isso.", tag: "Conteúdo" },
      { title: "Assistência Virtual", desc: "Para pessoas ou lojas que precisam de ajuda respondendo emails, se organizando, ou que não entendem bem como mexer em redes sociais e na internet.", tag: "Suporte" },
      { title: "Planejar Eventos", desc: "Precisa fazer um evento mas não tem tempo para se organizar? Eu cuido dos detalhes para você só aproveitar o momento.", tag: "Eventos" },
      { title: "Ajuda com Línguas", desc: "Uma loja na Itália pensando globalmente: suporte em italiano, inglês, português, espanhol e francês — traduções, dicas e cursos simples por um preço mínimo.", tag: "Línguas" },
      { title: "Papelaria Digital", desc: "Planners, templates, ícones, cardápios e PDFs feitos para serem bonitos, úteis e totalmente personalizáveis.", tag: "Produtos" },
      { title: "Moda & Direção Criativa", desc: "Styling, moodboards e direção criativa completa — com bagagem em teatro, dança e moda.", tag: "Moda" },
    ],
  },
  portfolio: {
    eyebrow: "Portfólio",
    title: "Trabalhos selecionados & inspiração",
    sub: "Uma galeria viva — vídeos e cases chegando em breve.",
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
  app: {
    eyebrow: "App de Línguas",
    title: "Aprenda línguas do jeito moderno",
    sub: "Um app com design caprichado para aprender línguas — com traduções, dicas e cursos simples, além de planos personalizados feitos só para você.",
    features: [
      { t: "5 línguas", d: "Italiano, inglês, português, espanhol e francês — escolha por onde começar." },
      { t: "Lições curtas", d: "Palavra da semana, dicas e micro-lições pensadas para a vida real." },
      { t: "Planos personalizados", d: "A criadora monta um plano especial para cada pessoa e objetivo." },
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
    title: "Ferramentas para organizar a sua vida criativa",
    sub: "Tudo online — e tudo personalizável para você.",
    shop: "Loja abrindo em breve",
    personalize: "Cada produto é totalmente personalizável — apenas €2 cada.",
    featured: {
      badge: "Produto fixo",
      title: "O Planner Planicchio",
      desc: "Meu planner com várias opções dentro — vision board, mood tracker, lições de língua, calendários anuais e mensais e muito mais. Totalmente personalizável para você.",
      price: "€2",
    },
    items: [
      { title: "Planners", desc: "Planners diários, semanais e anuais em tons quentes.", price: "€2" },
      { title: "Ícones", desc: "Packs de ícones estéticos para apps e redes.", price: "€2" },
      { title: "Templates", desc: "Templates editáveis para reels, posts e stories.", price: "€2" },
      { title: "Cardápios", desc: "Layouts de cardápio lindos para lojas e eventos.", price: "€2" },
      { title: "Checklists", desc: "Checklists limpas para qualquer rotina ou projeto.", price: "€2" },
      { title: "Wallpapers", desc: "Papéis de parede para celular e desktop no clima Planicchio.", price: "€2" },
      { title: "Livros de Colorir", desc: "Páginas para colorir e imprimir, para desacelerar e criar.", price: "€2" },
      { title: "Travel Hacks", desc: "Guias e listas para planejar viagens de um jeito esperto.", price: "€2" },
      { title: "Listas & Journals", desc: "Journals e listas para a intenção do dia a dia.", price: "€2" },
      { title: "E muito mais", desc: "Novidades digitais adicionadas o tempo todo.", price: "€2" },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos criar algo icônico",
    sub: "Colaborações, pedidos e boas ideias — sou toda ouvidos.",
    name: "Seu nome",
    email: "Email",
    type: "Tipo de projeto",
    message: "Me conte sobre o seu projeto",
    send: "Enviar pedido",
    or: "Ou fale comigo diretamente",
    socials: "Acompanhe a jornada",
  },
  footer: { tagline: "Um universo digital — a plain plan for every niche.", rights: "Todos os direitos reservados.", made: "Feito com carinho na Itália" },
};

const dictionaries: Record<Lang, Content> = { en, it, pt };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; c: Content };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("planicchio-lang") as Lang | null) : null;
    if (saved === "en" || saved === "it" || saved === "pt") setLangState(saved);
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
