import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import ArtworkCarousel from "../../../components/artwork-carousel/ArtworkCarousel";
import RecommendationHeading from "../../../components/recommendation-heading/RecommendationHeading";
import ThanksForWatching from "../../../components/thanks-for-watching/ThanksForWatching";
import "./TheHeartDeepDownPage.css";
import IMAGENS from "../../../utils/Images";
import TITULOS from "../../../utils/ImagesDescription";
import { isHeartDeepDown } from "../../../utils/ArtworkHelpers";
import bookCover from "../../../assets/mockups/4capaDeLivro.png";
import { useLanguage } from "../../../i18n/LanguageContext";

const heartDeepDownIndex = TITULOS.findIndex(isHeartDeepDown);
const heartDeepDownImage = IMAGENS[heartDeepDownIndex];

export default function TheHeartDeepDownPage() {
    const { text } = useLanguage();
    const title = text.artworkTitles[heartDeepDownIndex];

    return (
        <>
            <Header location="work" />
            <main>
                <div className="first-ilustration-container">
                    <img src={heartDeepDownImage} className="first-ilustration" alt={title} />
                </div>
                <p className="description">{text.heart.description}</p>
                <div className="main-artwork-container">
                    <img src={heartDeepDownImage} alt={title} />
                </div>
                <div className="random-crop">
                    <div className="random-crop-1"><img src={heartDeepDownImage} alt="" /></div>
                    <div className="random-crop-2"><img src={heartDeepDownImage} alt="" /></div>
                    <div className="random-crop-3"><img src={heartDeepDownImage} alt="" /></div>
                </div>
                <div className="book-cover">
                    <img src={bookCover} alt={text.heart.bookCoverAlt} />
                </div>
                <ThanksForWatching />
                <div className="you-may-also-like">
                    <RecommendationHeading />
                    <ArtworkCarousel currentArtworkIndex={heartDeepDownIndex} />
                </div>
                <div className="three-other-drawings"></div>
            </main>
            <Footer />
        </>
    );
}
