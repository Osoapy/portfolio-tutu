import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import tutuIcon from "../../assets/tutuIcon.png";

import IMAGENS from "../../utils/Images";
import TITULOS from "../../utils/ImagesDescription";

export default function HomePage() {
  const [imagensCarregadas, setImagensCarregadas] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let componenteMontado = true;

    const carregarImagem = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const imagem = new Image();

        imagem.src = src;

        imagem.onload = async () => {
          try {
            // Aguarda também a imagem ser decodificada pelo navegador.
            await imagem.decode?.();
          } catch {
            // Alguns navegadores podem não suportar decode().
          }

          resolve();
        };

        imagem.onerror = reject;
      });

    Promise.all(IMAGENS.map(carregarImagem))
      .then(() => {
        if (componenteMontado) {
          setImagensCarregadas(true);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar as imagens:", error);

        // Exibe a galeria mesmo se uma imagem falhar.
        if (componenteMontado) {
          setImagensCarregadas(true);
        }
      });

    return () => {
      componenteMontado = false;
    };
  }, []);

  const shouldIRedirect = (index: number) => {
    if (index === 3) {
      navigate("/the-heart-deep-down");
    }
  };

  return (
    <>
      <Header location="work" />
      
      <main>
          <div className="tutu-hero">
              <img src={tutuIcon} alt="Tutu Icon" />
          </div>

          {!imagensCarregadas ? (
              <div className="gallery-loading">
                  <p>Loading artworks...</p>
              </div>
              ) : (
              <div className="tutu-grid">
                  {IMAGENS.map((imagem, index) => (
                  <div className={"tutu-grid-item" + (index === 3 ? " mouse-pointer" : "")} key={imagem} onClick={() => shouldIRedirect(index)}>
                      <p className="tutu-grid-title">
                      {TITULOS[index]}
                      </p>

                      <img
                      src={imagem}
                      alt={TITULOS[index]}
                      loading="eager"
                      />
                  </div>
                  ))}
              </div>
          )}
      </main>
      <Footer />
    </>
  );
}
