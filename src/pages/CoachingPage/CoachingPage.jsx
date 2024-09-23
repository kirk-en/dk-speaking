import Header from "../../components/Header/Header";
import HeroCoaching from "./HeroCoaching/HeroCoaching";
import Footer from "../../components/Footer/Footer";
import hbsPhoto from "../../assets/photo-grid/harvard.jpg";
import { useRef } from "react";
import Why from "../../components/Why/Why";
import execPhoto from "../../assets/speaking-for-presentation-teaching-and-discussion-at-work.jpg";
import "./CoachingPage.scss";

const CoachingPage = () => {
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
      <div className="top-section top-section__coaching">
        <Header />
        <HeroCoaching />
      </div>
      <main className="coaching">
        <article className="coaching__headline-text">
          <p>
            I started Ivy Level Speaking to empower individuals with the skills
            and confidence to communicate effectively. Our mission is to
            transform aspiring speakers into impactful communicators, fostering
            authentic connections. Through personalized coaching and engaging
            workshops, we help clients refine their messages and captivate
            audiences.
          </p>
        </article>
        <section className="coaching__content">
          <img
            src={hbsPhoto}
            alt="Dennis Kenney in his coaching class at Harvard Business Schoool"
            className="coaching__single-photo"
          />

          <img
            src={hbsPhoto}
            alt="Dennis Kenney in his coaching class at Harvard Business Schoool"
            className="coaching__single-photo"
          />

          <img
            src={hbsPhoto}
            alt="Dennis Kenney in his coaching class at Harvard Business Schoool"
            className="coaching__single-photo"
          />
        </section>
      </main>
      <Why />
      <section className="outline">
        <h1 className="coaching__headline">Coaching:</h1>
        <p className="outline__text">
          Every individual has unique goals and challenges when it comes to
          public speaking and that's why I offer a variety of programs tailored
          to suit different needs. Together, we can create a custom package that
          aligns with your objectives and helps you achieve your desired level
          of confidence and effectiveness in your public engagements. Let’s
          embark on this journey to elevate your speaking skills and unlock your
          potential!
        </p>
        <article className="outline__entry">
          <div
            className="outline__banner outline__banner--exec"
            role="img"
            aria-label="A stylized picture of an executive at a tech conference speaking to a audience"
          ></div>
          <h2>Executive</h2>
          <p>
            I specialize in executive speaking coaching designed to empower
            leaders and professionals to communicate with confidence and impact.
            My offerings range from personalized one-on-one coaching sessions to
            tailored workshops that address your specific needs, whether it's
            enhancing your presentation skills, mastering executive presence, or
            navigating high-stakes conversations. Together, we'll develop a
            strategy that hones your unique voice and style, ensuring you
            connect effectively with your audience.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/30min"
              className="button__main"
              target="_blank"
            >
              Book Consultation
            </a>
          </div>
        </article>
        <article className="outline__entry">
          {" "}
          <div
            className="outline__banner outline__banner--school"
            role="img"
            aria-label="an outdoor landscape photo looking through the arches of a prestigious ivy league school"
          ></div>
          <h2>Student</h2>
          <p>
            I specialize in executive speaking coaching designed to empower
            leaders and professionals to communicate with confidence and impact.
            My offerings range from personalized one-on-one coaching sessions to
            tailored workshops that address your specific needs, whether it's
            enhancing your presentation skills, mastering executive presence, or
            navigating high-stakes conversations. Together, we'll develop a
            strategy that hones your unique voice and style, ensuring you
            connect effectively with your audience.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/30min"
              className="button__main"
              target="_blank"
            >
              Book Consultation
            </a>
          </div>
        </article>
        <article className="outline__entry">
          {" "}
          <div
            className="outline__banner outline__banner--fashion"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Image</h2>
          <p>
            I specialize in executive speaking coaching designed to empower
            leaders and professionals to communicate with confidence and impact.
            My offerings range from personalized one-on-one coaching sessions to
            tailored workshops that address your specific needs, whether it's
            enhancing your presentation skills, mastering executive presence, or
            navigating high-stakes conversations. Together, we'll develop a
            strategy that hones your unique voice and style, ensuring you
            connect effectively with your audience.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/30min"
              className="button__main"
              target="_blank"
            >
              Book Consultation
            </a>
          </div>
        </article>
      </section>
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
      <Footer />
    </>
  );
};

export default CoachingPage;
