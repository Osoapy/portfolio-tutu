import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import "./TheHeartDeepDownPage.css";

import IMAGENS from "../../../utils/Images";
import TITULOS from "../../../utils/ImagesDescription";
import bookCover from "../../../assets/mockups/4capaDeLivro.png"
import cabecaSemiLado from "../../../assets/tutuHead2.png"

export default function TheHeartDeepDownPage() {
    const horaEm24Horas = new Date().getHours();
    const horaEm12Horas = horaEm24Horas === 0
        ? 0
        : ((horaEm24Horas - 1) % 12) + 1;

    const primeiroDesenho = horaEm12Horas <= 1 ? 1 : horaEm12Horas;
    const indicesDosDesenhos = Array.from(
        { length: 3 },
        (_, posicao) => (primeiroDesenho - 1 + posicao) % IMAGENS.length,
    );

    return (
        <>
            <Header location="work" />
            <main>
                <div className="first-ilustration-container">
                    <img src={IMAGENS[3]} className="first-ilustration"></img>
                </div>
                
                <p className="description">
                    "The Heart Deep Down” it’s a personal project that tells the story of a 
                    princess from the deepest oceans, destined to guard the kingdom's sacred 
                    stone until the end of her days. Yet, only by renouncing her duty will she 
                    uncover the truth—that this is no ordinary stone. A tale of duty and freedom, 
                    it asks: what would you choose?
                </p>

                <div className="main-artwork-container">
                    <img src={IMAGENS[3]}></img>
                </div>

                <div className="random-crop">
                    <div className="random-crop-1">
                        <img src={IMAGENS[3]}></img>
                    </div>
                    <div className="random-crop-2">
                        <img src={IMAGENS[3]}></img>
                    </div>
                    <div className="random-crop-3">
                        <img src={IMAGENS[3]}></img>
                    </div>
                </div>

                <div className="book-cover">
                    <img src={bookCover}></img>
                </div>

                <div className="thx-for-watching">
                    <h1>THANKS FOR WATCHING!</h1>
                </div>

                <div className="you-may-also-like">
                    <div className="thumbnail">
                        <p>Don't go so quickly! You may also like</p>
                        <img src={cabecaSemiLado}></img>
                    </div>
                    <div className="small-carousel">
                        {indicesDosDesenhos.map((indice) => (
                            <div className="tutu-grid-item" key={IMAGENS[indice]}>
                                <p className="tutu-grid-title">
                                    {TITULOS[indice]}
                                </p>

                                <img
                                    src={IMAGENS[indice]}
                                    alt={TITULOS[indice]}
                                    loading="eager"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="three-other-drawings"></div>

            </main>
            <Footer></Footer>
        </>
    );
}
