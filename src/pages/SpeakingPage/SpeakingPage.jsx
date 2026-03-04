import Header from '../../components/Header/Header';
import HeroSpeaking from './HeroSpeaking/HeroSpeaking';
import Footer from '../../components/Footer/Footer';
import { useRef } from 'react';
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
            Develop executive presence and command authority when the stakes are
            highest. Equip leaders to communicate with precision, credibility,
            and influence across teams, clients, and stakeholders.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/consultation"
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
            Build a narrative strategy that moves decisions, not just emotions.
            Learn how to shape high-value messages that align audiences,
            strengthen buy-in, and position your ideas for lasting influence.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/consultation"
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
            Perform under pressure with poise and persuasive delivery. Learn my
            practical techniques to sharpen clarity, sustain composure, and
            command attention in mission-critical presentations.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/consultation"
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
            aria-label="A mix of colors and shapes on a canvas representing diversity and inclusion in communication"
          ></div>
          <h2>Equity, Diversity, and Inclusion in Communication</h2>
          <p>
            Navigate complex conversations with clarity, composure, and respect.
            This session helps leaders communicate across differences, address
            sensitive topics thoughtfully, and foster meaningful dialogue in
            diverse environments.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/consultation"
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
            aria-label="A professional setting with individuals preparing for interviews and presentations"
          ></div>
          <h2>Strategic Interview & Presentation Command</h2>
          <p>
            Designed for professionals preparing for executive interviews, board
            presentations and academic defenses. This session sharpens your
            message, strengthens response strategy, and elevates your delivery
            under pressure.
          </p>
          <div>
            <a
              href="https://calendly.com/ivylevelspeaking/consultation"
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
