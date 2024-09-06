import { DisplaySettings } from "@mui/icons-material";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
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
              speaking goals with precision and impact. With a background in
              [relevant field or expertise], I bring a unique blend of expertise
              and practical insights to my coaching approach. My mission is to
              empower individuals like you to unlock your full potential and
              become confident and compelling speakers in any setting.
            </p>
            <a href="/">Contact Dennis</a>
          </article>
          <div className="main__content-gallery">
            <p>photo gallery goes here</p>
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
      <section className="featured">
        <h2 className="featured__title">Featured In:</h2>
        <figure className="featured__marquee"></figure>
      </section>
    </>
  );
};

export default HomePage;
