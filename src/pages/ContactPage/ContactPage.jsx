import Header from "../../components/Header/Header";
import HeroContact from "./HeroContact/HeroContact";
import Footer from "../../components/Footer/Footer";
import hbsPhoto from "../../assets/photo-grid/harvard.jpg";
import { useRef } from "react";
import Why from "../../components/Why/Why";
import { Email, Phone } from "@mui/icons-material";
import ContactForm from "../../components/ContactForm/ContactForm";
import DynamicQuote from "../../components/DynamicQuote/DynamicQuote";
import "./ContactPage.scss";

const ContactPage = () => {
  const gradientRef = useRef(null);

  const handleMouseMove = (event) => {
    if (gradientRef.current) {
      const { left, top } = gradientRef.current.getBoundingClientRect(); // Get element's position
      const x = event.clientX - left; // Adjust X position relative to the element
      const y = event.clientY - top; // Adjust Y position relative to the element

      gradientRef.current.style.setProperty("--x", `${x}px`);
      gradientRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <>
      <div className="top-section top-section__contact">
        <Header />
        <HeroContact />
      </div>
      <main className="contact">
        <h1 className="contact__headline">Let's Speak</h1>
        <section className="contact__content">
          <div>
            <h2>Always Connected and Happy to Help with any questions.</h2>
            {/* <Phone />
            <Email /> */}
          </div>
          <ContactForm />
        </section>
      </main>

      <article
        className="quote"
        onMouseMove={handleMouseMove}
        ref={gradientRef}
      >
        <DynamicQuote />
      </article>
      <Footer />
    </>
  );
};

export default ContactPage;
