import cabecaSemiLado from "../../assets/tutuHead2.png";
import { useLanguage } from "../../i18n/LanguageContext";
import "./RecommendationHeading.css";

export default function RecommendationHeading() {
    const { text } = useLanguage();

    return (
        <div className="recommendation-heading">
            <img src={cabecaSemiLado} alt="" />
            <p>{text.heart.more}</p>
        </div>
    );
}
