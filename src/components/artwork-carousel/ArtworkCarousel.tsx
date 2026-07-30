import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import IMAGENS from "../../utils/Images";
import TITULOS from "../../utils/ImagesDescription";
import { isHeartDeepDown } from "../../utils/ArtworkHelpers";
import "./ArtworkCarousel.css";
import { useLanguage } from "../../i18n/LanguageContext";

type ArtworkCarouselProps = {
    currentArtworkIndex: number;
    count?: number;
};

export default function ArtworkCarousel({
    currentArtworkIndex,
    count = 3,
}: ArtworkCarouselProps) {
    const navigate = useNavigate();
    const { text } = useLanguage();
    const indexes = useMemo(() => {
        const availableIndexes = IMAGENS
            .map((_, index) => index)
            .filter((index) => index !== currentArtworkIndex);

        for (let index = availableIndexes.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [availableIndexes[index], availableIndexes[randomIndex]] =
                [availableIndexes[randomIndex], availableIndexes[index]];
        }

        return availableIndexes.slice(0, count);
    }, [currentArtworkIndex, count]);

    const openArtwork = (index: number) => {
        if (isHeartDeepDown(TITULOS[index])) {
            navigate("/the-heart-deep-down");
        } else {
            navigate(`/artwork?obra=${index}`, {
                state: {
                    titulo: TITULOS[index],
                    imagem: IMAGENS[index],
                    index,
                },
            });
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="artwork-carousel">
            {indexes.map((index) => (
                <button
                    type="button"
                    className="artwork-carousel-card"
                    key={`${IMAGENS[index]}-${index}`}
                    onClick={() => openArtwork(index)}
                >
                    <span>{text.artworkTitles[index]}</span>
                    <img src={IMAGENS[index]} alt={text.artworkTitles[index]} />
                </button>
            ))}
        </div>
    );
}
