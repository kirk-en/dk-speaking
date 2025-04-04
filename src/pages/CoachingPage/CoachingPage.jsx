import Header from '../../components/Header/Header';
import HeroCoaching from './HeroCoaching/HeroCoaching';
import Footer from '../../components/Footer/Footer';
import hbsPhoto from '../../assets/photo-grid/harvard.jpg';
import { useRef } from 'react';
import Why from '../../components/Why/Why';
import execPhoto from '../../assets/speaking-for-presentation-teaching-and-discussion-at-work.jpg';
import DynamicQuote from '../../components/DynamicQuote/DynamicQuote';
import './CoachingPage.scss';

const CoachingPage = () => {
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
      </main>
      <Why />
      <section className="outline">
        <h1 className="coaching__headline">Coaching:</h1>
        <p className="outline__text">
          "Whether you’re preparing for a keynote, interview, academic
          presentation, or looking to stand out in the job market, I’ll guide
          you to deliver with confidence, clarity, and influence. Together,
          we’ll uncover your unique voice, helping you communicate authentically
          and connect powerfully with any audience. Ready to turn your words
          into opportunities? Let’s craft a story that captivates, inspires, and
          positions you for success in any setting."
        </p>
        <article className="outline__entry">
          <div
            className="outline__banner outline__banner--exec"
            role="img"
            aria-label="A stylized picture of an executive at a tech conference speaking to a audience"
          ></div>
          <h2>Executive Presence</h2>
          <p>
            I specialize in executive speaking coaching designed to empower
            leaders to communicate with confidence and impact. Whether it's
            enhancing your presentation skills, mastering executive presence, or
            navigating high-stakes conversations, together, we'll develop a
            strategy that hones your unique voice and style, ensuring you
            connect effectively.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--school"
            role="img"
            aria-label="an outdoor landscape photo looking through the arches of a prestigious ivy league school"
          ></div>
          <h2>Interview & Job Market Preparation</h2>
          <p>
            Stand out in interviews and job market presentations with coaching
            that’s not cookie-cutter, but rather tailored to your unique
            personality, strengths, and career goals. I’ll help you refine your
            story, enhance your communication skills, and present yourself with
            authenticity and confidence.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--fashion"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Image</h2>
          <p>
            Image coaching that’s as unique as you are—no one-size-fits-all
            approach here. Together, we’ll craft a personal brand that aligns
            with your goals, ensuring your wardrobe, body language, and presence
            authentically reflect who you are and leave a lasting, confident
            impression.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--media"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Media and On-Air Training</h2>
          <p>
            Navigate the media landscape with confidence through tailored media
            and on-air training. Whether you're preparing for a TV interview,
            podcast appearance, or online panel, I’ll help you develop the
            skills needed to communicate your message effectively and
            professionally. From mastering concise sound bites to delivering
            compelling narratives, you'll learn how to present yourself
            confidently in high-visibility situations.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--corporate"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Corporate Workshops</h2>
          <p>
            Elevate your team's communication skills with customized corporate
            workshops. Whether it's for leadership development, enhancing
            collaboration, or improving presentation techniques, my workshops
            are designed to engage and empower participants. We’ll focus on
            practical strategies that can be immediately applied, ensuring your
            team is equipped to succeed in today’s fast-paced business
            environment.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--academic"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Academic Presentations</h2>
          <p>
            Ace your next academic presentation with coaching designed
            specifically for scholars and students. Whether you're preparing for
            a thesis defense, conference presentation, or lecture, I’ll help you
            refine your content, organize your ideas, and deliver with clarity
            and authority. My approach will ensure that your message is both
            engaging and intellectually impactful, no matter your audience.
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

export default CoachingPage;
