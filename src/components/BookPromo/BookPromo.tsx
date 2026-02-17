import './BookPromo.scss';

const BookPromo = (): JSX.Element => {
  return (
    <section className="book-promo">
      <div className="book-promo__content">
        <h2>Unlock Your Speaking Potential</h2>
        <p>
          Discover proven techniques and strategies to transform your public
          speaking skills. Our comprehensive guide covers everything from
          crafting compelling narratives to commanding the stage with
          confidence.
        </p>
      </div>
      <div className="book-items">
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
      </div>
    </section>
  );
};

export default BookPromo;
