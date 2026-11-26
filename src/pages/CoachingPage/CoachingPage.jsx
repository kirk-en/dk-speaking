import Header from '../../components/Header/Header';
import HeroCoaching from './HeroCoaching/HeroCoaching';
import usePageMeta from '../../usePageMeta';
import Footer from '../../components/Footer/Footer';
import hbsPhoto from '../../assets/photo-grid/harvard.jpg';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Why from '../../components/Why/Why';
import execPhoto from '../../assets/speaking-for-presentation-teaching-and-discussion-at-work.jpg';
import DynamicQuote from '../../components/DynamicQuote/DynamicQuote';
import './CoachingPage.scss';

const CoachingPage = () => {
  usePageMeta(
    'Executive Communication Coaching | Dennis Kenney | Ivy Level Speaking',
    'One on one coaching in executive presence, interview and job talk preparation, media training, personal brand, academic presentations, and student speech and debate. In person or virtual.'
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
      <div className="top-section top-section__coaching">
        <Header />
        <HeroCoaching />
      </div>
      <main className="coaching">
        <article className="coaching__headline-text">
          <p>
            Ivy Level Speaking exists for the moments that decide things. I
            coach executives, founders, scholars, and students to speak with
            clarity, authority, and presence, using methods I teach at Harvard
            Business School and NYU Stern. Every engagement is built around
            you: your goals, your audience, and your voice. Coaching is
            available in person in New York and Boston, and virtually anywhere
            in the world.
          </p>
        </article>
      </main>
      <Why />
      <section className="outline">
        <h1 className="coaching__headline">Coaching:</h1>
        <p className="outline__text">
          Whether you’re preparing for a keynote, a board presentation, a
          media interview, or a job talk, we’ll start with what you need to
          accomplish and build backward from there. You’ll leave every session
          with a sharper message, a stronger delivery, and specific things to
          practice.
        </p>
        <article className="outline__entry">
          <div
            className="outline__banner outline__banner--exec"
            role="img"
            aria-label="A stylized picture of an executive at a tech conference speaking to a audience"
          ></div>
          <h2>Executive Presence</h2>
          <p>
            Command the room when the stakes are highest. I work one on one with
            executives and senior leaders on presence, message, and delivery
            for board meetings, investor presentations, town halls, and
            keynotes. We’ll build a way of speaking that sounds like you and
            holds up under pressure.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--school"
            role="img"
            aria-label="an outdoor landscape photo looking through the arches of a prestigious ivy league school"
          ></div>
          <h2>Interview & Job Market Preparation</h2>
          <p>
            Stand out in executive interviews, MBA recruiting, and academic job
            talks. I’ve prepared candidates at Harvard Business School and
            Columbia Business School to tell their story, answer hard questions
            with composure, and leave a lasting impression. Your coaching is
            built around your strengths and the role you want.{' '}
            <Link to="/coaching/academic" className="outline__more">
              Preparing a faculty job talk?
            </Link>
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--fashion"
            role="img"
            aria-label="3 mannequins showing high end mens suits through the window of a fashion shop in Milan, Italy"
          ></div>
          <h2>Personal Brand and Image</h2>
          <p>
            How you present yourself speaks before you do. Drawing on years as a
            branding consultant for national television, I’ll help you shape a
            personal brand where your message, your appearance, and your body
            language all say the same thing. The result is a presence that is
            consistent, credible, and yours.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--media"
            role="img"
            aria-label="Dennis Kenney being interviewed on an ABC News set"
          ></div>
          <h2>Media and On Air Training</h2>
          <p>
            Prepare for television, podcasts, panels, and press interviews with a
            coach who has been on air for ABC News, Good Morning America, and
            QVC. You’ll learn to deliver concise sound bites, handle difficult
            questions, and stay composed on camera, so your message lands the
            way you intend.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--corporate"
            role="img"
            aria-label="A group of colleagues applauding during a workshop"
          ></div>
          <h2>Corporate Workshops</h2>
          <p>
            Raise the communication standard across your team. I design custom
            workshops for Fortune 500 companies and growing organizations on
            executive presence, presentation skills, and storytelling. Every
            session is interactive and practical, so your team leaves with
            skills they can use the same day. Available on site or virtually.
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--academic"
            role="img"
            aria-label="A wood paneled university lecture hall"
          ></div>
          <h2>Academic Presentations</h2>
          <p>
            Present your research with clarity and authority. I coach doctoral
            candidates, postdoctoral fellows, and faculty for job talks,
            dissertation defenses, conference presentations, and lectures.
            This is the work I do at Harvard Business School and Columbia
            Business School, and it’s the focus of my own doctoral research at
            Johns Hopkins.{' '}
            <Link to="/coaching/academic" className="outline__more">
              See academic job talk coaching
            </Link>
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
        <article className="outline__entry">
          {' '}
          <div
            className="outline__banner outline__banner--school"
            role="img"
            aria-label="an outdoor landscape photo looking through the arches of a prestigious ivy league school"
          ></div>
          <h2>Student Speaking, Debate, and Interview Coaching</h2>
          <p>
            The same methods I teach at Harvard and NYU, adapted for middle
            school and high school students. I coach young speakers for
            competitive speech and debate, school admissions interviews, college
            interviews, class presentations, and TED style talks. Students learn
            to organize their thinking, speak with confidence, and hold a room,
            skills that serve them long after the tournament or the interview
            is over. Sessions are available in person and virtually.
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

export default CoachingPage;
