import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import tutuIcon from "../../assets/tutuIcon.png";
import instagramIcon from "../../assets/instagramIcon.png";
import xIcon from "../../assets/xIcon.webp";

import imagem1 from "../../assets/desenhos/1.jpg";
import imagem2 from "../../assets/desenhos/2.png";
import imagem3 from "../../assets/desenhos/3.jpg";
import imagem4 from "../../assets/desenhos/4.jpg";
import imagem5 from "../../assets/desenhos/5.jpg";
import imagem6 from "../../assets/desenhos/6.png";
import imagem7 from "../../assets/desenhos/7.jpg";
import imagem8 from "../../assets/desenhos/8.png";
import imagem9 from "../../assets/desenhos/9.jpg";
import imagem10 from "../../assets/desenhos/10.jpg";
import imagem11 from "../../assets/desenhos/11.jpg";
import imagem12 from "../../assets/desenhos/12.jpg";

const imagens = [
  imagem1,
  imagem2,
  imagem3,
  imagem4,
  imagem5,
  imagem6,
  imagem7,
  imagem8,
  imagem9,
  imagem10,
  imagem11,
  imagem12,
];

const tituloImagens = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
};

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
        <header id="top">
            <div className="header-content">
                <div>
                    <h1>ANNY J. ART</h1>
                </div>
                <div className="header-icons">
                    <p className="here">work</p>
                    <p>contact</p>
                    <div className="x-icon icon" onClick={() => navigate("/")}>
                        <img src={xIcon} alt="X Icon" />
                    </div>
                    <div className="instagram-icon icon" onClick={() => window.open("https://www.instagram.com/annyj.art/", "_blank")}>
                        <img src={instagramIcon} alt="Instagram Icon" />
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div className="tutu-hero">
                <img src={tutuIcon} alt="Tutu Icon" />
            </div>

            <div className="tutu-grid">
                {imagens.map((imagem, index) => (
                    <div key={index}>
                        <p className="tutu-grid-title">Imagem {index + 1}</p>
                        <img className={`${index}`} src={imagem} alt={`Imagem ${index + 1}`} />
                    </div>
                ))}
            </div>
        </main>
        <footer>
            <a href="#top">↑ back to the top</a>
        </footer>
    </>
  );
}