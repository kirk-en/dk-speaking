import quoteData from "../../assets/testimonials.json";

const DynamicQuote = () => {
  let quoteSeed = Math.floor(Math.random() * quoteData.length);
  console.log("quote seed is:", quoteSeed);

  return (
    <div className="quote__text">
      <h2>Project Your Presence</h2>
      <h3>{`"${quoteData[quoteSeed].quote}"`}</h3>
      <p>- {quoteData[quoteSeed].name}</p>
      <p>{`${quoteData[quoteSeed].title}, ${quoteData[quoteSeed].company}`}</p>
    </div>
  );
};

export default DynamicQuote;
