import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import ArtworkCarousel from "../../../components/artwork-carousel/ArtworkCarousel";
import ThanksForWatching from "../../../components/thanks-for-watching/ThanksForWatching";
import "./TheHeartDeepDownPage.css";

import IMAGENS from "../../../utils/Images";
import TITULOS from "../../../utils/ImagesDescription";
import { isHeartDeepDown } from "../../../utils/ArtworkHelpers";
import bookCover from "../../../assets/mockups/4capaDeLivro.png"
import cabecaSemiLado from "../../../assets/tutuHead2.png"

const heartDeepDownIndex = TITULOS.findIndex(isHeartDeepDown);
const heartDeepDownImage = IMAGENS[heartDeepDownIndex];

export default function TheHeartDeepDownPage() {
    return (
        <>
            <Header location="work" />
            <main>
                <div className="first-ilustration-container">
                    <img src={heartDeepDownImage} className="first-ilustration" alt={TITULOS[heartDeepDownIndex]} />
                </div>
                
                <p className="description">
                    "The Heart Deep Down” it’s a personal project that tells the story of a 
                    princess from the deepest oceans, destined to guard the kingdom's sacred 
                    stone until the end of her days. Yet, only by renouncing her duty will she 
                    uncover the truth—that this is no ordinary stone. A tale of duty and freedom, 
                    it asks: what would you choose?
                </p>

                <div className="main-artwork-container">
                    <img src={heartDeepDownImage} alt={TITULOS[heartDeepDownIndex]} />
                </div>

                <div className="random-crop">
                    <div className="random-crop-1">
                        <img src={heartDeepDownImage} alt="" />
                    </div>
                    <div className="random-crop-2">
                        <img src={heartDeepDownImage} alt="" />
                    </div>
                    <div className="random-crop-3">
                        <img src={heartDeepDownImage} alt="" />
                    </div>
                </div>

                <div className="book-cover">
                    <img src={bookCover}></img>
                </div>

                <ThanksForWatching />

                <div className="you-may-also-like">
                    <div className="thumbnail">
                        <p>Don't go so quickly! You may also like</p>
                        <img src={cabecaSemiLado}></img>
                    </div>
                    <ArtworkCarousel currentArtworkIndex={heartDeepDownIndex} />
                </div>

                <div className="three-other-drawings"></div>

            </main>
            <Footer></Footer>
        </>
    );
}
