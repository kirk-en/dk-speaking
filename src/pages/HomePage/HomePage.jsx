import { DisplaySettings } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";
import Featured from "../../components/Featured/Featured";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <div className="top-section">
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
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1dYHLEc_DcrhYJ2Bc03tIcOGDOjIT4xu3xAF51IbiCyhQAvMLPeg61PYIso0gSIOV-rmQzYmJ6"
              className="main__button"
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
      <article className="quote">
        <div>
          <h2>Share Your Voice</h2>
          <h3 className="quote__text">
            “If story is our currency, do we have enough in our narrative to
            author future generations?”
          </h3>
          <p>— Dennis Kenney</p>
        </div>
      </article>
      <Featured />
    </>
  );
};

export default HomePage;
