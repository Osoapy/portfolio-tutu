import "./Header.css";
import { useNavigate } from "react-router-dom";

import instagramIcon from "../../assets/instagramIcon.png";
import xIcon from "../../assets/xIcon.webp";

type HeaderProps = {
    location: "work" | "contact";
};

export default function Header({ location }: HeaderProps) {
    const navigate = useNavigate();

    return (
        <header id="top">
            <div className="header-content">
                <div>
                    <h1>ANNY J. ART</h1>
                </div>

                <div className="header-icons">
                    <p className={location === "work" ? "here" : ""} onClick={() => navigate("/")}>
                        work
                    </p>

                    <p className={location === "contact" ? "here" : ""} onClick={() => navigate("/contato")}>
                        contact
                    </p>

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