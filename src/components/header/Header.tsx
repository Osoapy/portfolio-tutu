import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

import instagramIcon from "../../assets/instagramIcon.png";
import xIcon from "../../assets/xIcon.webp";
import brazilFlag from "../../assets/flag-br.svg";
import unitedStatesFlag from "../../assets/flag-us.svg";
import { useLanguage } from "../../i18n/LanguageContext";

type HeaderProps = {
    location: "work" | "contact";
};

export default function Header({ location }: HeaderProps) {
    const navigate = useNavigate();
    const { language, toggleLanguage, text } = useLanguage();

    return (
        <header id="top">
            <div className="header-content">
                <Link className="header-brand" to="/" viewTransition aria-label="Anny J Art — início">
                    <h1>ANNY J. ART</h1>
                </Link>

                <div className="header-icons">
                    <p className={location === "work" ? "here" : ""} onClick={() => navigate("/", { viewTransition: true })}>
                        {text.nav.work}
                    </p>

                    <p className={location === "contact" ? "here" : ""} onClick={() => navigate("/contato", { viewTransition: true })}>
                        {text.nav.contact}
                    </p>

                    <button
                        className={`language-toggle language-toggle--${language}`}
                        type="button"
                        role="switch"
                        aria-checked={language === "en"}
                        onClick={toggleLanguage}
                        aria-label={text.language.label}
                        title={text.language.label}
                    >
                        <span className="language-code" aria-hidden="true">
                            {language === "pt" ? "PT" : "EN"}
                        </span>
                        <span className="language-flag" aria-hidden="true">
                            <img
                                src={language === "pt" ? brazilFlag : unitedStatesFlag}
                                alt=""
                            />
                        </span>
                    </button>

                    <a
                        className="x-icon icon"
                        href="https://x.com/AnnyTutu_Arts"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={xIcon} alt="X Icon" />
                    </a>

                    <a
                        className="instagram-icon icon"
                        href="https://www.instagram.com/tutu_ilustra"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagramIcon} alt="Instagram Icon" />
                    </a>
                </div>
            </div>
        </header>
    );
}
