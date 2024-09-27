import Header from "../../components/Header/Header";
import HeroAbout from "./HeroAbout/HeroAbout";
import Footer from "../../components/Footer/Footer";
import hbsPhoto from "../../assets/photo-grid/harvard.jpg";
import dennisPhoto from "../../assets/dennis-side-profile.jpg";
import { useRef } from "react";
import "./AboutPage.scss";
import Booking from "../../components/Booking/Booking";

const AboutPage = () => {
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
      <div className="top-section top-section__about">
        <Header />
        <HeroAbout />
      </div>
      <main className="about">
        <h1 className="about__headline">My Story:</h1>
        <section className="about__content">
          <article className="about__content-text">
            <p>
              <span className="about__content-text--opening">
                A Unique Blend of Drama, Communication, and Leadership...
              </span>
              <br />
              With a Drama degree from Carnegie Mellon University, a Master’s in
              Communication from Northwestern University, and ongoing doctoral
              studies in Leadership from The Johns Hopkins University, my
              journey has been anything but ordinary. I have built a career that
              blends expertise across theater, communication, and leadership,
              allowing me to offer an unparalleled coaching experience. I’ve
              worked with top-tier institutions like Harvard, Columbia, and
              Fortune 500 companies, helping individuals at all levels elevate
              their communication skills and personal presence.
              <br />
              <br />
              What sets me apart is the variety and depth of my experiences.
              I’ve been the head stylist for Good Morning America and a creative
              director for major fashion brands, transforming how celebrities
              present themselves on national television. I’ve led public
              speaking workshops at Harvard Business School, empowering PhD
              candidates to deliver compelling academic presentations, and I’ve
              worked with tenured professors to further refine their authority
              in the classroom. I’ve also helped corporate executives reshape
              their professional image, guiding them to make lasting impressions
              in the boardroom.
            </p>
          </article>
          <div className="about__content-gallery">
            <img
              src={dennisPhoto}
              alt="Dennis Kenney in his speaking class at Harvard Business Schoool"
              className="about__single-photo"
            />
          </div>
        </section>
        <section className="about__content">
          <div className="about__content-gallery">
            <img
              src={hbsPhoto}
              alt="Dennis Kenney in his speaking class at Harvard Business Schoool"
              className="about__single-photo"
            />
          </div>
          <article className="about__content-text">
            <p>
              This breadth of experience means I approach coaching with a unique
              perspective, combining the discipline of academic rigor, the
              creative flair of theatrical performance, and the strategic
              insight of brand development. My goal is not just to teach you how
              to speak effectively, but to help you own your voice and presence
              in a way that’s authentically yours.
              <br />
              <br />
              Whether you're stepping onto a stage, leading a team, or
              navigating professional challenges, I bring a personalized,
              strategic approach that will help you shine. With over 20 years of
              varied experience, I can help you not only deliver with confidence
              and clarity but also elevate your personal brand and reshape how
              you are perceived by others. Let’s work together to unlock the
              power of your story and voice, ensuring you leave a lasting
              impact.
            </p>
          </article>
        </section>
      </main>
      <article
        className="quote"
        onMouseMove={handleMouseMove}
        ref={gradientRef}
      >
        <div className="quote__text">
          <h2>Project Your Presence</h2>
          <h3>
            “Every word is an opportunity—choose those that move, inspire, and
            create change.”
          </h3>
          <p>— Dennis Kenney</p>
        </div>
      </article>
      <Booking />
      <Footer />
    </>
  );
};

export default AboutPage;
