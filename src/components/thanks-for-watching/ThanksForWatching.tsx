import "./ThanksForWatching.css";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ThanksForWatching() {
    const { text } = useLanguage();

    return (
        <section className="thx-for-watching">
            <h2>{text.thanks}</h2>
        </section>
    );
}
