import Header from '../../components/Header/Header';
import HeroSpeaking from './HeroSpeaking/HeroSpeaking';
import Footer from '../../components/Footer/Footer';
import hbsPhoto from '../../assets/photo-grid/harvard.jpg';
import { useRef } from 'react';
import Why from '../../components/Why/Why';
import execPhoto from '../../assets/speaking-for-presentation-teaching-and-discussion-at-work.jpg';
import DynamicQuote from '../../components/DynamicQuote/DynamicQuote';
import './SpeakingPage.scss';

const SpeakingPage = () => {
  const gradientRef = useRef(null);

  const handleMouseMove = (event) => {
    if (gradientRef.current) {
      const { left, top } = gradientRef.current.getBoundingClientRect(); // Get element's position
      const x = event.clientX - left; // Adjust X position relative to the element
      const y = event.clientY - top; // Adjust Y position relative to the element

      gradientRef.current.style.setProperty('--x', `${x}px`);
      gradientRef.current.style.setProperty('--y', `${y}px`);
    }
  };

  return (
    <>
      <div className="top-section top-section__speaking">
        <Header />
        <HeroSpeaking />
      </div>

      {/* <Why /> */}
      <h1 className="speaking__headline">Speaking Topics:</h1>
      <section className="outline-sp">
        {/* <p className="outline-sp__text">
          Dennis Kenney is an internationally recognized speaker and
          communication coach, known for helping professionals, academics, and
          students unlock their full potential on stage and in presentations.
          With a dynamic background in drama, business, and education, Dennis
          brings a unique blend of storytelling, strategy, and
          confidence-building techniques to each engagement.
        </p> */}
        <article className="outline-sp__entry">
          <div
            className="outline-sp__banner outline-sp__banner--exec"
            role="img"
            aria-label="A stylized picture of an executive at a tech conference speaking to a audience"
          ></div>
          <h2>Authentic Leadership Communication</h2>
          <p>
            Master the art of leading with confidence and authenticity. This
            keynote focuses on enhancing communication strategies for leaders,
            helping them inspire and connect with their teams through genuine
            and impactful speech.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/coaching-consultation"
              className="button__main"
              target="_blank"
            >
              Book Consultation
            </a>
          </div>
        </article>
        <article className="outline-sp__entry">
          {' '}
          <div
            className="outline-sp__banner outline-sp__banner--story"
            role="img"
            aria-label="an outdoor landscape photo looking through the arches of a prestigious ivy league school"
          ></div>
          <h2>Storytelling for Impact</h2>
          <p>
            In today’s world, stories move audiences and shape brands. Learn how
            to craft compelling narratives that captivate listeners and make
            your message unforgettable, whether you're speaking in the boardroom
            or on the stage.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/coaching-consultation"
              className="button__main"
              target="_blank"
            >
              Book Consultation
            </a>
          </div>
        </article>
        <article className="outline-sp__entry">
          {' '}
          <div
            className="outline-sp__banner outline-sp__banner--fashion"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>The Confident Presenter</h2>
          <p>
            Conquer presentation anxiety and step into the spotlight with
            confidence. This keynote offers practical tools and strategies to
            overcome nerves, command attention, and deliver presentations that
            leave lasting impressions.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/coaching-consultation"
              className="button__main"
              target="_blank"
            >
              Book Consultation
            </a>
          </div>
        </article>
        <article className="outline-sp__entry">
          <div
            className="outline-sp__banner outline-sp__banner--diversity"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Equity, Diversity, and Inclusion in Communication</h2>
          <p>
            Explore how to communicate with sensitivity, respect, and
            inclusivity in diverse environments. This session helps speakers
            navigate complex topics and foster open, meaningful dialogue that
            embraces a wide range of perspectives.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/coaching-consultation"
              className="button__main"
              target="_blank"
            >
              Book Consultation
            </a>
          </div>
        </article>
        <article className="outline-sp__entry">
          <div
            className="outline-sp__banner outline-sp__banner--interview"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Job Market & Interview Mastery</h2>
          <p>
            Perfect for students and professionals preparing for job interviews
            or academic flyouts, this session focuses on refining your pitch,
            handling tough questions, and delivering a polished, confident
            performance tailored to your career path. 😎
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/coaching-consultation"
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
        <DynamicQuote />
      </article>
      <Footer />
    </>
  );
};

export default SpeakingPage;
