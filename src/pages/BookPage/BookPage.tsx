import Header from '../../components/Header/Header';
import HeroBook from './HeroBook/HeroBook';
import Footer from '../../components/Footer/Footer';
import dennisPhoto from '../../assets/dennis-side-profile.jpg';
import '../../components/BookPromo/BookPromo.scss';
import './BookPage.scss';

const AMAZON_URL =
  'https://www.amazon.com/Unexpected-Stage-Reinvention-Authentic-Communication/dp/B0G1CMX1ZX';

const reviews = [
  {
    quote:
      'Dennis Kenney turns the spotlight on what it truly means to evolve with grace. His story bridges art, intellect, and emotion—reminding us that every setback can be the start of our greatest act.',
    name: 'Marissa Lowe',
    title: 'Editor',
  },
  {
    quote:
      "Few books blend performance and personal growth like this one. Kenney's voice feels like a coach, artist, and philosopher rolled into one—guiding readers toward authenticity with warmth and precision.",
    name: 'Julian Reed',
    title: 'Author',
  },
  {
    quote:
      'Kenney invites readers to rethink reinvention not as change, but as rediscovery. His lessons on communication and courage will stay with you long after you close the book.',
    name: 'Dr. Karen Delaney',
    title: 'Leadership Speaker & Communication Coach',
  },
];

const BookPage = (): JSX.Element => {
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
                A transformative journey through self-discovery, authenticity,
                and courage...
              </span>
              <br />
              From the frozen rinks of competitive hockey to the bright lights
              of theater and the classrooms of Harvard, Dennis Kenney's story
              unfolds as a masterclass in resilience and personal evolution.
              Through raw honesty and powerful storytelling, he reveals how
              life's disruptions can become opportunities for growth and
              purpose.
            </p>
            <p>
              Learn how to move from fear to freedom, from chaos to clarity, and
              from performance to presence. Each chapter blends personal
              storytelling with actionable insights, showing that reinvention is
              not about becoming someone new — it's about reclaiming who you
              truly are.
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
              Whether you're facing a major life change, striving for
              professional growth, or seeking to reconnect with your purpose,{' '}
              <em>The Unexpected Stage</em> provides both inspiration and
              strategy for your own reinvention.
            </p>
            <p>
              Drawing on decades of experience as a performer, educator, and
              communication coach, Dennis shows readers how to build confidence,
              embrace vulnerability, and communicate with authenticity in every
              stage of life. This isn't just a memoir — it's a guide to
              transforming disruption into your most powerful performance yet.
            </p>
            <p>
              Discover how authenticity can become your greatest strength, and
              how every setback can become the stage for your next act.
            </p>
          </article>
          <div className="book-page__content-gallery">
            <img
              src={dennisPhoto}
              alt="Dennis Kenney — author, speaker, and communication expert"
              className="book-page__single-photo"
            />
          </div>
        </section>

        <section className="book-page__reviews">
          <h2 className="book-page__reviews-headline">
            What People Are Saying
          </h2>
          <div className="book-page__reviews-grid">
            {reviews.map((review, index) => (
              <div className="book-page__review-card" key={index}>
                <p className="book-page__review-quote">"{review.quote}"</p>
                <p className="book-page__review-attribution">— {review.name}</p>
                <p className="book-page__review-title">{review.title}</p>
              </div>
            ))}
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
