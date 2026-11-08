import { useLocation, useSearchParams } from "react-router-dom";
import ArtworkCarousel from "../../../components/artwork-carousel/ArtworkCarousel";
import RecommendationHeading from "../../../components/recommendation-heading/RecommendationHeading";
import ThanksForWatching from "../../../components/thanks-for-watching/ThanksForWatching";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import IMAGENS from "../../../utils/Images";
import TITULOS from "../../../utils/ImagesDescription";
import { isHeartDeepDown, isAvatarArtwork } from "../../../utils/ArtworkHelpers";
import "./Artwork.css";
import { useLanguage } from "../../../i18n/LanguageContext";

type ArtworkState = {
    titulo?: string;
    imagem?: string;
    index?: number;
};

export default function Artwork() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const state = location.state as ArtworkState | null;
    const { text } = useLanguage();

    const queryIndex = Number(searchParams.get("obra"));
    const fallbackIndex = Number.isInteger(queryIndex)
        && queryIndex >= 0
        && queryIndex < IMAGENS.length
        && !isHeartDeepDown(TITULOS[queryIndex])
        ? queryIndex
        : 0;
    const artworkIndex = state?.index ?? fallbackIndex;
    const titulo = text.artworkTitles[artworkIndex];
    const imagem = state?.imagem ?? IMAGENS[artworkIndex];
    return (
        <>
            <Header location="work" />
            <main className="artwork-page">
                <section className="artwork-hero">
                    <h1>{titulo}</h1>
                    <img
                        src={imagem}
                        alt={titulo}
                        style={{ viewTransitionName: `artwork-${artworkIndex}` }}
                    />
                </section>

                <section className="artwork-details">
                    <p>{text.artwork.description}</p>
                    <img src={imagem} alt={`${text.artwork.fullAlt}${titulo}`} loading="lazy" decoding="async" />
                </section>

                <section
                    className={`artwork-zooms${isAvatarArtwork(titulo) ? " artwork-zooms--top" : ""}`}
                    aria-label={`${text.artwork.detailsAlt}${titulo}`}
                >
                    <div><img src={imagem} alt="" loading="lazy" decoding="async" /></div>
                    <div><img src={imagem} alt="" loading="lazy" decoding="async" /></div>
                    <div><img src={imagem} alt="" loading="lazy" decoding="async" /></div>
                </section>

                <ThanksForWatching />

                <section className="artwork-more">
                    <RecommendationHeading />
                    <ArtworkCarousel currentArtworkIndex={artworkIndex} />
                </section>
            </main>
            <Footer />
        </>
    );
}
