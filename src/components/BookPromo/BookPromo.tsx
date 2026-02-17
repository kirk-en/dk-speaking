import { useState, useEffect } from 'react';
import './BookPromo.scss';

const BookPromo = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTabletView = windowWidth >= 690 && windowWidth <= 875;

  return (
    <section className="book-promo">
      <div className="book-promo__content">
        <h2>The Unexpected Stage</h2>
        <p>
          A transformative journey through self-discovery, authenticity, and the
          courage to reinvent yourself when life takes an unexpected turn.
        </p>
        <p>
          From hockey to theater to Harvard classrooms, Dennis Kenney's story is
          a masterclass in resilience. Discover how authenticity becomes your
          greatest strength and every setback becomes the stage for your next
          act.
        </p>
        <p>
          <strong className="book-promo__badge">
            {!isTabletView ? (
              <span>⭐⭐⭐ #1 in Amazon Communication ⭐⭐⭐</span>
            ) : (
              <span>⭐ #1 in Amazon Communication ⭐</span>
            )}
          </strong>
        </p>
        <a
          href="https://www.amazon.com/Unexpected-Stage-Reinvention-Authentic-Communication/dp/B0G1CMX1ZX"
          target="_blank"
          rel="noopener noreferrer"
          className="book-promo__button"
        >
          <span>ORDER NOW AT</span>
          <img src="/Amazon_logo.png" alt="Amazon Logo" />
        </a>
      </div>
      <a
        href="https://www.amazon.com/Unexpected-Stage-Reinvention-Authentic-Communication/dp/B0G1CMX1ZX"
        target="_blank"
        rel="noopener noreferrer"
        className="book-items"
      >
        <div className="main-book-wrap">
          <div className="book-cover">
            <div className="book-inside"></div>
            <div className="book-image">
              <img src="/book-cover.png" alt="Book Cover" />
              <div className="effect"></div>
              <div className="light"></div>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default BookPromo;
