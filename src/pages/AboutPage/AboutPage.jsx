import Header from "../../components/Header/Header";
import HeroAbout from "./HeroAbout/HeroAbout";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import Featured from "../../components/Featured/Featured";
import Video from "../../components/Video/Video";
import Footer from "../../components/Footer/Footer";
import hbsPhoto from "../../assets/photo-grid/harvard.jpg";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis aut dolorum molestias! Accusantium consectetur sequi
              doloremque officia iure ipsam error maiores provident eum quo!
              Inventore molestiae doloribus aut saepe mollitia.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur distinctio quae ducimus obcaecati iste non ipsam
              maxime ab, quos doloribus aliquid aperiam ad nihil, harum suscipit
              natus laboriosam eaque sequi! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ducimus autem, exercitationem libero
              voluptate inventore possimus veritatis hic? Impedit, aliquid,
              aperiam reprehenderit incidunt eaque praesentium temporibus
              eligendi distinctio exercitationem maxime commodi.
            </p>
          </article>
          <div className="about__content-gallery">
            <img
              src={hbsPhoto}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis aut dolorum molestias! Accusantium consectetur sequi
              doloremque officia iure ipsam error maiores provident eum quo!
              Inventore molestiae doloribus aut saepe mollitia.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur distinctio quae ducimus obcaecati iste non ipsam
              maxime ab, quos doloribus aliquid aperiam ad nihil, harum suscipit
              natus laboriosam eaque sequi! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ducimus autem, exercitationem libero
              voluptate inventore possimus veritatis hic? Impedit, aliquid,
              aperiam reprehenderit incidunt eaque praesentium temporibus
              eligendi distinctio exercitationem maxime commodi.
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
          <h2>Share Your Voice</h2>
          <h3>
            “If story is our currency, do we have enough in our narrative to
            author future generations?”
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
