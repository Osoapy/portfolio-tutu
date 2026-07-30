import "./Footer.css";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Footer() {
    const { text } = useLanguage();

    return (
        <footer>
            <a href="#top">{text.backToTop}</a>
        </footer>
    );
}
