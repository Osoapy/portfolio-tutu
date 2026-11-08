import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import tutuIcon from "../../assets/tutuIcon.png";

import IMAGENS from "../../utils/Images";
import TITULOS from "../../utils/ImagesDescription";
import { isHeartDeepDown } from "../../utils/ArtworkHelpers";
import { useLanguage } from "../../i18n/LanguageContext";

export default function HomePage() {
  const navigate = useNavigate();
  const { text } = useLanguage();

  const shouldIRedirect = (index: number, titulo: string) => {
    if (isHeartDeepDown(titulo)) {
      navigate("/the-heart-deep-down");
    }
    else {
      navigate(`/artwork?obra=${index}`, {
        state: {
          titulo: TITULOS[index],
          imagem: IMAGENS[index],
          index,
        },
        viewTransition: true,
      });
    }
  };

  return (
    <>
      <Header location="work" />
      
      <main className="home-page">
          <div className="tutu-hero">
              <img src={tutuIcon} alt="Tutu Icon" />
          </div>

          <div className="tutu-grid" id="works">
              {IMAGENS.map((imagem, index) => (
                  <div className="tutu-grid-item mouse-pointer" key={imagem} onClick={() => shouldIRedirect(index, TITULOS[index])}>
                      <p className="tutu-grid-title">
                      {text.artworkTitles[index]}
                      </p>

                      <img
                      src={imagem}
                      alt={text.artworkTitles[index]}
                      loading="lazy"
                      decoding="async"
                      style={{ viewTransitionName: `artwork-${index}` }}
                      />
                  </div>
              ))}
          </div>
      </main>
      <Footer />
    </>
  );
}
