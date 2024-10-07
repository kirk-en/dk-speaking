import quoteData from "../../assets/testimonials.json";
import "./DynamicQuote.scss";

const DynamicQuote = () => {
  let quoteSeed = Math.floor(Math.random() * quoteData.length);

  return (
    <div className="quote__text">
      <h2>{quoteData[quoteSeed].headline}</h2>
      <h3>{`"${quoteData[quoteSeed].quote}"`}</h3>
      <p>- {quoteData[quoteSeed].name}</p>
      <p>{`${quoteData[quoteSeed].title}, ${quoteData[quoteSeed].company}`}</p>
    </div>
  );
};

export default DynamicQuote;
