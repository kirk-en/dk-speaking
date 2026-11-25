import Header from '../../components/Header/Header';
import Hero from './HeroHome/HeroHome';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Featured from '../../components/Featured/Featured';
import Video from '../../components/Video/Video';
import Footer from '../../components/Footer/Footer';
import usePageMeta from '../../usePageMeta';
import FixedQuote from '../../components/FixedQuote/FixedQuote';
import BookPromo from '../../components/BookPromo/BookPromo';
import './HomePage.scss';
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal';

// const newsletterToken = localStorage.getItem('newsletterToken');

const HomePage = (): JSX.Element => {
  usePageMeta(
    'Dennis Kenney | Executive Communication Coach and Speaker | Ivy Level Speaking',
    'Dennis Kenney is an executive communication coach, keynote speaker, and author of The Unexpected Stage. He coaches leaders at Harvard Business School, Columbia Business School, and Fortune 500 companies to speak with clarity and presence.'
  );
  return (
    <>
      <div className="top-section top-section__home">
        <Header />
        <Hero />
      </div>
      <main className="main">
        <h1 className="main__headline">
          In a World Run by AI, the Human Voice Wins
        </h1>
        <section className="main__content">
          <article className="main__content-text">
            <p>
              Anyone can generate polished words now. What can’t be generated is
              presence: the ability to walk into a room, read it, and move the
              people in it. That is what I teach. <br />
              <br />
              I’m a communication and branding expert who has spent more than
              twenty years on stages, on national television, and in the
              classrooms of the world’s leading business schools. I teach
              Strategic Communication to MBA candidates at NYU Stern. Since 2021
              I’ve trained more than 500 students, doctoral candidates, and
              faculty at Harvard Business School. I coach at Columbia Business
              School and the Harvard AI Institute, and I serve as Communications
              Director for the Loeb Fellowship at the Harvard Graduate School of
              Design. <br />
              <br />
              Outside the university, I work with C suite leaders and teams at
              Fortune 500 companies including Sanofi and GE. They come to me
              before the moments that decide things: the board presentation, the
              keynote, the job talk, the media interview. <br />
              <br />
              I also coach middle school and high school students in speech,
              debate, and admissions interviews.
            </p>
            <a
              href="https://calendly.com/ivylevelspeaking/consultation"
              className="button__main"
              target="_blank"
            >
              Book a Free 15 Minute Consultation
            </a>
          </article>
          <div className="main__content-gallery">
            <PhotoGrid />
          </div>
        </section>
      </main>

      <BookPromo />
      <Featured />
      <h2 className="main__headline">
        As Seen on NBC TV: How to Command a Room
      </h2>
      <Video
        url={'https://www.youtube.com/embed/c4MzGrQ_yOI?start=20'}
        title={'Dennis Kenney on NBC TV: How to Command a Room in 5 Seconds'}
      />
      <FixedQuote />
      <NewsletterModal />
      <Footer />
    </>
  );
};

export default HomePage;
