import Header from '../../components/Header/Header';
import HeroSpeaking from './HeroSpeaking/HeroSpeaking';
import usePageMeta from '../../usePageMeta';
import Footer from '../../components/Footer/Footer';
import { useRef } from 'react';
import DynamicQuote from '../../components/DynamicQuote/DynamicQuote';
import Video from '../../components/Video/Video';
import './SpeakingPage.scss';

const SpeakingPage = () => {
  usePageMeta(
    'Communication Workshops for Teams and Keynotes | Dennis Kenney | Ivy Level Speaking',
    'Communication workshops for leadership, sales, and technical teams, plus keynotes on executive presence. Dennis Kenney comes to your organization in person or works with your team online.'
  );
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
      <section className="team-how" aria-labelledby="team-how-title">
        <h1 id="team-how-title" className="speaking__headline">
          Communication Workshops for Your Team
        </h1>
        <p className="team-how__intro">
          I come to your organization and train your people to communicate
          with clarity and presence. I work with leadership teams, sales and
          client facing teams, and technical and research groups. I teach
          Strategic Communication at NYU Stern and coach at Harvard Business
          School, and I bring the same methods into companies, in person at
          your office or online.
        </p>
        <h2 className="team-how__heading">How a team workshop works</h2>
        <ol className="team-how__steps">
          <li>
            <strong>We talk first.</strong> A short call with you or your team
            lead about the moments that matter most: client pitches, leadership
            updates, board presentations, all hands meetings.
          </li>
          <li>
            <strong>I build it around your work.</strong> Your team practices
            on its own real presentations and messages, not generic exercises.
          </li>
          <li>
            <strong>I come to you.</strong> At your office or online, as a
            single session, a half or full day, or a series over several weeks.
          </li>
          <li>
            <strong>Leaders get follow up.</strong> Optional one on one coaching
            for the people carrying your highest stakes moments.
          </li>
        </ol>
        <div className="team-how__cta">
          <a
            href="https://calendly.com/ivylevelspeaking/consultation"
            className="button__main"
            target="_blank"
            rel="noreferrer"
          >
            Book a Call About Your Team
          </a>
        </div>
      </section>

      <h2 className="speaking__headline">Workshop and Keynote Topics</h2>
      <section className="outline-sp">
        <p className="outline-sp__text">
          Each topic runs as a hands on team workshop or as a keynote for an
          offsite, conference, or company event. Dennis recently presented
          “Make Your Message Land: The Power of Executive Presence” at the
          C-Vision National Summit in New York. Every session is tailored to
          your audience and is available in person or virtually.
        </p>
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
      <h2 className="speaking__headline">Watch Dennis in Action</h2>
      <Video
        url={'https://www.youtube.com/embed/h8VRiK9IjRM'}
        title={'Dennis Kenney speaker reel'}
      />
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
