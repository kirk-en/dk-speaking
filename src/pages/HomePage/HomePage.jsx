import Header from "../../components/Header/Header";
import Hero from "./HeroHome/HeroHome";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import Featured from "../../components/Featured/Featured";
import Video from "../../components/Video/Video";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";
import "./HomePage.scss";

const HomePage = () => {
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
      <div className="top-section top-section__home">
        <Header />
        <Hero />
      </div>
      <main className="main">
        <h1 className="main__headline">Excel with Dennis</h1>
        <section className="main__content">
          <article className="main__content-text">
            <p>
              As a seasoned professional with [X years] of experience in
              communication and public speaking, I understand the importance of
              being able to articulate your ideas confidently and persuasively
              in any situation. Whether you're aiming to perfect your elevator
              pitch, excel in professional interviews, or command attention on
              stage, my coaching services are tailored to help you achieve your
              speaking goals with precision and impact. <br />
              <br />
              With a background in [relevant field or expertise], I bring a
              unique blend of expertise and practical insights to my coaching
              approach. My mission is to empower individuals like you to unlock
              your full potential and become confident and compelling speakers
              in any setting.
            </p>
            <a
              href="https://calendly.com/ivylevelspeaking/30min"
              className="button__main"
              target="_blank"
            >
              Book a Free 15-Minute Consultation
            </a>
          </article>
          <div className="main__content-gallery">
            <PhotoGrid />
          </div>
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
      <Featured />
      <Video />
      <Footer />
    </>
  );
};

export default HomePage;
