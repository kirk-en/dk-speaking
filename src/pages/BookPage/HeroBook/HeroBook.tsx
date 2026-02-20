import '../../Hero.scss';
import '../../../components/BookPromo/BookPromo.scss';

const HeroBook = (): JSX.Element => {
  return (
    <div className="hero">
      <aside className="hero__right">
        <h2 className="hero__headline">The Unexpected Stage</h2>
        <p className="hero__text">
          The Art of Reinvention Through Authentic Communication
        </p>
        <a
          href="https://www.amazon.com/Unexpected-Stage-Reinvention-Authentic-Communication/dp/B0G1CMX1ZX"
          className="book-promo__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>ORDER NOW AT</span>
          <img src="/Amazon_logo.png" alt="Amazon Logo" />
        </a>
      </aside>
    </div>
  );
};

export default HeroBook;
