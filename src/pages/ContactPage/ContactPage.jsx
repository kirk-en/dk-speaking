import Header from "../../components/Header/Header";
import HeroContact from "./HeroContact/HeroContact";
import Footer from "../../components/Footer/Footer";
import usePageMeta from '../../usePageMeta';
import hbsPhoto from "../../assets/photo-grid/harvard.jpg";
import { useRef } from "react";
import Why from "../../components/Why/Why";
import { Email, Phone } from "@mui/icons-material";
import ContactForm from "../../components/ContactForm/ContactForm";
import DynamicQuote from "../../components/DynamicQuote/DynamicQuote";
import "./ContactPage.scss";

const ContactPage = () => {
  usePageMeta(
    'Contact Dennis Kenney | Book a Free Consultation | Ivy Level Speaking',
    'Book a free 15 minute consultation with executive communication coach Dennis Kenney, or send a message about coaching, keynotes, and workshops.'
  );
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
          <div className="contact__intro">
            <h2 className="contact__intro-title">
              Tell me what you are working toward.
            </h2>
            <p className="contact__intro-text">
              A keynote that has to land. A board presentation. A media
              appearance. A team that needs to present with more authority. A
              student preparing for a debate or a school interview. Whatever
              the moment is, this is where it starts.
            </p>
            <ul className="contact__steps">
              <li>
                <strong>Send a note.</strong> Share the moment you are
                preparing for and your timeline.
              </li>
              <li>
                <strong>Talk it through.</strong> The first conversation is a
                free 15 minute consultation, with no obligation.
              </li>
              <li>
                <strong>Get a plan.</strong> You leave with a clear
                recommendation for coaching, a workshop, or a keynote, in
                person or virtual.
              </li>
            </ul>
            <p className="contact__intro-text">
              Prefer to skip the form and pick a time?
            </p>
            <a
              href="https://calendly.com/ivylevelspeaking/consultation"
              className="button__main button__main--lr-zero-margin"
              target="_blank"
              rel="noreferrer"
            >
              book a free consultation
            </a>
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
