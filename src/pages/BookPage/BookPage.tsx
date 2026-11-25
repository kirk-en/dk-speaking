import Header from '../../components/Header/Header';
import HeroBook from './HeroBook/HeroBook';
import Footer from '../../components/Footer/Footer';
import usePageMeta from '../../usePageMeta';
import dennisPhoto from '../../assets/side-book.jpg';
import '../../components/BookPromo/BookPromo.scss';
import './BookPage.scss';

const AMAZON_URL =
  'https://www.amazon.com/Unexpected-Stage-Reinvention-Authentic-Communication/dp/B0G1CMX1ZX';

const BookPage = (): JSX.Element => {
  usePageMeta(
    'The Unexpected Stage by Dennis Kenney | Amazon Bestseller',
    'The Unexpected Stage by Dennis Kenney is a guide to reinvention, authenticity, and communication, drawn from a career on stage, on television, and in the classroom.'
  );
  return (
    <>
      <div className="top-section top-section__book">
        <Header />
        <HeroBook />
      </div>
      <main className="book-page">
        <h1 className="book-page__headline">About the Book</h1>

        <section className="book-page__content">
          <div className="book-page__content-visual">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="book-items"
            >
              <div className="main-book-wrap">
                <div className="book-cover">
                  <div className="book-inside"></div>
                  <div className="book-image">
                    <img
                      src="/book-cover.png"
                      alt="The Unexpected Stage by Dennis Kenney"
                    />
                    <div className="effect"></div>
                    <div className="light"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <article className="book-page__content-text">
            <p>
              <span className="book-page__content-text--opening">
                From the ice rink to the stage to the classroom...
              </span>
              <br />
              <em>The Unexpected Stage</em> is the story behind the coaching.
              Dennis Kenney grew up on the frozen rinks of competitive hockey,
              found his voice under the bright lights of the theater, and now
              teaches in the classrooms of Harvard. In this book he shows how
              the disruptions that knock us off course can become the moments
              that define us.
            </p>
            <p>
              Each chapter pairs a personal story with practical tools you can
              use right away. You'll learn to move from fear to freedom, from
              chaos to clarity, and from performance to presence. Reinvention,
              he argues, is not about becoming someone new. It's about
              reclaiming who you truly are.
            </p>
            <p>
              <strong className="book-promo__badge">
                ⭐⭐⭐⭐⭐ #1 in Amazon Communication
              </strong>
            </p>
          </article>
        </section>

        <section className="book-page__content">
          <article className="book-page__content-text">
            <p>
              <span className="book-page__content-text--opening">
                Who is this book for?
              </span>
              <br />
              Whether you're facing a major life change, stepping into a bigger
              role, or trying to reconnect with your purpose,{' '}
              <em>The Unexpected Stage</em> offers both inspiration and
              strategy for your own reinvention.
            </p>
            <p>
              Drawing on more than twenty years as a performer, professor, and
              executive communication coach, Dennis shows readers how to build
              confidence, embrace vulnerability, and speak with authenticity at
              every stage of life. It's a memoir and a field guide in one.
            </p>
            <p>
              Discover how authenticity can become your greatest strength, and
              how every setback can become the stage for your next act.
            </p>
          </article>
          <div className="book-page__content-gallery">
            <img
              src={dennisPhoto}
              alt="Dennis Kenney, author, speaker, and communication expert"
              className="book-page__single-photo"
            />
          </div>
        </section>

        <section className="book-page__cta">
          <h2 className="book-page__cta-headline">
            Ready to Begin Your Reinvention?
          </h2>
          <p className="book-page__cta-text">
            Discover how authenticity can become your greatest strength.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="book-promo__button"
          >
            <span>ORDER NOW AT</span>
            <img src="/Amazon_logo.png" alt="Amazon Logo" />
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookPage;
