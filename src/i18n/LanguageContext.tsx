import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "pt" | "en";

const artworkTitles = {
    pt: [
        "Design de herói brasileiro", "O tempo passa", "Capa de livro — Cabelo de arco-íris",
        "Capa de livro — O coração nas profundezas", "Projeto artístico colaborativo — Vida de pirata",
        "Boulevard de Wicked", "Ilustração de livro — Curupira", "A arte de dançar",
        "Ninfas — Ilustração de livro", "Personagens de RPG — Avatar",
        "Tripulação pirata — Projeto artístico colaborativo", "Doces ou travessuras — Ilustração infantil",
    ],
    en: [
        "Brazilian Hero's design", "Time goes by", "Book cover — Rainbow's hair",
        "Book cover — The heart deep down", "Art Project collab — Pirate's life",
        "Wicked's boulevard", "Curupira book illustration", "The art of dancing",
        "Nymphs — Book illustration", "Avatar RPG Characters",
        "Pirate crew — Art Project collab", "Trick or treats — Children Illustration",
    ],
} satisfies Record<Language, string[]>;

const translations = {
    pt: {
        nav: { work: "obras", contact: "contato" },
        language: { label: "Mudar idioma para inglês", short: "EN" },
        loading: "Carregando obras...",
        artwork: {
            description: "Esta obra revela um pouco do meu mundo interior.",
            fullAlt: "Obra completa: ", detailsAlt: "Detalhes de ", more: "Você também pode gostar",
        },
        contact: {
            portraitAlt: "Tutu",
            introStart: "Olá! Eu sou Annyletícia Jeronimo, mais conhecida como Tutu. Sou artista freelancer e domino ferramentas de ilustração como ",
            introMiddle: ", além da minha favorita, ",
            introSecond: "Adoro criar ilustrações para ", bookCovers: "capas de livros",
            andWork: " e trabalhar com ", characterDesign: "design de personagens",
            turningIdeas: ", transformando ideias únicas de personagens de RPG em realidade. O conceito de que mais gosto é ",
            creepyCute: "“assustador, mas fofo”", ending: ", no qual misturo fantasia com um toque de terror.",
            connect: "VAMOS CONVERSAR",
            invitation: "Conte-me suas ideias e eu garanto dar vida ao seu mundo.",
            email: "E-mail:", socials: "Redes sociais:",
        },
        heart: {
            description: "“O coração nas profundezas” é um projeto pessoal que conta a história de uma princesa dos oceanos mais profundos, destinada a proteger a pedra sagrada do reino até o fim de seus dias. Porém, somente ao renunciar ao seu dever ela descobrirá a verdade: esta não é uma pedra qualquer. Uma história sobre dever e liberdade que pergunta: o que você escolheria?",
            more: "Não vá agora! Você também pode gostar de:",
            bookCoverAlt: "Aplicação da ilustração em uma capa de livro",
        },
        thanks: "OBRIGADA POR ASSISTIR!", backToTop: "Voltar ao topo",
        artworkTitles: artworkTitles.pt,
    },
    en: {
        nav: { work: "work", contact: "contact" },
        language: { label: "Change language to Portuguese", short: "PT" },
        loading: "Loading artworks...",
        artwork: {
            description: "This piece shows a bit of my inner world.",
            fullAlt: "Full artwork: ", detailsAlt: "Details from ", more: "You may also like",
        },
        contact: {
            portraitAlt: "Tutu",
            introStart: "Hello! I am Annyletícia Jeronimo, better known as Tutu. I am a freelance artist with experience in illustration tools such as ",
            introMiddle: ", and my favorite, ",
            introSecond: "I love creating illustrations for ", bookCovers: "book covers",
            andWork: " and working with ", characterDesign: "character design",
            turningIdeas: ", turning unique RPG character ideas into reality. The concept I enjoy most is ",
            creepyCute: "“creepy but cute”", ending: ", where I blend fantasy with a touch of horror.",
            connect: "LET'S CONNECT",
            invitation: "Tell me your ideas and I guarantee I will bring your world to life.",
            email: "Email:", socials: "Socials:",
        },
        heart: {
            description: "“The Heart Deep Down” is a personal project that tells the story of a princess from the deepest oceans, destined to guard the kingdom's sacred stone until the end of her days. Yet, only by renouncing her duty will she uncover the truth—that this is no ordinary stone. A tale of duty and freedom, it asks: what would you choose?",
            more: "Don't go so quickly! You may also like:",
            bookCoverAlt: "Artwork applied to a book cover",
        },
        thanks: "THANKS FOR WATCHING!", backToTop: "Back to top",
        artworkTitles: artworkTitles.en,
    },
};

type LanguageContextValue = {
    language: Language;
    toggleLanguage: () => void;
    text: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem("portfolio-language");
        return saved === "pt" || saved === "en" ? saved : "pt";
    });

    useEffect(() => {
        localStorage.setItem("portfolio-language", language);
        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    }, [language]);

    const value = useMemo(() => ({
        language,
        toggleLanguage: () => setLanguage((current) => current === "pt" ? "en" : "pt"),
        text: translations[language],
    }), [language]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}
