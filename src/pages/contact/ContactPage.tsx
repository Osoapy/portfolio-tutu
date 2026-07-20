import "./ContactPage.css";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import tutuImage from "../../assets/about me.jpg";
import tutuHead1 from "../../assets/tutuHead1.png";
import tutuHead2 from "../../assets/tutuHead2.png";
import tutuHead3 from "../../assets/tutuHead3.png";

export default function ContactPage() {
    return (
        <>
            <Header location="contact" />
            
            <main>
                <header className="contact-header">
                    <img src={tutuHead1} alt="Tutu Head 1" />
                    <img src={tutuHead2} alt="Tutu Head 2" />
                    <img src={tutuHead3} alt="Tutu Head 3" />
                </header>
                <section className="contact-section">
                    <img src={tutuImage} alt="Tutu" />
                    <p>
                        Hello! I am Annyletícia Jeronimo, most known as Tutu. I am a freelancer artist with knowledge on ilustration tools like 
                        <b>Photoshop</b>, <b>Ilustrator</b>, and my favourite one, <b>ClipStudio</b>. 
                        <br></br><br></br>
                        I love making ilustrations for <b>book covers</b> and to work with <b>character design</b>, turning unique ideas for 
                        RPG characters in reality. 
                        The concept that I like the most is <b>“creepy but cute”</b> where I blend fantasy with a little bit of horror.
                    </p>
                </section>
                <div className="contact-text">
                    <h2>LET'S CONNECT</h2>
                    <p>Tell me your ideas and I garantee to make your world come true. </p>
                </div>
                <div className="contact-socials">
                    <p><b>Email:</b> annyleticiajnm@gmail.com</p>
                    <p><b>Socials:</b> @TutuArte</p>
                </div>
            </main>

            <Footer />
        </>
    );
}