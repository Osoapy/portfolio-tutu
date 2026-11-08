import "./ContactPage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import tutuImage from "../../assets/about me.jpg";
import tutuHead1 from "../../assets/tutuHead1.png";
import tutuHead2 from "../../assets/tutuHead2.png";
import tutuHead3 from "../../assets/tutuHead3.png";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ContactPage() {
    const { text } = useLanguage();

    return (
        <>
            <Header location="contact" />
            <main className="contact-page">
                <header className="contact-header">
                    <img src={tutuHead1} alt="" />
                    <img src={tutuHead2} alt="" />
                    <img src={tutuHead3} alt="" />
                </header>
                <section className="contact-section">
                    <img src={tutuImage} alt={text.contact.portraitAlt} />
                    <p>
                        {text.contact.introStart}
                        <b>Photoshop</b>, <b>Illustrator</b>{text.contact.introMiddle}<b>Clip Studio Paint</b>.
                        <br /><br />
                        {text.contact.introSecond}<b>{text.contact.bookCovers}</b>{text.contact.andWork}
                        <b>{text.contact.characterDesign}</b>{text.contact.turningIdeas}
                        <b>{text.contact.creepyCute}</b>{text.contact.ending}
                    </p>
                </section>
                <div className="contact-text">
                    <h2>{text.contact.connect}</h2>
                    <p>{text.contact.invitation}</p>
                </div>
                <div className="contact-socials">
                    <p><b>{text.contact.email}</b> annyleticiajnm@gmail.com</p>
                    <p>
                        <b>{text.contact.socials}</b>{" "}
                        X - AnnyTutu_Arts, Instagram - tutu_ilustra
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
