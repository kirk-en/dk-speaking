import Header from '../../components/Header/Header';
import HeroAbout from './HeroAbout/HeroAbout';
import Footer from '../../components/Footer/Footer';
import usePageMeta from '../../usePageMeta';
import hbsPhoto from '../../assets/photo-grid/harvard.jpg';
import dennisPhoto from '../../assets/about-portrait.jpg';
import { useEffect, useRef, useState } from 'react';
import './AboutPage.scss';
import Booking from '../../components/Booking/Booking';
import DynamicQuote from '../../components/DynamicQuote/DynamicQuote';

const AboutPage = () => {
  usePageMeta(
    'About Dennis Kenney | Professor, Coach, and Branding Expert | Ivy Level Speaking',
    'Dennis Kenney is a professor of Strategic Communication at NYU Stern, a coach at Harvard Business School, a TEDx speaker, and the bestselling author of The Unexpected Stage.'
  );
  const gradientRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMidViewport = windowWidth <= 1100 && windowWidth >= 810;

  const openingCopy = (
    <>
      <span className="about__content-text--opening">
        From the stage to the boardroom...
      </span>
      <br />
      I started on stage. I earned a BFA in Drama with honors from Carnegie
      Mellon University, where I learned that an audience decides in seconds
      whether to trust you. I’ve spent my career studying why.
      <br />
      <br />
      That question took me to Northwestern University, where I earned a Master
      of Science in Communication with honors, and now to Johns Hopkins
      University, where my doctoral research examines public speaking
      excellence and equity in doctoral education: who gets prepared for the
      highest stakes speaking moments of an academic career, and how to prepare
      everyone better.
      <br />
      <br />
      For four years I was a branding consultant and on air contributor at Good
      Morning America, shaping how some of the most recognized people in
      television present themselves to millions. I’ve appeared as an on air
      expert for ABC News and QVC, and my work has been featured in The New
      York Times, Forbes, and Yahoo Finance.
      <br />
      <br />
      Today I’m a professor of Strategic Communication at NYU Stern and the
      founder of Ivy Level Speaking. At Harvard Business School, I’ve led
      workshops for doctoral candidates and research fellows from more than 70
      countries. At Columbia Business School, I prepare MBA and doctoral
      students for interviews and dissertation defenses. At the Harvard
      Graduate School of Design, I coach each class of Loeb Fellows.
    </>
  );

  const closingCopy = (
    <>
      I’m a TEDx speaker, I’ve served as head speaking director for
      TEDxHarvard, and in 2026 I presented “Make Your Message Land: The Power
      of Executive Presence” at the C-Vision National Summit in New York. My
      book, The Unexpected Stage, is an Amazon bestseller.
      <br />
      <br />
      I also coach the next generation. I work privately with middle school and
      high school students on public speaking, competitive debate, and
      admissions interviews, giving families a personal alternative to large
      coaching companies.
      <br />
      <br />
      Whether we work together in person or virtually, my approach is the same:
      the discipline of the theater, the rigor of the classroom, and the
      strategy of the boardroom. I won’t hand you a script or a persona. We’ll
      build a way of speaking that is unmistakably yours.
    </>
  );

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
      <div className="top-section top-section__about">
        <Header />
        <HeroAbout />
      </div>
      <main className={`about ${isMidViewport ? 'about--mid-viewport' : ''}`}>
        <h1 className="about__headline">My Story:</h1>
        <section className="about__content">
          <article className="about__content-text">
            <p>{openingCopy}</p>
          </article>
          <div className="about__content-gallery">
            <img
              src={dennisPhoto}
              alt="Portrait of Dennis Kenney in a navy suit"
              className="about__single-photo--tall"
            />

            {isMidViewport && (
              <img
                src={hbsPhoto}
                alt="Dennis Kenney in his speaking class at Harvard Business School"
                className="about__single-photo"
              />
            )}
          </div>
        </section>

        {isMidViewport ? (
          <section className="about__content-text about__content-text--full-width">
            <p>{closingCopy}</p>
          </section>
        ) : (
          <section className="about__content">
            <div className="about__content-gallery">
              <img
                src={hbsPhoto}
                alt="Dennis Kenney in his speaking class at Harvard Business School"
                className="about__single-photo"
              />
            </div>
            <article className="about__content-text">
              <p>{closingCopy}</p>
            </article>
          </section>
        )}
      </main>
      <article
        className="quote"
        onMouseMove={handleMouseMove}
        ref={gradientRef}
      >
        <DynamicQuote />
      </article>
      <Booking />
      <Footer />
    </>
  );
};

export default AboutPage;
