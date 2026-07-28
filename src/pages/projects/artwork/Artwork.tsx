import { useLocation, useSearchParams } from "react-router-dom";
import ArtworkCarousel from "../../../components/artwork-carousel/ArtworkCarousel";
import ThanksForWatching from "../../../components/thanks-for-watching/ThanksForWatching";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import IMAGENS from "../../../utils/Images";
import TITULOS from "../../../utils/ImagesDescription";
import { isHeartDeepDown, isNymphsArtwork } from "../../../utils/ArtworkHelpers";
import "./Artwork.css";

type ArtworkState = {
    titulo?: string;
    imagem?: string;
    index?: number;
};

export default function Artwork() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const state = location.state as ArtworkState | null;

    const queryIndex = Number(searchParams.get("obra"));
    const fallbackIndex = Number.isInteger(queryIndex)
        && queryIndex >= 0
        && queryIndex < IMAGENS.length
        && !isHeartDeepDown(TITULOS[queryIndex])
        ? queryIndex
        : 0;
    const artworkIndex = state?.index ?? fallbackIndex;
    const titulo = state?.titulo ?? TITULOS[artworkIndex];
    const imagem = state?.imagem ?? IMAGENS[artworkIndex];

    return (
        <>
            <Header location="work" />
            <main className="artwork-page">
                <section className="artwork-hero">
                    <h1>{titulo}</h1>
                    <img src={imagem} alt={titulo} />
                </section>

                <section className="artwork-details">
                    <p>This piece shows a bit of my inner world.</p>
                    <img src={imagem} alt={`Full artwork: ${titulo}`} />
                </section>

                <section
                    className={`artwork-zooms${isNymphsArtwork(titulo) ? " artwork-zooms--top" : ""}`}
                    aria-label={`Details from ${titulo}`}
                >
                    <div><img src={imagem} alt="" /></div>
                    <div><img src={imagem} alt="" /></div>
                    <div><img src={imagem} alt="" /></div>
                </section>

                <ThanksForWatching />

                <section className="artwork-more">
                    <h2>You may also like</h2>
                    <ArtworkCarousel currentArtworkIndex={artworkIndex} />
                </section>
            </main>
            <Footer />
        </>
    );
}
