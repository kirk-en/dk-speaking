import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import usePageMeta from '../../usePageMeta';
import '../Hero.scss';
import './AcademicPage.scss';

const CALENDLY = 'https://calendly.com/ivylevelspeaking/consultation';

const faqs = [
  {
    q: 'Do I need a finished slide deck before we start?',
    a: 'No. Bring whatever you have: an outline, a draft deck, or your job market paper. Many candidates get the most from working on the opening and the structure before the slides are final.',
  },
  {
    q: 'How is a job talk different from a dissertation defense?',
    a: 'A defense proves you did the work. A job talk persuades a department that you will be a valuable colleague. That means a broader audience, a clearer contribution, and a sense of where your research goes next.',
  },
  {
    q: 'My talk slot is fixed. How do we use the time?',
    a: 'We plan backward from the slot you were given, decide what earns its place, and rehearse to time so you finish with room for questions instead of rushing your conclusion.',
  },
  {
    q: 'Is coaching virtual?',
    a: 'Most sessions are virtual, so you can work with me from anywhere in the country. In person sessions are available in New York City and the Boston area by arrangement.',
  },
  {
    q: 'When should I start?',
    a: 'As soon as you have a campus visit on the calendar. Two or three sessions before the talk is typical, with the final one close enough to the date to feel like a dress rehearsal.',
  },
];

const AcademicPage = () => {
  usePageMeta(
    'Academic Job Talk Coaching for PhD Candidates | Dennis Kenney',
    'Rehearse your faculty job talk with Dennis Kenney, a coach at Harvard Business School, Columbia Business School, and MIT. Clarify your contribution and practice faculty questions, online.'
  );

  // Structured data so search engines and AI assistants can read the service and FAQ.
  useEffect(() => {
    const data = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Academic Job Talk Coaching',
        serviceType: 'Academic job talk and faculty interview coaching',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Ivy Level Speaking',
          url: 'https://ivylevelspeaking.com',
          founder: { '@type': 'Person', name: 'Dennis Kenney' },
        },
        areaServed: 'United States',
        audience: {
          '@type': 'Audience',
          audienceType: 'PhD candidates and postdoctoral researchers',
        },
        url: 'https://ivylevelspeaking.com/coaching/academic',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ];
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'academic-ld';
    tag.text = JSON.stringify(data);
    document.head.appendChild(tag);
    return () => tag.remove();
  }, []);

  return (
    <>
      <div className="top-section top-section__academic">
        <div className="hero-photo" aria-hidden="true"></div>
        <Header />
        <div className="hero hero--left academic__hero">
          <aside className="hero__left academic__hero-text">
            <h1 className="hero__headline">
              Academic Job Talk Coaching for PhD Candidates
            </h1>
            <p className="hero__text">
              Your committee knows your field. The rest of the room still needs
              a reason to care.
            </p>
            <a
              href={CALENDLY}
              className="button__main button__main--lr-zero-margin"
              target="_blank"
              rel="noreferrer"
            >
              Plan my job talk rehearsal
            </a>
          </aside>
        </div>
      </div>

      <main className="academic">
        <section className="academic__intro">
          <p>
            A job talk is not a summary of your dissertation. It is a one hour
            argument that you belong in the department. I coach PhD candidates
            and postdoctoral researchers at Harvard Business School, Columbia
            Business School, the Harvard AI Institute, and MIT to make that
            argument clearly, hold the room, and answer hard questions without
            losing the thread. Bring your opening, and we will make the
            question, the contribution, and the stakes impossible to miss.
          </p>
        </section>

        <section className="academic__grid">
          <article className="academic__card">
            <h2>Speak to the whole room</h2>
            <p>
              The specialist is listening for your method. The colleague from
              another subfield is deciding whether your question matters. We
              build a talk that works for both, so no one in the audience
              checks out in the first five minutes.
            </p>
          </article>
          <article className="academic__card">
            <h2>Make the contribution audible</h2>
            <p>
              Search committees remember one sentence. We sharpen your opening
              until the research question, the gap, and your contribution each
              land in a single clear line, then carry that line through to your
              conclusion.
            </p>
          </article>
          <article className="academic__card">
            <h2>Rehearse the interruptions</h2>
            <p>
              Faculty audiences interrupt. In mock question rounds you practice
              answering an objection, acknowledging a limitation, and returning
              to your argument without sounding defensive or losing your place.
            </p>
          </article>
          <article className="academic__card">
            <h2>Own the delivery</h2>
            <p>
              Pace, pauses, movement, and how you handle the slides all signal
              whether you own the work. We refine the delivery so you sound
              like a future colleague, not a student reading a report.
            </p>
          </article>
        </section>

        <section className="academic__how">
          <h2 className="academic__heading">How virtual coaching works</h2>
          <ol className="academic__steps">
            <li>
              <strong>Send the essentials.</strong> Your job notice, the time
              limit, and a draft or outline of the talk.
            </li>
            <li>
              <strong>Rehearse on screen.</strong> You present with your slides
              shared, and I watch the way the committee will.
            </li>
            <li>
              <strong>Get focused feedback.</strong> The two or three changes
              that will matter most, not a list of fifty notes.
            </li>
            <li>
              <strong>Run it again.</strong> We rework the opening and the hard
              sections in the session, so you leave having already improved.
            </li>
          </ol>
        </section>

        <section className="academic__who">
          <h2 className="academic__heading">Who you will work with</h2>
          <p>
            I am Dennis Kenney, a professor of Strategic Communication at NYU
            Stern and an executive communication coach at Harvard Business
            School, Columbia Business School, the Harvard AI Institute, and MIT,
            where I work with PhD candidates. My doctoral research at Johns
            Hopkins University examines public speaking excellence and equity in
            doctoral education: who gets prepared for the highest stakes
            speaking moments of an academic career, and how to prepare everyone
            better. This work is not a side offering. It is the center of what I
            study.
          </p>
          <Link to="/about" className="academic__link">
            Read my full background
          </Link>
        </section>

        <section className="academic__faq">
          <h2 className="academic__heading">Questions before a campus visit</h2>
          {faqs.map((f) => (
            <details key={f.q} className="academic__faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        <section className="academic__cta">
          <h2>Have a campus visit on the calendar?</h2>
          <p>
            Tell me your talk date and your discipline, and we will plan your
            rehearsals backward from there.
          </p>
          <div className="academic__cta-buttons">
            <a
              href={CALENDLY}
              className="button__main"
              target="_blank"
              rel="noreferrer"
            >
              Plan my job talk rehearsal
            </a>
            <Link to="/contact" className="button__main">
              Send a message
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AcademicPage;
