import quoteData from "../../assets/testimonials.json";

const DynamicQuote = () => {
  let quoteSeed = Math.floor(Math.random() * quoteData.length);
  console.log("quote seed is:", quoteSeed);

  return (
    <div className="quote__text">
      <h2>Project Your Presence</h2>
      <h3>
        “Every word is an opportunity—choose those that move, inspire, and
        create change.”
      </h3>
      <p>— Dennis Kenney</p>
    </div>
  );
};

export default DynamicQuote;
