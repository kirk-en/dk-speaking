import Header from '../../components/Header/Header';
import Hero from './HeroHome/HeroHome';
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid';
import Featured from '../../components/Featured/Featured';
import Video from '../../components/Video/Video';
import Footer from '../../components/Footer/Footer';
import FixedQuote from '../../components/FixedQuote/FixedQuote';
import BookPromo from '../../components/BookPromo/BookPromo';
import './HomePage.scss';
import NewsletterModal from '../../components/NewsletterModal/NewsletterModal';

// const newsletterToken = localStorage.getItem('newsletterToken');

const HomePage = (): JSX.Element => {
  return (
    <>
      <div className="top-section top-section__home">
        <Header />
        <Hero />
      </div>
      <main className="main">
        <h1 className="main__headline">
          Your Guide to Mastering Communication
        </h1>
        <section className="main__content">
          <article className="main__content-text">
            <p>
              With a career that spans the worlds of business, academia, and
              media, I’ve had the privilege of coaching individuals and teams to
              find their voice and communicate with impact. As a public speaking
              expert, I’ve trained professionals across industries—from Fortune
              500 corporations to leading universities like Harvard, Columbia,
              and Northwestern. My approach blends years of experience in
              theater, brand storytelling, and executive communication, allowing
              me to offer a unique perspective on how to engage, persuade, and
              leave a lasting impression. <br />
              <br />
              I’ve helped leaders prepare for high-stakes presentations,
              executives refine their presence in the boardroom, and teams
              sharpen their communication to improve workplace collaboration.
              Whether you're speaking at a major conference, leading a meeting,
              or navigating everyday conversations at work, I can help you
              master public speaking and communication techniques that inspire
              confidence and command attention.
            </p>
            <a
              href="https://calendly.com/ivylevelspeaking/coaching-consultation"
              className="button__main"
              target="_blank"
            >
              Book a Free 15-Minute Consultation
            </a>
          </article>
          <div className="main__content-gallery">
            <PhotoGrid />
          </div>
        </section>
      </main>

      <BookPromo />
      <Featured />
      <Video
        url={'https://www.youtube.com/embed/xJx5DyRn0wk'}
        title={'Dennis Kenney'}
      />
      <FixedQuote />
      <NewsletterModal />
      <Footer />
    </>
  );
};

export default HomePage;
